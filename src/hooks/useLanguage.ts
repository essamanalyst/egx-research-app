'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Language } from '@/types';
import { translations } from '@/lib/translations';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: () => boolean;
}

// Helper to get nested value from translations
function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.');
  let current: unknown = obj;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path; // Return key if not found
    }
  }

  return typeof current === 'string' ? current : path;
}

export const useLanguage = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: 'en',

      setLanguage: (lang: Language) => {
        set({ language: lang });
      },

      t: (key: string): string => {
        const { language } = get();
        const langTranslations = translations[language] || translations.en;
        return getNestedValue(langTranslations as unknown as Record<string, unknown>, key);
      },

      isRTL: () => {
        return get().language === 'ar';
      },
    }),
    {
      name: 'language-storage',
      partialize: (state) => ({ language: state.language }),
    }
  )
);

// Hook for getting translation with parameters
export function useTranslation() {
  const { language, setLanguage, t, isRTL } = useLanguage();

  // Translation with parameter interpolation
  const tWithParams = (key: string, params?: Record<string, string | number>): string => {
    let text = t(key);

    if (params) {
      Object.entries(params).forEach(([paramKey, value]) => {
        text = text.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(value));
      });
    }

    return text;
  };

  return {
    language,
    setLanguage,
    t: tWithParams,
    isRTL,
    direction: isRTL() ? 'rtl' : 'ltr',
  };
}
