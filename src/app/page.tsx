'use client';

import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/layout/Header';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { CompanyCard } from '@/components/dashboard/CompanyCard';
import { CompanyTable } from '@/components/dashboard/CompanyTable';
import { SearchFilter } from '@/components/dashboard/SearchFilter';
import { MacroIndicators } from '@/components/dashboard/MacroIndicators';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  TrendingUp, 
  BarChart3, 
  RefreshCw,
  Grid3X3,
  Table2,
  AlertCircle
} from 'lucide-react';
import { EGYPTIAN_COMPANIES, getAllSectors } from '@/lib/egx-companies';

// Types
interface Company {
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

// Generate simulated financial data for demo
function generateSimulatedData(company: { symbol: string; nameEn: string; nameAr: string; sector: string; sectorAr: string }): Company {
  // Seed random based on symbol for consistent data
  const seed = company.symbol.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const random = (min: number, max: number) => {
    const x = Math.sin(seed + min * 100) * 10000;
    return min + (x - Math.floor(x)) * (max - min);
  };

  const marketCapBase = company.sector === 'Banks' ? 50000 : 
                        company.sector === 'Real Estate' ? 20000 :
                        company.sector === 'Energy' ? 30000 :
                        company.sector === 'Telecommunications' ? 40000 : 15000;

  return {
    ticker: company.symbol,
    nameEn: company.nameEn,
    nameAr: company.nameAr,
    sector: company.sector,
    sectorAr: company.sectorAr,
    marketCap: random(marketCapBase, marketCapBase * 3),
    stockClosePrice: random(5, 150),
    priceChange: random(-8, 8),
    eps: random(0.5, 15),
    roe: random(5, 35),
    debtToEquity: random(0.1, 2.5),
    tradingVolume: random(100000, 5000000),
    sentimentScore: random(-0.8, 0.8),
  };
}

export default function Home() {
  const { t, language, isRTL } = useLanguage();
  
  // State
  const [companies, setCompanies] = useState<Company[]>([]);
  const [macroData, setMacroData] = useState<MacroData>({});
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');
  const [sortBy, setSortBy] = useState('ticker');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('table');
  const [error, setError] = useState<string | null>(null);

  // Get all unique sectors from the data
  const sectors = useMemo(() => {
    const sectorList = getAllSectors();
    return sectorList.map(s => ({
      value: s.en,
      label: s.en,
      labelAr: s.ar,
    }));
  }, []);

  // Initial data load
  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Generate companies data from the static list
      const companiesData: Company[] = EGYPTIAN_COMPANIES.map(company => 
        generateSimulatedData(company)
      );
      setCompanies(companiesData);

      // Fetch macro indicators
      try {
        const macroRes = await fetch('/api/macro');
        const macroJson = await macroRes.json();

        if (macroJson.success) {
          const formattedMacro: MacroData = {};
          macroJson.data.forEach((item: { usdToEgp?: number; inflationRate?: number; interestRate?: number; egx30Value?: number; egx30Change?: number; gdpGrowth?: number; unemployment?: number; foreignReserves?: number; indicatorType?: string }) => {
            if (item.usdToEgp) formattedMacro.usdToEgp = item.usdToEgp;
            if (item.inflationRate) formattedMacro.inflationRate = item.inflationRate;
            if (item.interestRate) formattedMacro.interestRate = item.interestRate;
            if (item.egx30Value) formattedMacro.egx30Value = item.egx30Value;
            if (item.egx30Change) formattedMacro.egx30Change = item.egx30Change;
            if (item.gdpGrowth) formattedMacro.gdpGrowth = item.gdpGrowth;
            if (item.unemployment) formattedMacro.unemployment = item.unemployment;
            if (item.foreignReserves) formattedMacro.foreignReserves = item.foreignReserves;
          });
          setMacroData(formattedMacro);
        }
      } catch (macroError) {
        console.error('Error fetching macro data:', macroError);
        // Use default macro data
        setMacroData({
          usdToEgp: 48.50,
          inflationRate: 33.7,
          interestRate: 27.25,
          egx30Value: 28500,
          egx30Change: 1.5,
          gdpGrowth: 3.8,
          unemployment: 7.2,
          foreignReserves: 35.2,
        });
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to load data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Filtered and sorted companies
  const filteredCompanies = useMemo(() => {
    let result = [...companies];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(c => 
        c.ticker.toLowerCase().includes(query) ||
        c.nameEn.toLowerCase().includes(query) ||
        c.nameAr.includes(searchQuery)
      );
    }

    // Sector filter
    if (selectedSector !== 'all') {
      result = result.filter(c => c.sector === selectedSector);
    }

    // Sort
    result.sort((a, b) => {
      const aVal = a[sortBy as keyof Company];
      const bVal = b[sortBy as keyof Company];
      
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return aVal.localeCompare(bVal);
      }
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return bVal - aVal;
      }
      return 0;
    });

    return result;
  }, [companies, searchQuery, selectedSector, sortBy]);

  // Dashboard stats
  const stats = useMemo(() => ({
    totalCompanies: companies.length,
    avgMarketCap: companies.length > 0 
      ? companies.reduce((sum, c) => sum + (c.marketCap || 0), 0) / companies.length 
      : 0,
    positiveCount: companies.filter(c => c.priceChange && c.priceChange > 0).length,
    negativeCount: companies.filter(c => c.priceChange && c.priceChange < 0).length,
    avgSentiment: companies.length > 0
      ? companies.reduce((sum, c) => sum + (c.sentimentScore || 0), 0) / companies.length
      : 0,
  }), [companies]);

  // Sector breakdown for display
  const sectorBreakdown = useMemo(() => {
    const breakdown: Record<string, number> = {};
    companies.forEach(c => {
      breakdown[c.sector] = (breakdown[c.sector] || 0) + 1;
    });
    return Object.entries(breakdown)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6);
  }, [companies]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Header />

      <main className="container py-6 space-y-6">
        {/* Error Alert */}
        {error && (
          <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <p className="text-red-700 dark:text-red-300">{error}</p>
          </div>
        )}

        {/* Macro Indicators */}
        <section>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-emerald-600" />
            {t('macroVariables')}
          </h2>
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-24 rounded-lg" />
              ))}
            </div>
          ) : (
            <MacroIndicators data={macroData} />
          )}
        </section>

        {/* Dashboard Stats */}
        <section className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <MetricCard
            title={t('totalCompanies')}
            value={stats.totalCompanies}
            icon={Building2}
            variant="default"
          />
          <MetricCard
            title={t('avgMarketCap')}
            value={`${(stats.avgMarketCap / 1000).toFixed(1)}M`}
            subtitle={t('millionEGP')}
            icon={TrendingUp}
            variant="success"
          />
          <MetricCard
            title={language === 'ar' ? 'شركات مرتفعة' : 'Gainers'}
            value={stats.positiveCount}
            subtitle={language === 'ar' ? 'أسعار مرتفعة' : 'Price up'}
            icon={TrendingUp}
            variant="success"
          />
          <MetricCard
            title={language === 'ar' ? 'شركات منخفضة' : 'Losers'}
            value={stats.negativeCount}
            subtitle={language === 'ar' ? 'أسعار منخفضة' : 'Price down'}
            icon={TrendingUp}
            variant="danger"
          />
          <MetricCard
            title={t('sentimentScore')}
            value={stats.avgSentiment.toFixed(2)}
            subtitle={language === 'ar' ? 'متوسط السوق' : 'Market average'}
            icon={BarChart3}
            variant={stats.avgSentiment >= 0 ? 'success' : 'danger'}
          />
        </section>

        {/* Sector Breakdown */}
        <section className="bg-card rounded-lg border p-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            {language === 'ar' ? 'توزيع القطاعات' : 'Sector Breakdown'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {sectorBreakdown.map(([sector, count]) => (
              <Badge key={sector} variant="secondary" className="px-3 py-1">
                {sector}: {count} {language === 'ar' ? 'شركة' : 'companies'}
              </Badge>
            ))}
          </div>
        </section>

        {/* Search and Filters */}
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedSector={selectedSector}
          onSectorChange={setSelectedSector}
          sortBy={sortBy}
          onSortChange={setSortBy}
          sectors={sectors}
        />

        {/* Companies Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Building2 className="h-5 w-5 text-emerald-600" />
              {t('companies')}
              <Badge variant="outline" className="ms-2">
                {filteredCompanies.length} / {companies.length}
              </Badge>
            </h2>
            <div className="flex items-center gap-2">
              <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as 'cards' | 'table')}>
                <TabsList className="grid grid-cols-2 w-[140px]">
                  <TabsTrigger value="table">
                    <Table2 className="h-4 w-4" />
                  </TabsTrigger>
                  <TabsTrigger value="cards">
                    <Grid3X3 className="h-4 w-4" />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              <button
                onClick={fetchInitialData}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                title={t('refreshData')}
              >
                <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-64 rounded-lg" />
              ))}
            </div>
          ) : viewMode === 'cards' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCompanies.slice(0, 50).map((company) => (
                <CompanyCard
                  key={company.ticker}
                  {...company}
                  onClick={() => console.log('View details for:', company.ticker)}
                />
              ))}
            </div>
          ) : (
            <CompanyTable
              companies={filteredCompanies}
              onViewDetails={(ticker) => console.log('View details for:', ticker)}
            />
          )}

          {!loading && filteredCompanies.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              {t('noData')}
            </div>
          )}

          {!loading && filteredCompanies.length > 50 && viewMode === 'cards' && (
            <p className="text-center text-sm text-muted-foreground mt-4">
              {language === 'ar' 
                ? `عرض أول 50 شركة من أصل ${filteredCompanies.length} شركة`
                : `Showing first 50 of ${filteredCompanies.length} companies`
              }
            </p>
          )}
        </section>

        {/* Footer */}
        <footer className="border-t pt-6 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>{t('copyright')}</p>
            <p>{t('disclaimer')}</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
