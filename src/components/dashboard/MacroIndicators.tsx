'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  DollarSign, 
  TrendingUp, 
  Percent, 
  BarChart3,
  Globe,
  PiggyBank
} from 'lucide-react';

interface MacroData {
  usdToEgp?: number;
  inflationRate?: number;
  interestRate?: number;
  egx30Value?: number;
  egx30Change?: number;
  gdpGrowth?: number;
  unemployment?: number;
  foreignReserves?: number;
}

interface MacroIndicatorsProps {
  data: MacroData;
}

export function MacroIndicators({ data }: MacroIndicatorsProps) {
  const { t, language } = useLanguage();

  const indicators = [
    {
      title: t('exchangeRate'),
      value: data.usdToEgp ? `${data.usdToEgp.toFixed(2)}` : '-',
      subtitle: 'USD/EGP',
      icon: DollarSign,
      variant: 'default' as const,
    },
    {
      title: t('inflationRate'),
      value: data.inflationRate ? `${data.inflationRate.toFixed(1)}%` : '-',
      subtitle: language === 'ar' ? 'سنوي' : 'Annual',
      icon: TrendingUp,
      variant: data.inflationRate && data.inflationRate > 20 ? 'danger' : 'warning' as const,
    },
    {
      title: t('interestRate'),
      value: data.interestRate ? `${data.interestRate.toFixed(2)}%` : '-',
      subtitle: language === 'ar' ? 'البنك المركزي' : 'CBE Rate',
      icon: Percent,
      variant: 'default' as const,
    },
    {
      title: t('egx30Index'),
      value: data.egx30Value ? data.egx30Value.toLocaleString() : '-',
      subtitle: data.egx30Change ? `${data.egx30Change >= 0 ? '+' : ''}${data.egx30Change.toFixed(2)}%` : '',
      icon: BarChart3,
      variant: data.egx30Change && data.egx30Change >= 0 ? 'success' : 'danger' as const,
    },
    {
      title: t('gdpGrowth'),
      value: data.gdpGrowth ? `${data.gdpGrowth.toFixed(1)}%` : '-',
      subtitle: language === 'ar' ? 'سنوي' : 'Annual',
      icon: Globe,
      variant: 'default' as const,
    },
    {
      title: t('foreignReserves'),
      value: data.foreignReserves ? `$${data.foreignReserves.toFixed(1)}B` : '-',
      subtitle: language === 'ar' ? 'مليار دولار' : 'Billion USD',
      icon: PiggyBank,
      variant: 'success' as const,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {indicators.map((indicator, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${
                indicator.variant === 'danger' ? 'bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400' :
                indicator.variant === 'warning' ? 'bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400' :
                indicator.variant === 'success' ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400' :
                'bg-muted text-muted-foreground'
              }`}>
                <indicator.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground line-clamp-1">{indicator.title}</p>
                <p className="text-lg font-bold">{indicator.value}</p>
                {indicator.subtitle && (
                  <p className="text-xs text-muted-foreground">{indicator.subtitle}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
