import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { EGYPTIAN_TICKERS } from '@/lib/finance-api';

// POST - Seed database with initial data
export async function POST() {
  try {
    const results = {
      companies: 0,
      macroIndicators: 0,
      errors: [] as string[],
    };

    // Seed Egyptian Companies
    for (const [symbol, data] of Object.entries(EGYPTIAN_TICKERS)) {
      try {
        await db.egyptianCompany.upsert({
          where: { tickerSymbol: symbol },
          create: {
            tickerSymbol: symbol,
            nameEn: data.nameEn,
            nameAr: data.nameAr,
            sector: data.sector,
            sectorAr: data.sectorAr,
            isActive: true,
          },
          update: {
            nameEn: data.nameEn,
            nameAr: data.nameAr,
            sector: data.sector,
            sectorAr: data.sectorAr,
          },
        });
        results.companies++;
      } catch (e) {
        results.errors.push(`Failed to seed company ${symbol}: ${e}`);
      }
    }

    // Seed Macro Indicators
    const macroData = [
      {
        date: new Date(),
        indicatorType: 'exchange_rate',
        usdToEgp: 48.50,
      },
      {
        date: new Date(),
        indicatorType: 'inflation',
        inflationRate: 33.7,
        coreInflation: 35.2,
      },
      {
        date: new Date(),
        indicatorType: 'interest_rate',
        interestRate: 27.25,
        discountRate: 27.25,
      },
      {
        date: new Date(),
        indicatorType: 'egx30',
        egx30Value: 28500,
        egx30Change: 1.5,
      },
      {
        date: new Date(),
        indicatorType: 'general',
        gdpGrowth: 3.8,
        unemployment: 7.2,
        foreignReserves: 35.2,
      },
    ];

    for (const macro of macroData) {
      try {
        await db.macroIndicator.create({
          data: macro,
        });
        results.macroIndicators++;
      } catch (e) {
        results.errors.push(`Failed to seed macro indicator ${macro.indicatorType}: ${e}`);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully',
      results,
    });
  } catch (error) {
    console.error('Error seeding database:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to seed database' },
      { status: 500 }
    );
  }
}

// GET - Check seed status
export async function GET() {
  try {
    const companyCount = await db.egyptianCompany.count();
    const macroCount = await db.macroIndicator.count();

    return NextResponse.json({
      success: true,
      data: {
        companies: companyCount,
        macroIndicators: macroCount,
        isSeeded: companyCount > 0,
      },
    });
  } catch (error) {
    console.error('Error checking seed status:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to check seed status' },
      { status: 500 }
    );
  }
}
