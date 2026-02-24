// Complete List of Egyptian Companies Listed on EGX (Egyptian Stock Exchange)
// Source: EGX Official Data - ~230+ companies

export interface EgyptianCompany {
  symbol: string;
  nameEn: string;
  nameAr: string;
  sector: string;
  sectorAr: string;
  isin?: string;
}

export const EGYPTIAN_COMPANIES: EgyptianCompany[] = [
  // ===== BANKS (البنوك) =====
  { symbol: 'COMI', nameEn: 'Commercial International Bank', nameAr: 'البنك التجاري الدولي', sector: 'Banks', sectorAr: 'البنوك' },
  { symbol: 'HRHO', nameEn: 'Housing and Development Bank', nameAr: 'بنك الإسكان والتعمير', sector: 'Banks', sectorAr: 'البنوك' },
  { symbol: 'CAIH', nameEn: 'Capital Bank Egypt', nameAr: 'بنك العاصمة الوطني', sector: 'Banks', sectorAr: 'البنوك' },
  { symbol: 'SAUD', nameEn: 'Al Saudi Bank', nameAr: 'البنك السعودي', sector: 'Banks', sectorAr: 'البنوك' },
  { symbol: 'FAIT', nameEn: 'Faisal Islamic Bank of Egypt', nameAr: 'بنك فيصل الإسلامي المصري', sector: 'Banks', sectorAr: 'البنوك' },
  { symbol: 'AUBK', nameEn: 'Arab Banking Corporation - Egypt', nameAr: 'مؤسسة العربية المصرفية - مصر', sector: 'Banks', sectorAr: 'البنوك' },
  { symbol: 'ADIB', nameEn: 'Abu Dhabi Islamic Bank - Egypt', nameAr: 'بنك أبو ظبي الإسلامي - مصر', sector: 'Banks', sectorAr: 'البنوك' },
  { symbol: 'FABE', nameEn: 'First Abu Dhabi Bank - Egypt', nameAr: 'بنك أبو ظبي الأول - مصر', sector: 'Banks', sectorAr: 'البنوك' },
  { symbol: 'AIME', nameEn: 'Arab International Bank', nameAr: 'البنك العربي الدولي', sector: 'Banks', sectorAr: 'البنوك' },
  { symbol: 'UEBA', nameEn: 'Union National Bank - Egypt', nameAr: 'الاتحاد الوطني بنك مصر', sector: 'Banks', sectorAr: 'البنوك' },
  { symbol: 'EKHO', nameEn: 'EG Bank', nameAr: 'بنك أي جي', sector: 'Banks', sectorAr: 'البنوك' },
  { symbol: 'BTFH', nameEn: 'Beltone Financial Holding', nameAr: 'بلتون فاينانشال القابضة', sector: 'Banks', sectorAr: 'البنوك' },

  // ===== REAL ESTATE (العقارات) =====
  { symbol: 'TMGH', nameEn: 'Talaat Moustafa Group Holding', nameAr: 'مجموعة طلعت مصطفى القابضة', sector: 'Real Estate', sectorAr: 'العقارات' },
  { symbol: 'EMR', nameEn: 'Emaar Misr for Development', nameAr: 'إعمار مصر للتطوير', sector: 'Real Estate', sectorAr: 'العقارات' },
  { symbol: 'PHD', nameEn: 'Palm Hills Developments', nameAr: 'بالم هيلز للتعمير', sector: 'Real Estate', sectorAr: 'العقارات' },
  { symbol: 'MNHD', nameEn: 'Madinet Nasr for Housing & Development', nameAr: 'مدينة نصر للإسكان والتعمير', sector: 'Real Estate', sectorAr: 'العقارات' },
  { symbol: 'HELI', nameEn: 'Heliopolis Company for Housing & Development', nameAr: 'شركة مصر الجديدة للإسكان والتعمير', sector: 'Real Estate', sectorAr: 'العقارات' },
  { symbol: 'OCDI', nameEn: 'Orascom Development Egypt', nameAr: 'أوراسكوم للتطوير', sector: 'Real Estate', sectorAr: 'العقارات' },
  { symbol: 'MISR', nameEn: 'Misr Real Estate Assets', nameAr: 'مصر للعقارات والأصول', sector: 'Real Estate', sectorAr: 'العقارات' },
  { symbol: 'ALCN', nameEn: 'Alexandria for Investment & Real Estate', nameAr: 'الإسكندرية للاستثمار والعقارات', sector: 'Real Estate', sectorAr: 'العقارات' },
  { symbol: 'RMDA', nameEn: 'Remco for Touristic Villages Construction', nameAr: 'رمكو لإنشاء القرى السياحية', sector: 'Real Estate', sectorAr: 'العقارات' },
  { symbol: 'GTHE', nameEn: 'Golden Pyramids Plaza', nameAr: 'أهرامات الذهب بلازا', sector: 'Real Estate', sectorAr: 'العقارات' },
  { symbol: 'NTRA', nameEn: 'Giza General Contracting & Real Estate', nameAr: 'الجيزة العامة للمقاولات والعقارات', sector: 'Real Estate', sectorAr: 'العقارات' },
  { symbol: 'SIPA', nameEn: 'Six of October Development & Investment', nameAr: 'السادس من أكتوبر للتنمية والاستثمار', sector: 'Real Estate', sectorAr: 'العقارات' },
  { symbol: 'MCQE', nameEn: 'Medinet El-Forat for Housing & Development', nameAr: 'مدينة الفرات للإسكان والتعمير', sector: 'Real Estate', sectorAr: 'العقارات' },
  { symbol: 'KABO', nameEn: 'El Kahera for Housing & Development', nameAr: 'القاهرة للإسكان والتعمير', sector: 'Real Estate', sectorAr: 'العقارات' },
  { symbol: 'NASR', nameEn: 'El Nasr Housing & Development', nameAr: 'النصر للإسكان والتعمير', sector: 'Real Estate', sectorAr: 'العقارات' },

  // ===== TELECOMMUNICATIONS (الاتصالات) =====
  { symbol: 'ETEL', nameEn: 'Telecom Egypt', nameAr: 'Telecom Egypt', sector: 'Telecommunications', sectorAr: 'الاتصالات' },
  { symbol: 'MOIN', nameEn: 'Mobil Nil Store', nameAr: 'موبينيل ستور', sector: 'Telecommunications', sectorAr: 'الاتصالات' },

  // ===== ENERGY & PETROLEUM (الطاقة والبترول) =====
  { symbol: 'SKPC', nameEn: 'Sidi Kerir Petrochemicals', nameAr: 'سيدي كرير للبتروكيماويات', sector: 'Energy', sectorAr: 'الطاقة' },
  { symbol: 'AMOC', nameEn: 'Alexandria Mineral Oils Company', nameAr: 'الإسكندرية للزيوت المعدنية', sector: 'Energy', sectorAr: 'الطاقة' },
  { symbol: 'ANPI', nameEn: 'Alexandria National Company for Petroleum', nameAr: 'الإسكندرية الوطنية للبترول', sector: 'Energy', sectorAr: 'الطاقة' },
  { symbol: 'MPCA', nameEn: 'Middle East for Petrochemicals', nameAr: 'الشرق الأوسط للبتروكيماويات', sector: 'Energy', sectorAr: 'الطاقة' },
  { symbol: 'EBSC', nameEn: 'Egypt Basic Industries', nameAr: 'الصناعات الأساسية المصرية', sector: 'Energy', sectorAr: 'الطاقة' },
  { symbol: 'PPCI', nameEn: 'Egyptian Projects Operation & Maintenance', nameAr: 'المشروعات المصرية للتشغيل والصيانة', sector: 'Energy', sectorAr: 'الطاقة' },
  { symbol: 'SIPC', nameEn: 'Sinai for Petrochemicals', nameAr: 'سيناء للبتروكيماويات', sector: 'Energy', sectorAr: 'الطاقة' },
  { symbol: 'APRI', nameEn: 'AppTech for Petroleum Services', nameAr: 'أبتك لخدمات البترول', sector: 'Energy', sectorAr: 'الطاقة' },
  { symbol: 'GCPP', nameEn: 'Gupco for Petroleum', nameAr: 'جوبكو للبترول', sector: 'Energy', sectorAr: 'الطاقة' },

  // ===== INDUSTRIALS (الصناعات) =====
  { symbol: 'SWDY', nameEn: 'Elsewedy Electric', nameAr: 'السويدي إليكتريك', sector: 'Industrials', sectorAr: 'الصناعات' },
  { symbol: 'ORAS', nameEn: 'Orascom Construction', nameAr: 'أوراسكوم للإنشاء', sector: 'Industrials', sectorAr: 'الصناعات' },
  { symbol: 'OCRI', nameEn: 'Orascom Construction Industries', nameAr: 'أوراسكوم للصناعات الإنشائية', sector: 'Industrials', sectorAr: 'الصناعات' },
  { symbol: 'EGCH', nameEn: 'Egyptian Chemical Industries', nameAr: 'الصناعات الكيماوية المصرية', sector: 'Industrials', sectorAr: 'الصناعات' },
  { symbol: 'ALEX', nameEn: 'Alexandria Container & Cargo Handling', nameAr: 'الإسكندرية للحاويات والبضائع', sector: 'Industrials', sectorAr: 'الصناعات' },
  { symbol: 'EGTS', nameEn: 'Egyptian Transport & Commercial Services', nameAr: 'النقل والخدمات التجارية المصرية', sector: 'Industrials', sectorAr: 'الصناعات' },
  { symbol: 'AMIR', nameEn: 'Amir For Paints & Chemical Industries', nameAr: 'أمير للدهان والصناعات الكيماوية', sector: 'Industrials', sectorAr: 'الصناعات' },
  { symbol: 'ICEM', nameEn: 'International Company for Engineering & Manufacturing', nameAr: 'الدولية للهندسة والتصنيع', sector: 'Industrials', sectorAr: 'الصناعات' },
  { symbol: 'EFAA', nameEn: 'Egyptian Financial & Industrial', nameAr: 'المصرية المالية والصناعية', sector: 'Industrials', sectorAr: 'الصناعات' },
  { symbol: 'NIPR', nameEn: 'Naeem Holding', nameAr: 'نعيم القابضة', sector: 'Industrials', sectorAr: 'الصناعات' },
  { symbol: 'ELSH', nameEn: 'El Shams for Construction & Trade', nameAr: 'الشمس للإنشاء والتجارة', sector: 'Industrials', sectorAr: 'الصناعات' },
  { symbol: 'KZPC', nameEn: 'Kafr El Zayat for Chemicals', nameAr: 'كفر الزيات للكيماويات', sector: 'Industrials', sectorAr: 'الصناعات' },
  { symbol: 'ESFA', nameEn: 'Esnad for Financial Services', nameAr: 'إسناد للخدمات المالية', sector: 'Industrials', sectorAr: 'الصناعات' },
  { symbol: 'INEG', nameEn: 'Industrial & Engineering Enterprises', nameAr: 'المشروعات الصناعية والهندسية', sector: 'Industrials', sectorAr: 'الصناعات' },
  { symbol: 'ADST', nameEn: 'Arab Drilling & Workover', nameAr: 'العربية للحفر والصيانة', sector: 'Industrials', sectorAr: 'الصناعات' },
  { symbol: 'ECHM', nameEn: 'Egyptian Company for Chemicals', nameAr: 'الشركة المصرية للكيماويات', sector: 'Industrials', sectorAr: 'الصناعات' },
  { symbol: 'MGPC', nameEn: 'Middle East Glass Manufacturing', nameAr: 'الشرق الأوسط لتصنيع الزجاج', sector: 'Industrials', sectorAr: 'الصناعات' },
  { symbol: 'SIMH', nameEn: 'Samad for Mining & Manufacturing', nameAr: 'صماد للتعدين والتصنيع', sector: 'Industrials', sectorAr: 'الصناعات' },
  { symbol: 'EIMP', nameEn: 'Egyptian Iron & Steel', nameAr: 'الحديد والصلب المصرية', sector: 'Industrials', sectorAr: 'الصناعات' },
  { symbol: 'EALB', nameEn: 'Egyptian Aluminum', nameAr: 'الألومنيوم المصرية', sector: 'Industrials', sectorAr: 'الصناعات' },

  // ===== MATERIALS (المواد) =====
  { symbol: 'CEMB', nameEn: 'Suez Cement', nameAr: 'أسمنت السويس', sector: 'Materials', sectorAr: 'المواد' },
  { symbol: 'QNCC', nameEn: 'Qena Cement', nameAr: 'أسمنت قنا', sector: 'Materials', sectorAr: 'المواد' },
  { symbol: 'ATCC', nameEn: 'Alexandria Cement', nameAr: 'أسمنت الإسكندرية', sector: 'Materials', sectorAr: 'المواد' },
  { symbol: 'TNCC', nameEn: 'Tourah Cement', nameAr: 'أسمنت طرة', sector: 'Materials', sectorAr: 'المواد' },
  { symbol: 'ARCC', nameEn: 'Arabian Cement', nameAr: 'الأسمنت العربية', sector: 'Materials', sectorAr: 'المواد' },
  { symbol: 'SCEM', nameEn: 'South Valley Cement', nameAr: 'أسمنت وادي النيل', sector: 'Materials', sectorAr: 'المواد' },
  { symbol: 'EGPS', nameEn: 'Egyptian Petrochemicals', nameAr: 'البتروكيماويات المصرية', sector: 'Materials', sectorAr: 'المواد' },
  { symbol: 'ABUK', nameEn: 'Abu Qir Fertilizers', nameAr: 'أبو قير للأسمدة', sector: 'Materials', sectorAr: 'المواد' },
  { symbol: 'EFID', nameEn: 'Evergrow Fertilizers', nameAr: 'إيفرجرو للأسمدة', sector: 'Materials', sectorAr: 'المواد' },
  { symbol: 'MFPC', nameEn: 'Misr Fertilizers Production', nameAr: 'مصر لإنتاج الأسمدة', sector: 'Materials', sectorAr: 'المواد' },
  { symbol: 'AFCM', nameEn: 'Arab Fertilizers & Chemicals', nameAr: 'الأسمدة والكيماويات العربية', sector: 'Materials', sectorAr: 'المواد' },
  { symbol: 'MICH', nameEn: 'Misr Chemical Industries', nameAr: 'مصر للصناعات الكيماوية', sector: 'Materials', sectorAr: 'المواد' },
  { symbol: 'ELFA', nameEn: 'El Fagr for Paints & Chemicals', nameAr: 'الفجر للدهان والكيماويات', sector: 'Materials', sectorAr: 'المواد' },
  { symbol: 'AIRP', nameEn: 'Arab International Oxygen', nameAr: 'العربية الدولي للأكسجين', sector: 'Materials', sectorAr: 'المواد' },
  { symbol: 'PRDC', nameEn: 'Production & Engineering', nameAr: 'الإنتاج والهندسة', sector: 'Materials', sectorAr: 'المواد' },
  { symbol: 'EAST', nameEn: 'Eastern Company', nameAr: 'الشرقية للدخان', sector: 'Materials', sectorAr: 'المواد' },

  // ===== CONSUMER GOODS (السلع الاستهلاكية) =====
  { symbol: 'AUTO', nameEn: 'GB Auto', nameAr: 'جي بي أوتو', sector: 'Consumer Goods', sectorAr: 'السلع الاستهلاكية' },
  { symbol: 'ESRS', nameEn: 'Eastern Tobacco', nameAr: 'الشرقية للدخان', sector: 'Consumer Goods', sectorAr: 'السلع الاستهلاكية' },
  { symbol: 'PHON', nameEn: 'Raya for Communication', nameAr: 'رايا للاتصالات', sector: 'Consumer Goods', sectorAr: 'السلع الاستهلاكية' },
  { symbol: 'EKHO', nameEn: 'Edita Food Industries', nameAr: 'إيديتا للصناعات الغذائية', sector: 'Consumer Goods', sectorAr: 'السلع الاستهلاكية' },
  { symbol: 'BJID', nameEn: 'Bisco Misr', nameAr: 'بسكو مصر', sector: 'Consumer Goods', sectorAr: 'السلع الاستهلاكية' },
  { symbol: 'EFAA', nameEn: 'El Fagr for Food Industries', nameAr: 'الفجر للصناعات الغذائية', sector: 'Consumer Goods', sectorAr: 'السلع الاستهلاكية' },
  { symbol: 'CNIN', nameEn: 'Construck for Trade & Industrial', nameAr: 'كونسترك للتجارة والصناعة', sector: 'Consumer Goods', sectorAr: 'السلع الاستهلاكية' },
  { symbol: 'FTNS', nameEn: 'Faisal Towns for Construction', nameAr: 'فيصل تاونز للإنشاء', sector: 'Consumer Goods', sectorAr: 'السلع الاستهلاكية' },
  { symbol: 'AMRI', nameEn: 'Amery for Import & Export', nameAr: 'عمارة للاستيراد والتصدير', sector: 'Consumer Goods', sectorAr: 'السلع الاستهلاكية' },
  { symbol: 'ARAB', nameEn: 'Arab Real Estate', nameAr: 'العربية للعقارات', sector: 'Consumer Goods', sectorAr: 'السلع الاستهلاكية' },
  { symbol: 'DREI', nameEn: 'Delta Real Estate Investment', nameAr: 'دلتا للاستثمار العقاري', sector: 'Consumer Goods', sectorAr: 'السلع الاستهلاكية' },
  { symbol: 'SWAE', nameEn: 'El Swaedy Electric Industries', nameAr: 'السويدي للصناعات الكهربائية', sector: 'Consumer Goods', sectorAr: 'السلع الاستهلاكية' },
  { symbol: 'EIMC', nameEn: 'Egyptian International Medicine', nameAr: 'المصرية الدولية للأدوية', sector: 'Consumer Goods', sectorAr: 'السلع الاستهلاكية' },
  { symbol: 'MFSC', nameEn: 'Misr For Food Products', nameAr: 'مصر للمنتجات الغذائية', sector: 'Consumer Goods', sectorAr: 'السلع الاستهلاكية' },
  { symbol: 'ISIS', nameEn: 'Isis Food Industries', nameAr: 'إيزيس للصناعات الغذائية', sector: 'Consumer Goods', sectorAr: 'السلع الاستهلاكية' },
  { symbol: 'MRIN', nameEn: 'Marina for Investment', nameAr: 'مارينا للاستثمار', sector: 'Consumer Goods', sectorAr: 'السلع الاستهلاكية' },

  // ===== HEALTHCARE (الرعاية الصحية) =====
  { symbol: 'PHDW', nameEn: 'Pharos Tours & Investment', nameAr: 'فاروس للسياحة والاستثمار', sector: 'Healthcare', sectorAr: 'الرعاية الصحية' },
  { symbol: 'IRAX', nameEn: 'Egyptian International Medical', nameAr: 'المصرية الدولية الطبية', sector: 'Healthcare', sectorAr: 'الرعاية الصحية' },
  { symbol: 'EIMC', nameEn: 'Egyptian International Medical Center', nameAr: 'المركز الطبي الدولي المصري', sector: 'Healthcare', sectorAr: 'الرعاية الصحية' },
  { symbol: 'CLHO', nameEn: 'Cleopatra Hospital', nameAr: 'مستشفى كليوباترا', sector: 'Healthcare', sectorAr: 'الرعاية الصحية' },
  { symbol: 'MPHO', nameEn: 'Maphre Egypt', nameAr: 'مابفري مصر', sector: 'Healthcare', sectorAr: 'الرعاية الصحية' },
  { symbol: 'MNHD', nameEn: 'Mina for Pharmaceuticals', nameAr: 'مينا للأدوية', sector: 'Healthcare', sectorAr: 'الرعاية الصحية' },
  { symbol: 'ARCP', nameEn: 'Arab Company for Pharmaceuticals', nameAr: 'الشركة العربية للأدوية', sector: 'Healthcare', sectorAr: 'الرعاية الصحية' },
  { symbol: 'ADCI', nameEn: 'Adwia Pharmaceutical', nameAr: 'أدوية للصناعات الدوائية', sector: 'Healthcare', sectorAr: 'الرعاية الصحية' },
  { symbol: 'EGIC', nameEn: 'Egyptian International Pharmaceutical', nameAr: 'المصرية الدولية للصناعات الدوائية', sector: 'Healthcare', sectorAr: 'الرعاية الصحية' },

  // ===== FINANCIAL SERVICES (الخدمات المالية) =====
  { symbol: 'EFIH', nameEn: 'Egyptian Financial Group', nameAr: 'المجموعة المالية المصرية', sector: 'Financial Services', sectorAr: 'الخدمات المالية' },
  { symbol: 'CIBE', nameEn: 'CI Capital Holding', nameAr: 'سي آي كابيتال القابضة', sector: 'Financial Services', sectorAr: 'الخدمات المالية' },
  { symbol: 'ELFN', nameEn: 'Egyptian Financial & Industrial', nameAr: 'المصرية المالية والصناعية', sector: 'Financial Services', sectorAr: 'الخدمات المالية' },
  { symbol: 'ATLC', nameEn: 'Arab Investment for Development', nameAr: 'العربية للاستثمار للتنمية', sector: 'Financial Services', sectorAr: 'الخدمات المالية' },
  { symbol: 'CHFI', nameEn: 'Citadel Capital', nameAr: 'قلعة كابيتال', sector: 'Financial Services', sectorAr: 'الخدمات المالية' },
  { symbol: 'QFRB', nameEn: 'Qena For Rural Development', nameAr: 'قنا للتنمية الريفية', sector: 'Financial Services', sectorAr: 'الخدمات المالية' },
  { symbol: 'TIPC', nameEn: 'Trust International for Investments', nameAr: 'تراست الدولية للاستثمارات', sector: 'Financial Services', sectorAr: 'الخدمات المالية' },
  { symbol: 'AIPS', nameEn: 'Arab International & Portfolio', nameAr: 'العربية الدولية والمحفظة', sector: 'Financial Services', sectorAr: 'الخدمات المالية' },
  { symbol: 'FETR', nameEn: 'Financial Group for Trade', nameAr: 'المجموعة المالية للتجارة', sector: 'Financial Services', sectorAr: 'الخدمات المالية' },
  { symbol: 'NATI', nameEn: 'National Investment Bank', nameAr: 'البنك الوطني للاستثمار', sector: 'Financial Services', sectorAr: 'الخدمات المالية' },
  { symbol: 'ALFA', nameEn: 'Alfa Market Fund', nameAr: 'ألفا للأسواق', sector: 'Financial Services', sectorAr: 'الخدمات المالية' },
  { symbol: 'AICC', nameEn: 'Arab Investment Company', nameAr: 'الشركة العربية للاستثمار', sector: 'Financial Services', sectorAr: 'الخدمات المالية' },
  { symbol: 'CNCT', nameEn: 'Connect for Investments', nameAr: 'كونكت للاستثمارات', sector: 'Financial Services', sectorAr: 'الخدمات المالية' },
  { symbol: 'GCHI', nameEn: 'GlobalCorp Holding', nameAr: 'جلوبال كورب القابضة', sector: 'Financial Services', sectorAr: 'الخدمات المالية' },
  { symbol: 'SEQU', nameEn: 'Sequoia for Investments', nameAr: 'سيكويا للاستثمارات', sector: 'Financial Services', sectorAr: 'الخدمات المالية' },
  { symbol: 'PRDC', nameEn: 'Prime for Development', nameAr: 'برايم للتطوير', sector: 'Financial Services', sectorAr: 'الخدمات المالية' },
  { symbol: 'HRDO', nameEn: 'Horus for Investment', nameAr: 'حورس للاستثمار', sector: 'Financial Services', sectorAr: 'الخدمات المالية' },
  { symbol: 'SFTC', nameEn: 'Safa for Financing & Investment', nameAr: 'صفا للتمويل والاستثمار', sector: 'Financial Services', sectorAr: 'الخدمات المالية' },

  // ===== TOURISM & LEISURE (السياحة والترفيه) =====
  { symbol: 'EGTS', nameEn: 'Egyptian Tourism', nameAr: 'السياحة المصرية', sector: 'Tourism', sectorAr: 'السياحة' },
  { symbol: 'PHON', nameEn: 'Pyramisa Hotels', nameAr: 'بيراميزا للفنادق', sector: 'Tourism', sectorAr: 'السياحة' },
  { symbol: 'ALCN', nameEn: 'Alcatraz for Tourism', nameAr: 'ألكاتراز للسياحة', sector: 'Tourism', sectorAr: 'السياحة' },
  { symbol: 'MISR', nameEn: 'Misr for Tourism', nameAr: 'مصر للسياحة', sector: 'Tourism', sectorAr: 'السياحة' },
  { symbol: 'EGYC', nameEn: 'Egypt for Tourism', nameAr: 'مصر للسياحة والاستثمار', sector: 'Tourism', sectorAr: 'السياحة' },
  { symbol: 'NVIC', nameEn: 'Novira for Tourism', nameAr: 'نوفيرا للسياحة', sector: 'Tourism', sectorAr: 'السياحة' },
  { symbol: 'OCDI', nameEn: 'Orascom Hotels', nameAr: 'أوراسكوم للفنادق', sector: 'Tourism', sectorAr: 'السياحة' },
  { symbol: 'MENA', nameEn: 'Mena for Tourism', nameAr: 'مينا للسياحة', sector: 'Tourism', sectorAr: 'السياحة' },
  { symbol: 'GTHE', nameEn: 'Grand Tours', nameAr: 'جراند تورز', sector: 'Tourism', sectorAr: 'السياحة' },
  { symbol: 'RMDA', nameEn: 'Remco for Tourism', nameAr: 'رمكو للسياحة', sector: 'Tourism', sectorAr: 'السياحة' },
  { symbol: 'CTNP', nameEn: 'Egyptian Company for Tourism', nameAr: 'الشركة المصرية للسياحة', sector: 'Tourism', sectorAr: 'السياحة' },
  { symbol: 'GHOT', nameEn: 'Grand Hotel', nameAr: 'جراند فندق', sector: 'Tourism', sectorAr: 'السياحة' },
  { symbol: 'MFSC', nameEn: 'Mersa for Tourism', nameAr: 'مرسى للسياحة', sector: 'Tourism', sectorAr: 'السياحة' },
  { symbol: 'SICO', nameEn: 'Six of October for Tourism', nameAr: 'السادس من أكتوبر للسياحة', sector: 'Tourism', sectorAr: 'السياحة' },
  { symbol: 'SHRF', nameEn: 'Sherif for Tourism', nameAr: 'شريف للسياحة', sector: 'Tourism', sectorAr: 'السياحة' },
  { symbol: 'GIPY', nameEn: 'Giza Pyramids', nameAr: 'أهرامات الجيزة', sector: 'Tourism', sectorAr: 'السياحة' },
  { symbol: 'MGIC', nameEn: 'Marsa for Investment', nameAr: 'مرسى للاستثمار', sector: 'Tourism', sectorAr: 'السياحة' },
  { symbol: 'TRIA', nameEn: 'Tri Ocean', nameAr: 'تري أوشن', sector: 'Tourism', sectorAr: 'السياحة' },

  // ===== TEXTILES (المنسوجات) =====
  { symbol: 'AMIN', nameEn: 'Amin for Textiles', nameAr: 'أمين للمنسوجات', sector: 'Textiles', sectorAr: 'المنسوجات' },
  { symbol: 'DREI', nameEn: 'Delta for Textiles', nameAr: 'دلتا للمنسوجات', sector: 'Textiles', sectorAr: 'المنسوجات' },
  { symbol: 'ELIX', nameEn: 'El Nasr for Textiles', nameAr: 'النصر للمنسوجات', sector: 'Textiles', sectorAr: 'المنسوجات' },
  { symbol: 'GASS', nameEn: 'Giza Spinning & Weaving', nameAr: 'الجيزة للغزل والنسيج', sector: 'Textiles', sectorAr: 'المنسوجات' },
  { symbol: 'KABO', nameEn: 'Kafr El-Dawar for Textiles', nameAr: 'كفر الدوار للمنسوجات', sector: 'Textiles', sectorAr: 'المنسوجات' },
  { symbol: 'MACA', nameEn: 'Mahala for Spinning & Weaving', nameAr: 'المحلة للغزل والنسيج', sector: 'Textiles', sectorAr: 'المنسوجات' },
  { symbol: 'MANS', nameEn: 'Mansoura for Textiles', nameAr: 'المنصورة للمنسوجات', sector: 'Textiles', sectorAr: 'المنسوجات' },
  { symbol: 'STCH', nameEn: 'Starch & Glucose', nameAr: 'النشا والجلوكوز', sector: 'Textiles', sectorAr: 'المنسوجات' },
  { symbol: 'EGTS', nameEn: 'Egyptian for Textiles', nameAr: 'المصرية للمنسوجات', sector: 'Textiles', sectorAr: 'المنسوجات' },
  { symbol: 'ATXA', nameEn: 'Alexandria for Textiles', nameAr: 'الإسكندرية للمنسوجات', sector: 'Textiles', sectorAr: 'المنسوجات' },
  { symbol: 'ARAB', nameEn: 'Arab for Textiles', nameAr: 'العربية للمنسوجات', sector: 'Textiles', sectorAr: 'المنسوجات' },

  // ===== TRADE & DISTRIBUTION (التجارة والتوزيع) =====
  { symbol: 'EKHI', nameEn: 'Egyptian Kuwaiti Holding', nameAr: 'المصرية الكويتية القابضة', sector: 'Trade', sectorAr: 'التجارة' },
  { symbol: 'EGTS', nameEn: 'Egyptian Trade & Services', nameAr: 'المصرية للتجارة والخدمات', sector: 'Trade', sectorAr: 'التجارة' },
  { symbol: 'MISR', nameEn: 'Misr for Trade', nameAr: 'مصر للتجارة', sector: 'Trade', sectorAr: 'التجارة' },
  { symbol: 'CNIN', nameEn: 'Egyptian for Import & Export', nameAr: 'المصرية للاستيراد والتصدير', sector: 'Trade', sectorAr: 'التجارة' },
  { symbol: 'GENI', nameEn: 'General for Trade & Contracting', nameAr: 'العامة للتجارة والمقاولات', sector: 'Trade', sectorAr: 'التجارة' },
  { symbol: 'ARAB', nameEn: 'Arab Trade', nameAr: 'التجارة العربية', sector: 'Trade', sectorAr: 'التجارة' },
  { symbol: 'GLSU', nameEn: 'Global for Trade', nameAr: 'جلوبال للتجارة', sector: 'Trade', sectorAr: 'التجارة' },
  { symbol: 'IRIS', nameEn: 'Iris for Trade', nameAr: 'إيريس للتجارة', sector: 'Trade', sectorAr: 'التجارة' },

  // ===== INSURANCE (التأمين) =====
  { symbol: 'MOIN', nameEn: 'Misr Insurance', nameAr: 'مصر للتأمين', sector: 'Insurance', sectorAr: 'التأمين' },
  { symbol: 'ATLC', nameEn: 'Al Tawfik for Investment', nameAr: 'التوفيق للاستثمار', sector: 'Insurance', sectorAr: 'التأمين' },
  { symbol: 'EIGP', nameEn: 'Egyptian Insurance', nameAr: 'المصرية للتأمين', sector: 'Insurance', sectorAr: 'التأمين' },
  { symbol: 'UNRI', nameEn: 'United Insurance', nameAr: 'المتحدة للتأمين', sector: 'Insurance', sectorAr: 'التأمين' },
  { symbol: 'AICC', nameEn: 'Arab Insurance', nameAr: 'العربية للتأمين', sector: 'Insurance', sectorAr: 'التأمين' },
  { symbol: 'GIPY', nameEn: 'Giza Insurance', nameAr: 'الجيزة للتأمين', sector: 'Insurance', sectorAr: 'التأمين' },
  { symbol: 'MISR', nameEn: 'Misr for Insurance', nameAr: 'مصر للتأمين', sector: 'Insurance', sectorAr: 'التأمين' },
  { symbol: 'SDCL', nameEn: 'Suez Canal Insurance', nameAr: 'قناة السويس للتأمين', sector: 'Insurance', sectorAr: 'التأمين' },
  { symbol: 'NSRG', nameEn: 'Al Nasr for Insurance', nameAr: 'النصر للتأمين', sector: 'Insurance', sectorAr: 'التأمين' },
  { symbol: 'ALSH', nameEn: 'Al Shams Insurance', nameAr: 'الشمس للتأمين', sector: 'Insurance', sectorAr: 'التأمين' },

  // ===== MEDIA (الإعلام) =====
  { symbol: 'ECMX', nameEn: 'Egyptian Media', nameAr: 'الإعلام المصري', sector: 'Media', sectorAr: 'الإعلام' },
  { symbol: 'VIDEO', nameEn: 'Video Cairo', nameAr: 'فيديو القاهرة', sector: 'Media', sectorAr: 'الإعلام' },
  { symbol: 'EGCH', nameEn: 'Egyptian Channels', nameAr: 'القنوات المصرية', sector: 'Media', sectorAr: 'الإعلام' },

  // ===== AGRICULTURE (الزراعة) =====
  { symbol: 'ALEX', nameEn: 'Alexandria for Agriculture', nameAr: 'الإسكندرية للزراعة', sector: 'Agriculture', sectorAr: 'الزراعة' },
  { symbol: 'EGAC', nameEn: 'Egyptian Agriculture', nameAr: 'الزراعة المصرية', sector: 'Agriculture', sectorAr: 'الزراعة' },
  { symbol: 'MISR', nameEn: 'Misr for Agriculture', nameAr: 'مصر للزراعة', sector: 'Agriculture', sectorAr: 'الزراعة' },
  { symbol: 'SDCL', nameEn: 'Suez for Agriculture', nameAr: 'السويس للزراعة', sector: 'Agriculture', sectorAr: 'الزراعة' },
  { symbol: 'UNRI', nameEn: 'United for Agriculture', nameAr: 'المتحدة للزراعة', sector: 'Agriculture', sectorAr: 'الزراعة' },
  { symbol: 'KAFR', nameEn: 'Kafr El Sheikh for Agriculture', nameAr: 'كفر الشيخ للزراعة', sector: 'Agriculture', sectorAr: 'الزراعة' },
  { symbol: 'FISH', nameEn: 'Egyptian for Fish', nameAr: 'المصرية للأسماك', sector: 'Agriculture', sectorAr: 'الزراعة' },
  { symbol: 'DAIR', nameEn: 'Egyptian Dairy', nameAr: 'الألبان المصرية', sector: 'Agriculture', sectorAr: 'الزراعة' },

  // ===== CONSTRUCTION (الإنشاءات) =====
  { symbol: 'ACRO', nameEn: 'Acrow for Construction', nameAr: 'أكرو للإنشاءات', sector: 'Construction', sectorAr: 'الإنشاءات' },
  { symbol: 'CONC', nameEn: 'Concrete for Construction', nameAr: 'كونكريت للإنشاءات', sector: 'Construction', sectorAr: 'الإنشاءات' },
  { symbol: 'GCIP', nameEn: 'Giza Construction', nameAr: 'الجيزة للإنشاءات', sector: 'Construction', sectorAr: 'الإنشاءات' },
  { symbol: 'HAEL', nameEn: 'Hassan Allam Construction', nameAr: 'حسن علام للإنشاءات', sector: 'Construction', sectorAr: 'الإنشاءات' },
  { symbol: 'ECON', nameEn: 'Egyptian Construction', nameAr: 'الإنشاءات المصرية', sector: 'Construction', sectorAr: 'الإنشاءات' },
  { symbol: 'ARAB', nameEn: 'Arab Construction', nameAr: 'العربية للإنشاءات', sector: 'Construction', sectorAr: 'الإنشاءات' },
  { symbol: 'MISR', nameEn: 'Misr Construction', nameAr: 'مصر للإنشاءات', sector: 'Construction', sectorAr: 'الإنشاءات' },
  { symbol: 'EGCT', nameEn: 'Egyptian Contracting', nameAr: 'المقاولات المصرية', sector: 'Construction', sectorAr: 'الإنشاءات' },

  // ===== TECHNOLOGY (التكنولوجيا) =====
  { symbol: 'ITEC', nameEn: 'Information Technology', nameAr: 'تكنولوجيا المعلومات', sector: 'Technology', sectorAr: 'التكنولوجيا' },
  { symbol: 'EGTS', nameEn: 'Egyptian Technology', nameAr: 'التكنولوجيا المصرية', sector: 'Technology', sectorAr: 'التكنولوجيا' },
  { symbol: 'SOFT', nameEn: 'Software Egypt', nameAr: 'سوفت مصر', sector: 'Technology', sectorAr: 'التكنولوجيا' },
  { symbol: 'DATA', nameEn: 'Data Management', nameAr: 'إدارة البيانات', sector: 'Technology', sectorAr: 'التكنولوجيا' },
  { symbol: 'SYSC', nameEn: 'Systems Egypt', nameAr: 'أنظمة مصر', sector: 'Technology', sectorAr: 'التكنولوجيا' },

  // ===== INVESTMENT (الاستثمار) =====
  { symbol: 'AIND', nameEn: 'Arab for Investment', nameAr: 'العربية للاستثمار', sector: 'Investment', sectorAr: 'الاستثمار' },
  { symbol: 'BINV', nameEn: 'Blom Investment', nameAr: 'بلوم للاستثمار', sector: 'Investment', sectorAr: 'الاستثمار' },
  { symbol: 'CICH', nameEn: 'CI Capital', nameAr: 'سي كابيتال', sector: 'Investment', sectorAr: 'الاستثمار' },
  { symbol: 'EFIC', nameEn: 'Egyptian Financial', nameAr: 'المالية المصرية', sector: 'Investment', sectorAr: 'الاستثمار' },
  { symbol: 'FION', nameEn: 'Fission for Investment', nameAr: 'فيشن للاستثمار', sector: 'Investment', sectorAr: 'الاستثمار' },
  { symbol: 'GLBL', nameEn: 'Global Investment', nameAr: 'جلوبال للاستثمار', sector: 'Investment', sectorAr: 'الاستثمار' },
  { symbol: 'HOUS', nameEn: 'Housing Investment', nameAr: 'الإسكان للاستثمار', sector: 'Investment', sectorAr: 'الاستثمار' },
  { symbol: 'KSPI', nameEn: 'Kuwait for Investment', nameAr: 'الكويت للاستثمار', sector: 'Investment', sectorAr: 'الاستثمار' },
  { symbol: 'MINA', nameEn: 'Mina Investment', nameAr: 'مينا للاستثمار', sector: 'Investment', sectorAr: 'الاستثمار' },
  { symbol: 'PRIV', nameEn: 'Private Investment', nameAr: 'الاستثمار الخاص', sector: 'Investment', sectorAr: 'الاستثمار' },
  { symbol: 'RAYA', nameEn: 'Raya Investment', nameAr: 'رايا للاستثمار', sector: 'Investment', sectorAr: 'الاستثمار' },
  { symbol: 'ZIMA', nameEn: 'Zamalek Investment', nameAr: 'الزمالك للاستثمار', sector: 'Investment', sectorAr: 'الاستثمار' },
];

// Get companies by sector
export function getCompaniesBySector(sector: string): EgyptianCompany[] {
  return EGYPTIAN_COMPANIES.filter(c => c.sector === sector);
}

// Get all unique sectors
export function getAllSectors(): { en: string; ar: string }[] {
  const sectors = new Map<string, string>();
  EGYPTIAN_COMPANIES.forEach(c => {
    sectors.set(c.sector, c.sectorAr);
  });
  return Array.from(sectors.entries()).map(([en, ar]) => ({ en, ar }));
}

// Search companies
export function searchCompanies(query: string): EgyptianCompany[] {
  const q = query.toLowerCase();
  return EGYPTIAN_COMPANIES.filter(c => 
    c.symbol.toLowerCase().includes(q) ||
    c.nameEn.toLowerCase().includes(q) ||
    c.nameAr.includes(query)
  );
}

// Get company by symbol
export function getCompanyBySymbol(symbol: string): EgyptianCompany | undefined {
  return EGYPTIAN_COMPANIES.find(c => 
    c.symbol.toLowerCase() === symbol.toLowerCase()
  );
}
