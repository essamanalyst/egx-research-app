import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { EGYPTIAN_TICKERS } from '@/lib/finance-api';

// GET - List all companies
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sector = searchParams.get('sector');
    const search = searchParams.get('search');
    const sortBy = searchParams.get('sortBy') || 'tickerSymbol';
    const sortOrder = searchParams.get('sortOrder') || 'asc';

    // Try to get companies from database
    let companies = await db.egyptianCompany.findMany({
      where: {
        isActive: true,
        ...(sector && { sector }),
        ...(search && {
          OR: [
            { nameEn: { contains: search } },
            { nameAr: { contains: search } },
            { tickerSymbol: { contains: search } },
          ],
        }),
      },
      include: {
        financialData: {
          orderBy: { reportDate: 'desc' },
          take: 1,
        },
        tradingData: {
          orderBy: { date: 'desc' },
          take: 1,
        },
        sentimentScore: {
          orderBy: { date: 'desc' },
          take: 1,
        },
      },
      orderBy: {
        [sortBy]: sortOrder,
      },
    });

    // If no companies in database, return static data
    if (companies.length === 0) {
      companies = Object.entries(EGYPTIAN_TICKERS).map(([symbol, data]) => ({
        id: symbol,
        tickerSymbol: symbol,
        nameEn: data.nameEn,
        nameAr: data.nameAr,
        sector: data.sector,
        sectorAr: data.sectorAr,
        description: null,
        website: null,
        foundedYear: null,
        employees: null,
        headquarters: null,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        financialData: [],
        tradingData: [],
        sentimentScore: [],
      }));
    }

    return NextResponse.json({
      success: true,
      data: companies,
      count: companies.length,
    });
  } catch (error) {
    console.error('Error fetching companies:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch companies' },
      { status: 500 }
    );
  }
}
