// Types for Egyptian Stock Market Research Tool

export interface Company {
  id: string;
  tickerSymbol: string;
  nameEn: string;
  nameAr: string;
  sector: string;
  sectorAr: string;
  description?: string;
  website?: string;
  foundedYear?: number;
  employees?: number;
  headquarters?: string;
  isActive: boolean;
  financialData?: FinancialData[];
  latestFinancials?: FinancialData;
  tradingData?: TradingData;
  sentimentScore?: SentimentScore;
}

export interface FinancialData {
  id: string;
  companyId: string;
  period: string;
  periodType: string;
  reportDate: string;
  
  // Target Variables
  marketCap?: number;
  stockClosePrice?: number;
  
  // Capital Structure Variables
  debtToEquity?: number;
  totalDebt?: number;
  shortTermDebt?: number;
  longTermDebt?: number;
  totalEquity?: number;
  debtToAssets?: number;
  
  // Financial Performance Variables
  roa?: number;
  roe?: number;
  eps?: number;
  currentRatio?: number;
  firmSize?: number;
  salesGrowth?: number;
  totalAssets?: number;
  totalRevenue?: number;
  netIncome?: number;
  operatingIncome?: number;
  freeCashFlow?: number;
  dividendYield?: number;
}

export interface StockPrice {
  id: string;
  companyId: string;
  date: string;
  open?: number;
  high?: number;
  low?: number;
  close?: number;
  volume?: number;
  adjustedClose?: number;
}

export interface TradingData {
  id: string;
  companyId: string;
  date: string;
  tradingVolume?: number;
  volatility?: number;
  beta?: number;
  avgVolume30d?: number;
  priceChange1d?: number;
  priceChange7d?: number;
  priceChange30d?: number;
  priceChangeYtd?: number;
}

export interface SentimentScore {
  id: string;
  companyId: string;
  date: string;
  sentimentScore: number;
  sentimentLabel: string;
  newsCount: number;
  confidence?: number;
  sourceKeywords?: string;
}

export interface MacroIndicator {
  id: string;
  date: string;
  indicatorType: string;
  usdToEgp?: number;
  inflationRate?: number;
  coreInflation?: number;
  interestRate?: number;
  discountRate?: number;
  egx30Value?: number;
  egx30Change?: number;
  gdpGrowth?: number;
  unemployment?: number;
  foreignReserves?: number;
}

export interface DashboardStats {
  totalCompanies: number;
  latestUpdate: string;
  dataCoverage: number;
  avgMarketCap: number;
  sectorBreakdown: SectorBreakdown[];
}

export interface SectorBreakdown {
  sector: string;
  sectorAr: string;
  count: number;
  avgMarketCap: number;
}

export interface SearchFilters {
  query?: string;
  sector?: string;
  period?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Finance API Response Types
export interface FinanceQuoteResponse {
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
}

export interface FinanceHistoryResponse {
  ticker: string;
  data: Array<{
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
  }>;
}

export interface FinanceCompanyProfile {
  ticker: string;
  name: string;
  sector: string;
  industry: string;
  description: string;
  website: string;
  employees: number;
  headquarters: string;
}

export interface FinanceFinancialData {
  ticker: string;
  totalRevenue: number;
  netIncome: number;
  totalAssets: number;
  totalDebt: number;
  totalEquity: number;
  cashFlow: number;
  eps: number;
  peRatio: number;
  debtToEquity: number;
  currentRatio: number;
  roe: number;
  roa: number;
}

export interface FinanceStatistics {
  ticker: string;
  marketCap: number;
  enterpriseValue: number;
  trailingPE: number;
  forwardPE: number;
  pegRatio: number;
  priceToBook: number;
  priceToSales: number;
  beta: number;
  dividendYield: number;
  profitMargin: number;
  operatingMargin: number;
  returnOnAssets: number;
  returnOnEquity: number;
}
