'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Building2, 
  BarChart3, 
  Brain,
  Menu 
} from 'lucide-react';

export function Header() {
  const { t, isRTL } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {t('appName')}
            </h1>
            <p className="text-xs text-muted-foreground hidden sm:block">
              {t('appSubtitle')}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <Button variant="ghost" size="sm" className="gap-2">
            <Building2 className="h-4 w-4" />
            {t('companies')}
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <BarChart3 className="h-4 w-4" />
            {t('macroIndicators')}
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Brain className="h-4 w-4" />
            {t('sentimentAnalysis')}
          </Button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="hidden sm:flex bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800">
            EGX
          </Badge>
          <LanguageToggle />
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
