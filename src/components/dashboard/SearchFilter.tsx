'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Filter, X } from 'lucide-react';

interface SearchFilterProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedSector: string;
  onSectorChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  sectors: { value: string; label: string; labelAr: string }[];
}

export function SearchFilter({
  searchQuery,
  onSearchChange,
  selectedSector,
  onSectorChange,
  sortBy,
  onSortChange,
  sectors,
}: SearchFilterProps) {
  const { language, t, isRTL } = useLanguage();

  const sortOptions = [
    { value: 'tickerSymbol', label: t('tickerSymbol'), labelAr: t('tickerSymbol') },
    { value: 'marketCap', label: t('marketCapitalization'), labelAr: t('marketCapitalization') },
    { value: 'priceChange', label: t('priceChange1d'), labelAr: t('priceChange1d') },
    { value: 'sentimentScore', label: t('sentimentScore'), labelAr: t('sentimentScore') },
  ];

  const clearFilters = () => {
    onSearchChange('');
    onSectorChange('all');
    onSortChange('tickerSymbol');
  };

  const hasActiveFilters = searchQuery || selectedSector !== 'all' || sortBy !== 'tickerSymbol';

  return (
    <div className="flex flex-col gap-4 p-4 bg-card rounded-lg border">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground`} />
          <Input
            placeholder={t('searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={isRTL ? 'pr-10' : 'pl-10'}
          />
        </div>

        {/* Sector Filter */}
        <Select value={selectedSector} onValueChange={onSectorChange}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <Filter className="h-4 w-4 me-2" />
            <SelectValue placeholder={t('filterBySector')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('allSectors')}</SelectItem>
            {sectors.map((sector) => (
              <SelectItem key={sector.value} value={sector.value}>
                {language === 'ar' ? sector.labelAr : sector.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Sort By */}
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder={t('sortBy')} />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {language === 'ar' ? option.labelAr : option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X className="h-4 w-4 me-2" />
            {language === 'ar' ? 'مسح' : 'Clear'}
          </Button>
        )}
      </div>
    </div>
  );
}
