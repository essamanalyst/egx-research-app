import { NextRequest, NextResponse } from 'next/server';
import { 
  getStockQuote, 
  getStockHistory, 
  getStockStatistics, 
  getFinancialData,
  getBalanceSheet,
  getIncomeStatement,
  getCompanyProfile,
  EGYPTIAN_TICKERS
} from '@/lib/finance-api';

// GET - Fetch real-time finance data for a ticker
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ ticker: string }> }
) {
  try {
    const { ticker } = await params;
    const { searchParams } = new URL(request.url);
    const dataType = searchParams.get('type') || 'all';
    const days = parseInt(searchParams.get('days') || '30');

    // Get Yahoo Finance ticker format
    const tickerData = EGYPTIAN_TICKERS[ticker.toUpperCase()];
    const yahooTicker = tickerData?.yahoo || `${ticker.toUpperCase()}.CA`;

    let data: Record<string, unknown> = { ticker, yahooTicker };

    try {
      switch (dataType) {
        case 'quote':
          data.quote = await getStockQuote(yahooTicker);
          break;
        
        case 'history':
          data.history = await getStockHistory(yahooTicker, '1d', days);
          break;
        
        case 'statistics':
          data.statistics = await getStockStatistics(yahooTicker);
          break;
        
        case 'financials':
          data.financials = await getFinancialData(yahooTicker);
          break;
        
        case 'balance':
          data.balanceSheet = await getBalanceSheet(yahooTicker);
          break;
        
        case 'income':
          data.incomeStatement = await getIncomeStatement(yahooTicker);
          break;
        
        case 'profile':
          data.profile = await getCompanyProfile(yahooTicker);
          break;
        
        case 'all':
        default:
          const [quote, history, statistics, financials] = await Promise.allSettled([
            getStockQuote(yahooTicker),
            getStockHistory(yahooTicker, '1d', days),
            getStockStatistics(yahooTicker),
            getFinancialData(yahooTicker),
          ]);

          data.quote = quote.status === 'fulfilled' ? quote.value : null;
          data.history = history.status === 'fulfilled' ? history.value : null;
          data.statistics = statistics.status === 'fulfilled' ? statistics.value : null;
          data.financials = financials.status === 'fulfilled' ? financials.value : null;
          break;
      }
    } catch (fetchError) {
      console.error('Finance API fetch error:', fetchError);
      data.error = 'Could not fetch data from Finance API';
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error('Error fetching finance data:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch finance data' },
      { status: 500 }
    );
  }
}
