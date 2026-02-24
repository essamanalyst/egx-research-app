'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  TrendingDown, 
  Building2, 
  BarChart3,
  ExternalLink 
} from 'lucide-react';

interface CompanyCardProps {
  ticker: string;
  nameEn: string;
  nameAr: string;
  sector: string;
  sectorAr: string;
  marketCap?: number;
  stockClosePrice?: number;
  priceChange?: number;
  tradingVolume?: number;
  sentimentScore?: number;
  onClick?: () => void;
}

export function CompanyCard({
  ticker,
  nameEn,
  nameAr,
  sector,
  sectorAr,
  marketCap,
  stockClosePrice,
  priceChange,
  tradingVolume,
  sentimentScore,
  onClick,
}: CompanyCardProps) {
  const { language, t, isRTL } = useLanguage();

  const name = language === 'ar' ? nameAr : nameEn;
  const sectorName = language === 'ar' ? sectorAr : sector;

  const formatNumber = (num: number | undefined, suffix: string = '') => {
    if (num === undefined || num === null) return '-';
    if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B${suffix}`;
    if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M${suffix}`;
    return `${num.toFixed(2)}${suffix}`;
  };

  const getSentimentColor = (score: number) => {
    if (score >= 0.3) return 'text-emerald-600 dark:text-emerald-400';
    if (score <= -0.3) return 'text-red-600 dark:text-red-400';
    return 'text-amber-600 dark:text-amber-400';
  };

  const getSentimentBg = (score: number) => {
    if (score >= 0.3) return 'bg-emerald-100 dark:bg-emerald-950';
    if (score <= -0.3) return 'bg-red-100 dark:bg-red-950';
    return 'bg-amber-100 dark:bg-amber-950';
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:border-emerald-500/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold text-lg">
              {ticker.substring(0, 2)}
            </div>
            <div>
              <CardTitle className="text-lg">{name}</CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className="text-xs font-mono">
                  {ticker}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {sectorName}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Price and Change */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{t('stockClosingPrice')}</p>
            <p className="text-xl font-bold">
              {stockClosePrice ? `${stockClosePrice.toFixed(2)} EGP` : '-'}
            </p>
          </div>
          {priceChange !== undefined && (
            <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full ${
              priceChange >= 0 
                ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' 
                : 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300'
            }`}>
              {priceChange >= 0 ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span className="font-medium">{Math.abs(priceChange).toFixed(2)}%</span>
            </div>
          )}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-muted/50">
            <p className="text-xs text-muted-foreground">{t('marketCapitalization')}</p>
            <p className="font-semibold">{formatNumber(marketCap, ' EGP')}</p>
          </div>
          <div className="p-3 rounded-lg bg-muted/50">
            <p className="text-xs text-muted-foreground">{t('tradingVolume')}</p>
            <p className="font-semibold">{formatNumber(tradingVolume)}</p>
          </div>
        </div>

        {/* Sentiment Score */}
        {sentimentScore !== undefined && (
          <div className={`p-3 rounded-lg ${getSentimentBg(sentimentScore)}`}>
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">{t('sentimentScore')}</p>
              <span className={`font-bold ${getSentimentColor(sentimentScore)}`}>
                {sentimentScore.toFixed(2)}
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 mt-2">
              <div 
                className={`h-2 rounded-full transition-all ${
                  sentimentScore >= 0.3 ? 'bg-emerald-500' : 
                  sentimentScore <= -0.3 ? 'bg-red-500' : 'bg-amber-500'
                }`}
                style={{ width: `${Math.abs(sentimentScore) * 50 + 50}%` }}
              />
            </div>
          </div>
        )}

        {/* Actions */}
        <Button 
          className="w-full group-hover:bg-emerald-600 transition-colors"
          onClick={onClick}
        >
          {t('viewDetails')}
          <ExternalLink className="h-4 w-4 ms-2" />
        </Button>
      </CardContent>
    </Card>
  );
}
