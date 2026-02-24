// Finance API Integration for Egyptian Stock Market
import { EGYPTIAN_COMPANIES, EgyptianCompany, getCompaniesBySector, getAllSectors, searchCompanies as searchCompaniesList, getCompanyBySymbol } from './egx-companies';

const GATEWAY_URL = process.env.GATEWAY_URL || 'https://internal-api.z.ai';
const API_PREFIX = process.env.API_PREFIX || '/external/finance';

interface FinanceApiOptions {
  endpoint: string;
  params?: Record<string, string | number>;
}

async function financeApiRequest<T>({ endpoint, params = {} }: FinanceApiOptions): Promise<T | null> {
  try {
    const url = new URL(`${GATEWAY_URL}${API_PREFIX}${endpoint}`);
    
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'X-Z-AI-From': 'Z',
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(`Finance API error: ${response.status} ${response.statusText}`);
      return null;
    }

    return await response.json() as T;
  } catch (error) {
    console.error('Finance API request failed:', error);
    return null;
  }
}

// Search for companies on Yahoo Finance
export async function searchFinanceCompanies(searchTerm: string) {
  return financeApiRequest<{ quotes: Array<{ symbol: string; shortname: string; longname: string; exchange: string }> }>({
    endpoint: '/v1/markets/search',
    params: { search: searchTerm },
  });
}

// Get real-time quote for a stock
export async function getStockQuote(ticker: string) {
  return financeApiRequest<{
    ticker: string;
    name: string;
    price: number;
    change: number;
    changePercent: number;
    volume: number;
    avgVolume: number;
    marketCap: number;
    peRatio: number;
    fiftyTwoWeekHigh: number;
    fiftyTwoWeekLow: number;
  }>({
    endpoint: '/v1/markets/quote',
    params: { ticker, type: 'STOCKS' },
  });
}

// Get batch quotes for multiple stocks
export async function getBatchQuotes(tickers: string[]) {
  return financeApiRequest<{
    quoteResponse: {
      result: Array<{
        symbol: string;
        shortName: string;
        regularMarketPrice: number;
        regularMarketChange: number;
        regularMarketChangePercent: number;
        regularMarketVolume: number;
        marketCap: number;
      }>;
    };
  }>({
    endpoint: '/v1/markets/stock/quotes',
    params: { ticker: tickers.join(',') },
  });
}

// Get historical price data
export async function getStockHistory(symbol: string, interval: string = '1d', limit: number = 30) {
  return financeApiRequest<{
    body: Array<{
      date: string;
      open: number;
      high: number;
      low: number;
      close: number;
      volume: number;
    }>;
  }>({
    endpoint: '/v2/markets/stock/history',
    params: { symbol, interval, limit: String(limit) },
  });
}

// Get company profile
export async function getCompanyProfile(ticker: string) {
  return financeApiRequest<{
    assetProfile: {
      address1: string;
      city: string;
      country: string;
      phone: string;
      website: string;
      industry: string;
      sector: string;
      longBusinessSummary: string;
      fullTimeEmployees: number;
    };
  }>({
    endpoint: '/v1/markets/stock/modules',
    params: { ticker, module: 'asset-profile' },
  });
}

// Get financial statistics
export async function getStockStatistics(ticker: string) {
  return financeApiRequest<{
    statistics: {
      marketCap: number;
      enterpriseValue: number;
      trailingPE: number;
      forwardPE: number;
      pegRatio: number;
      priceToBook: number;
      enterpriseToRevenue: number;
      enterpriseToEbitda: number;
      profitMargins: number;
      floatShares: number;
      sharesOutstanding: number;
      sharesShort: number;
      shortRatio: number;
      beta: number;
      priceToSales: number;
      dividendYield: number;
      returnOnAssets: number;
      returnOnEquity: number;
      revenueGrowth: number;
      grossMargins: number;
      ebitdaMargins: number;
      operatingMargins: number;
    };
  }>({
    endpoint: '/v1/markets/stock/modules',
    params: { ticker, module: 'statistics' },
  });
}

// Get financial data
export async function getFinancialData(ticker: string) {
  return financeApiRequest<{
    financialData: {
      currentPrice: number;
      targetHighPrice: number;
      targetLowPrice: number;
      targetMeanPrice: number;
      recommendationKey: string;
      recommendationMean: number;
      totalRevenue: number;
      revenueGrowth: number;
      totalDebt: number;
      debtToEquity: number;
      totalCash: number;
      totalCashPerShare: number;
      earningsGrowth: number;
      earningsQuarterlyGrowth: number;
      netIncomeToCommon: number;
      trailingEps: number;
      forwardEps: number;
      operatingCashflow: number;
      freeCashflow: number;
      operatingMargins: number;
      profitMargins: number;
      returnOnAssets: number;
      returnOnEquity: number;
      currentRatio: number;
      quickRatio: number;
      grossProfits: number;
      ebitda: number;
    };
  }>({
    endpoint: '/v1/markets/stock/modules',
    params: { ticker, module: 'financial-data' },
  });
}

// Get balance sheet
export async function getBalanceSheet(ticker: string) {
  return financeApiRequest<{
    balanceSheetHistoryQuarterly: {
      balanceSheetStatements: Array<{
        endDate: { fmt: string };
        totalAssets: number;
        totalLiab: number;
        totalStockholderEquity: number;
        totalCurrentAssets: number;
        totalCurrentLiabilities: number;
        longTermDebt: number;
        shortLongTermDebt: number;
        cash: number;
        netReceivables: number;
        inventory: number;
      }>;
    };
  }>({
    endpoint: '/v1/markets/stock/modules',
    params: { ticker, module: 'balance-sheet' },
  });
}

// Get income statement
export async function getIncomeStatement(ticker: string) {
  return financeApiRequest<{
    incomeStatementHistoryQuarterly: {
      incomeStatementHistory: Array<{
        endDate: { fmt: string };
        totalRevenue: number;
        costOfRevenue: number;
        grossProfit: number;
        operatingIncome: number;
        netIncome: number;
        netIncomeApplicableToCommonShares: number;
        ebit: number;
        interestExpense: number;
        incomeBeforeTax: number;
        incomeTaxExpense: number;
      }>;
    };
  }>({
    endpoint: '/v1/markets/stock/modules',
    params: { ticker, module: 'income-statement' },
  });
}

// Get market news
export async function getMarketNews(ticker?: string) {
  return financeApiRequest<Array<{
    uuid: string;
    title: string;
    publisher: string;
    link: string;
    providerPublishTime: number;
    type: string;
    thumbnail?: {
      resolutions: Array<{ url: string; width: number; height: number }>;
    };
  }>>({
    endpoint: '/v1/markets/news',
    params: ticker ? { ticker } : {},
  });
}

// Egyptian stock ticker mapping (local symbols to Yahoo Finance format)
// Built dynamically from the complete companies list
export const EGYPTIAN_TICKERS: Record<string, { yahoo: string; nameEn: string; nameAr: string; sector: string; sectorAr: string }> = 
  EGYPTIAN_COMPANIES.reduce((acc, company) => {
    acc[company.symbol] = {
      yahoo: `${company.symbol}.CA`,
      nameEn: company.nameEn,
      nameAr: company.nameAr,
      sector: company.sector,
      sectorAr: company.sectorAr,
    };
    return acc;
  }, {} as Record<string, { yahoo: string; nameEn: string; nameAr: string; sector: string; sectorAr: string }>);

// Get all Egyptian tickers list
export function getEgyptianTickersList() {
  return EGYPTIAN_COMPANIES.map((company) => ({
    localSymbol: company.symbol,
    yahooSymbol: `${company.symbol}.CA`,
    nameEn: company.nameEn,
    nameAr: company.nameAr,
    sector: company.sector,
    sectorAr: company.sectorAr,
  }));
}

// Re-export types and functions from egx-companies
export { EGYPTIAN_COMPANIES, EgyptianCompany, getCompaniesBySector, getAllSectors, searchCompaniesList, getCompanyBySymbol };
