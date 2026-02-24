import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { EGYPTIAN_TICKERS, getStockQuote, getStockHistory, getStockStatistics, getFinancialData } from '@/lib/finance-api';

// GET - Get specific company data
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ ticker: string }> }
) {
  try {
    const { ticker } = await params;
    const { searchParams } = new URL(request.url);
    const includeHistory = searchParams.get('history') === 'true';
    const includeFinancials = searchParams.get('financials') === 'true';

    // Get company from database
    let company = await db.egyptianCompany.findFirst({
      where: {
        OR: [
          { tickerSymbol: ticker },
          { tickerSymbol: ticker.toUpperCase() },
          { tickerSymbol: `${ticker.toUpperCase()}.CA` },
        ],
      },
      include: {
        financialData: {
          orderBy: { reportDate: 'desc' },
          take: 4,
        },
        stockPrices: includeHistory
          ? {
              orderBy: { date: 'desc' },
              take: 30,
            }
          : false,
        tradingData: {
          orderBy: { date: 'desc' },
          take: 1,
        },
        sentimentScore: {
          orderBy: { date: 'desc' },
          take: 1,
        },
      },
    });

    // If not found in database, use static data
    if (!company) {
      const tickerData = EGYPTIAN_TICKERS[ticker.toUpperCase()] || 
                         Object.entries(EGYPTIAN_TICKERS).find(([key]) => 
                           key.toUpperCase() === ticker.toUpperCase() ||
                           `${key.toUpperCase()}.CA` === ticker.toUpperCase()
                         )?.[1];

      if (!tickerData) {
        return NextResponse.json(
          { success: false, error: 'Company not found' },
          { status: 404 }
        );
      }

      company = {
        id: ticker.toUpperCase(),
        tickerSymbol: ticker.toUpperCase(),
        nameEn: tickerData.nameEn,
        nameAr: tickerData.nameAr,
        sector: tickerData.sector,
        sectorAr: tickerData.sectorAr,
        description: null,
        website: null,
        foundedYear: null,
        employees: null,
        headquarters: null,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        financialData: [],
        stockPrices: [],
        tradingData: [],
        sentimentScore: [],
      };
    }

    // Fetch real-time data from Finance API
    const yahooTicker = EGYPTIAN_TICKERS[company.tickerSymbol]?.yahoo || `${company.tickerSymbol}.CA`;
    
    let realTimeData = null;
    let statistics = null;
    let financials = null;
    let history = null;

    try {
      realTimeData = await getStockQuote(yahooTicker);
    } catch (e) {
      console.log('Could not fetch real-time data');
    }

    try {
      statistics = await getStockStatistics(yahooTicker);
    } catch (e) {
      console.log('Could not fetch statistics');
    }

    if (includeFinancials) {
      try {
        financials = await getFinancialData(yahooTicker);
      } catch (e) {
        console.log('Could not fetch financials');
      }
    }

    if (includeHistory) {
      try {
        history = await getStockHistory(yahooTicker, '1d', 30);
      } catch (e) {
        console.log('Could not fetch history');
      }
    }

    // Combine data
    const enrichedCompany = {
      ...company,
      realTimeData,
      statistics: statistics?.statistics || null,
      financials: financials?.financialData || null,
      priceHistory: history?.body || null,
    };

    return NextResponse.json({
      success: true,
      data: enrichedCompany,
    });
  } catch (error) {
    console.error('Error fetching company:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch company data' },
      { status: 500 }
    );
  }
}
