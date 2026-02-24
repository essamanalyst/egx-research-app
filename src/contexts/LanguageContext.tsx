'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo } from 'react';
import { translations, Language, TranslationKey } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with default value, will update client-side
  const [language, setLanguageState] = useState<Language>('ar');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
    }
  }, []);

  // Use useMemo for translation function to avoid recreation
  const t = useMemo(() => {
    return (key: TranslationKey): string => {
      return translations[language][key] || key;
    };
  }, [language]);

  // Update document direction when language changes
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  // Load saved language on mount
  // This is a legitimate use case: syncing with localStorage (external system)
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang === 'en' || savedLang === 'ar') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(savedLang);
    }
  }, []);

  const value: LanguageContextType = useMemo(() => ({
    language,
    setLanguage,
    t,
    isRTL: language === 'ar',
  }), [language, setLanguage, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
