import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET - Get macroeconomic indicators
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const period = searchParams.get('period') || 'latest';

    // Try to get data from database
    const indicators = await db.macroIndicator.findMany({
      where: period === 'latest'
        ? {
            date: {
              gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Last 30 days
            },
          }
        : {},
      orderBy: { date: 'desc' },
      take: period === 'latest' ? 10 : 100,
    });

    // If no data in database, return static sample data
    if (indicators.length === 0) {
      const sampleData = [
        {
          id: '1',
          date: new Date().toISOString(),
          indicatorType: 'exchange_rate',
          usdToEgp: 48.50,
          inflationRate: null,
          coreInflation: null,
          interestRate: null,
          discountRate: null,
          egx30Value: null,
          egx30Change: null,
          gdpGrowth: null,
          unemployment: null,
          foreignReserves: null,
        },
        {
          id: '2',
          date: new Date().toISOString(),
          indicatorType: 'inflation',
          usdToEgp: null,
          inflationRate: 33.7,
          coreInflation: 35.2,
          interestRate: null,
          discountRate: null,
          egx30Value: null,
          egx30Change: null,
          gdpGrowth: null,
          unemployment: null,
          foreignReserves: null,
        },
        {
          id: '3',
          date: new Date().toISOString(),
          indicatorType: 'interest_rate',
          usdToEgp: null,
          inflationRate: null,
          coreInflation: null,
          interestRate: 27.25,
          discountRate: 27.25,
          egx30Value: null,
          egx30Change: null,
          gdpGrowth: null,
          unemployment: null,
          foreignReserves: null,
        },
        {
          id: '4',
          date: new Date().toISOString(),
          indicatorType: 'egx30',
          usdToEgp: null,
          inflationRate: null,
          coreInflation: null,
          interestRate: null,
          discountRate: null,
          egx30Value: 28500,
          egx30Change: 1.5,
          gdpGrowth: null,
          unemployment: null,
          foreignReserves: null,
        },
        {
          id: '5',
          date: new Date().toISOString(),
          indicatorType: 'general',
          usdToEgp: null,
          inflationRate: null,
          coreInflation: null,
          interestRate: null,
          discountRate: null,
          egx30Value: null,
          egx30Change: null,
          gdpGrowth: 3.8,
          unemployment: 7.2,
          foreignReserves: 35.2,
        },
      ];

      return NextResponse.json({
        success: true,
        data: sampleData,
        lastUpdate: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      data: indicators,
      lastUpdate: indicators[0]?.createdAt || new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error fetching macro indicators:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch macro indicators' },
      { status: 500 }
    );
  }
}
