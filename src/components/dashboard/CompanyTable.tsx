'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Eye, Download } from 'lucide-react';

interface CompanyData {
  ticker: string;
  nameEn: string;
  nameAr: string;
  sector: string;
  sectorAr: string;
  marketCap?: number;
  stockClosePrice?: number;
  priceChange?: number;
  eps?: number;
  roe?: number;
  debtToEquity?: number;
  tradingVolume?: number;
  sentimentScore?: number;
}

interface CompanyTableProps {
  companies: CompanyData[];
  onViewDetails?: (ticker: string) => void;
}

export function CompanyTable({ companies, onViewDetails }: CompanyTableProps) {
  const { language, t, isRTL } = useLanguage();

  const formatNumber = (num: number | undefined, decimals: number = 2) => {
    if (num === undefined || num === null) return '-';
    if (Math.abs(num) >= 1e9) return `${(num / 1e9).toFixed(decimals)}B`;
    if (Math.abs(num) >= 1e6) return `${(num / 1e6).toFixed(decimals)}M`;
    if (Math.abs(num) >= 1e3) return `${(num / 1e3).toFixed(decimals)}K`;
    return num.toFixed(decimals);
  };

  const getSentimentBadge = (score: number | undefined) => {
    if (score === undefined || score === null) return <span className="text-muted-foreground">-</span>;
    
    if (score >= 0.3) {
      return <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">+{score.toFixed(2)}</Badge>;
    } else if (score <= -0.3) {
      return <Badge className="bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300">{score.toFixed(2)}</Badge>;
    }
    return <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300">{score.toFixed(2)}</Badge>;
  };

  const exportToCSV = () => {
    const headers = [
      'Ticker', 'Name', 'Sector', 'Market Cap', 'Close Price', 
      'Price Change %', 'EPS', 'ROE %', 'Debt/Equity', 'Volume', 'Sentiment'
    ];
    
    const rows = companies.map(c => [
      c.ticker,
      language === 'ar' ? c.nameAr : c.nameEn,
      language === 'ar' ? c.sectorAr : c.sector,
      c.marketCap || '',
      c.stockClosePrice || '',
      c.priceChange || '',
      c.eps || '',
      c.roe || '',
      c.debtToEquity || '',
      c.tradingVolume || '',
      c.sentimentScore || ''
    ]);

    const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `egyptian_stocks_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {companies.length} {t('companies')}
        </p>
        <Button variant="outline" size="sm" onClick={exportToCSV}>
          <Download className="h-4 w-4 me-2" />
          {t('exportCSV')}
        </Button>
      </div>
      
      <div className="rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">{t('tickerSymbol')}</TableHead>
                <TableHead className="font-semibold">{t('companyName')}</TableHead>
                <TableHead className="font-semibold">{t('sector')}</TableHead>
                <TableHead className="font-semibold text-end">{t('marketCapitalization')}</TableHead>
                <TableHead className="font-semibold text-end">{t('stockClosingPrice')}</TableHead>
                <TableHead className="font-semibold text-end">{t('priceChange1d')}</TableHead>
                <TableHead className="font-semibold text-end">{t('eps')}</TableHead>
                <TableHead className="font-semibold text-end">{t('roe')}</TableHead>
                <TableHead className="font-semibold text-end">{t('debtToEquityRatio')}</TableHead>
                <TableHead className="font-semibold text-end">{t('sentimentScore')}</TableHead>
                <TableHead className="font-semibold text-center">{t('viewDetails')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {companies.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={11} className="text-center py-8 text-muted-foreground">
                    {t('noData')}
                  </TableCell>
                </TableRow>
              ) : (
                companies.map((company) => (
                  <TableRow key={company.ticker} className="hover:bg-muted/30">
                    <TableCell>
                      <Badge variant="outline" className="font-mono">
                        {company.ticker}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">
                      {language === 'ar' ? company.nameAr : company.nameEn}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">
                        {language === 'ar' ? company.sectorAr : company.sector}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-end font-mono">
                      {formatNumber(company.marketCap)}
                    </TableCell>
                    <TableCell className="text-end font-mono">
                      {company.stockClosePrice ? `${company.stockClosePrice.toFixed(2)}` : '-'}
                    </TableCell>
                    <TableCell className="text-end">
                      {company.priceChange !== undefined ? (
                        <span className={`flex items-center justify-end gap-1 ${
                          company.priceChange >= 0 ? 'text-emerald-600' : 'text-red-600'
                        }`}>
                          {company.priceChange >= 0 ? (
                            <TrendingUp className="h-3 w-3" />
                          ) : (
                            <TrendingDown className="h-3 w-3" />
                          )}
                          {Math.abs(company.priceChange).toFixed(2)}%
                        </span>
                      ) : '-'}
                    </TableCell>
                    <TableCell className="text-end font-mono">
                      {company.eps ? company.eps.toFixed(2) : '-'}
                    </TableCell>
                    <TableCell className="text-end font-mono">
                      {company.roe ? `${company.roe.toFixed(2)}%` : '-'}
                    </TableCell>
                    <TableCell className="text-end font-mono">
                      {company.debtToEquity ? company.debtToEquity.toFixed(2) : '-'}
                    </TableCell>
                    <TableCell className="text-end">
                      {getSentimentBadge(company.sentimentScore)}
                    </TableCell>
                    <TableCell className="text-center">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => onViewDetails?.(company.ticker)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
