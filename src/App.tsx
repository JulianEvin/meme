import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Stethoscope, 
  ClipboardCheck, 
  Mail, 
  ArrowRight, 
  Linkedin, 
  Phone,
  ExternalLink,
  Menu,
  X,
  Briefcase,
  User,
  GraduationCap,
  Send,
  MapPin,
  Activity,
  Users,
  Sparkles,
  Download,
  Award,
  Sun,
  Moon
} from 'lucide-react';
import { translations } from './translations';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'th'>('en');
  const [isLoading, setIsLoading] = useState(true);

  const t = translations[language];

  const NAV_LINKS = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.education, href: '#education' },
    { name: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    // Simulate data loading for perceived performance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-1000 overflow-x-hidden bg-slate-50 text-slate-900">
      <div className="relative z-10">
      {/* Navigation */}
      <nav 
        className={`fixed z-50 transition-all duration-500 ${
          isScrolled 
            ? 'top-4 left-4 right-4 md:top-6 md:left-1/2 md:-translate-x-1/2 md:w-[800px] bg-white/90 backdrop-blur-xl py-3 px-6 rounded-full shadow-lg border border-slate-200/50'
            : 'top-0 left-0 right-0 md:top-6 md:left-12 md:right-12 bg-transparent py-6 px-6 md:px-12'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
            <motion.a 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-xl font-bold tracking-tight flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white transition-all duration-500 shadow-sm group-hover:scale-105">
                <Heart className="w-5 h-5" />
              </div>
              <span className={`text-slate-900 transition-all duration-300 ${isScrolled ? 'hidden lg:block' : 'block'}`}>Me Me Mya Saung</span>
            </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.a 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-sm font-semibold transition-all duration-300 relative group text-slate-600 hover:text-slate-900"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </motion.a>
            ))}
            
            {/* Language Toggle */}
            <div className="flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
              <button 
                onClick={() => setLanguage('en')} 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 ${language === 'en' ? 'bg-white shadow-sm text-slate-900' : 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100'}`}
                title="English"
              >
                <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-5 h-5 rounded-full object-cover" />
              </button>
              <button 
                onClick={() => setLanguage('th')} 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 ${language === 'th' ? 'bg-white shadow-sm text-slate-900' : 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100'}`}
                title="Thai"
              >
                <img src="https://flagcdn.com/w40/th.png" alt="Thai" className="w-5 h-5 rounded-full object-cover" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 transition-colors text-slate-600 bg-slate-100/50 rounded-full border border-slate-200/50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className={`fixed inset-0 z-40 bg-white pt-24 px-8 md:hidden flex flex-col gap-8`}
          >
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-2xl font-medium transition-colors text-slate-800 hover:text-slate-900"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center gap-4 mt-4">
              <button 
                onClick={() => setLanguage('en')} 
                className={`px-4 py-2 rounded-full border flex items-center gap-2 ${language === 'en' ? 'bg-slate-100 border-slate-300' : 'border-transparent opacity-50'}`}
              >
                <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-5 h-5 rounded-full object-cover" /> English
              </button>
              <button 
                onClick={() => setLanguage('th')} 
                className={`px-4 py-2 rounded-full border flex items-center gap-2 ${language === 'th' ? 'bg-slate-100 border-slate-300' : 'border-transparent opacity-50'}`}
              >
                <img src="https://flagcdn.com/w40/th.png" alt="Thai" className="w-5 h-5 rounded-full object-cover" /> ไทย
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme Switcher Floating Button */}
      {/* Removed as it is now in the nav and bottom nav */}

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest mb-8 bg-white shadow-sm transition-colors duration-500"
              >
                <Sparkles className="w-3.5 h-3.5" />
                {t.hero.specialist}
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] transition-colors duration-500 text-slate-900">
                {t.hero.name1} <br/>
                <span className="text-slate-900">
                  {t.hero.name2}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed max-w-xl font-light transition-colors duration-500 text-slate-600">
                {t.hero.description1}<span className="text-slate-900 font-medium">{t.hero.description2}</span>{t.hero.description3}<span className="text-slate-900 font-medium">{t.hero.description4}</span>{t.hero.description5}
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#experience"
                  onClick={(e) => { e.preventDefault(); scrollToSection('#experience'); }}
                  className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-2 shadow-md hover:bg-slate-800 transition-colors"
                >
                  {t.hero.explore} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <div className="flex items-center gap-6 px-4">
                  <motion.a whileHover={{ y: -2, color: '#0f172a' }} href="mailto:mememyasaung@gmail.com" className="text-slate-500 hover:text-slate-900 transition-all"><Mail className="w-6 h-6" /></motion.a>
                  <motion.a whileHover={{ y: -2, color: '#0f172a' }} href="tel:0858629053" className="text-slate-500 hover:text-slate-900 transition-all"><Phone className="w-6 h-6" /></motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative lg:ml-auto group w-full max-w-sm mx-auto lg:mx-0"
            >
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-slate-200 shadow-xl transition-all duration-500 bg-white">
                {/* Profile Image */}
                <img 
                  src="https://i.ibb.co/fYtsTvB9/2.jpg" 
                  alt="Me Me Mya Saung" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
              </div>
              
              {/* Floating Experience Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-10 bg-white/90 backdrop-blur-xl border border-slate-200 p-4 sm:p-8 rounded-2xl sm:rounded-[3rem] shadow-xl flex items-center gap-4 sm:gap-8 transition-all duration-500"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-3xl bg-slate-100 flex items-center justify-center text-slate-900 shadow-sm">
                  <Briefcase className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <p className="text-2xl sm:text-4xl font-black leading-none text-slate-900">4+</p>
                  <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mt-2 sm:mt-3 text-slate-500">Years of Excellence</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 md:px-12 relative overflow-hidden border-y border-slate-200 transition-colors duration-500 bg-white">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-0.5 w-12 bg-slate-900" />
                  <span className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">{t.about.specialist}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 transition-colors duration-500 text-slate-900">
                  {t.about.title1} <br/>
                  <span className="text-slate-400">{t.about.title2}</span>
                </h2>
                <div className="space-y-6 text-base sm:text-lg leading-relaxed font-medium transition-colors duration-500 text-slate-600">
                  <p>
                    {t.about.p1}
                  </p>
                  <p className="border-l-4 border-slate-900 pl-8 italic py-4 transition-all duration-500 bg-slate-50 rounded-r-2xl">
                    {t.about.quote}
                  </p>
                  <p>
                    {t.about.p2}
                  </p>
                </div>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {t.about.stats.map((stat, i) => {
                  const icons = [
                    <Activity key="activity" className="w-5 h-5" />,
                    <Users key="users" className="w-5 h-5" />,
                    <Heart key="heart" className="w-5 h-5" />,
                    <GraduationCap key="grad" className="w-5 h-5" />
                  ];
                  return (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="p-6 sm:p-8 rounded-3xl sm:rounded-[2.5rem] text-center transition-all duration-300 group bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all bg-white border border-slate-200 shadow-sm text-slate-700 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-800">
                      {icons[i]}
                    </div>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 transition-colors duration-500 leading-tight text-slate-900">{stat.value}</p>
                    <p className="text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 text-slate-500">{stat.label}</p>
                  </motion.div>
                )})}
              </div>
            </div>
          </div>
        </section>

        {/* Competencies Section */}
        <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">{t.competencies.subtitle}</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black transition-colors duration-500 text-slate-900">{t.competencies.title}</h2>
            </div>
            <p className="max-w-xs text-xs sm:text-sm font-medium leading-relaxed transition-colors duration-500 text-slate-500">
              {t.competencies.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.competencies.items.map((service, index) => {
              const icons = [
                <ClipboardCheck key="clipboard" className="w-6 h-6" />,
                <Stethoscope key="stethoscope" className="w-6 h-6" />,
                <Activity key="activity" className="w-6 h-6" />,
                <Users key="users" className="w-6 h-6" />
              ];
              return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 sm:p-10 rounded-3xl sm:rounded-[3rem] transition-all duration-300 group relative overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 bg-slate-50 border border-slate-100 text-slate-700 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-800">
                  {icons[index]}
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-4 transition-colors duration-300 text-slate-900">{service.title}</h3>
                <p className="text-sm font-medium leading-relaxed transition-colors duration-300 text-slate-600">
                  {service.description}
                </p>
              </motion.div>
            )})}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={`py-32 px-6 md:px-12 border-y border-slate-200 transition-colors duration-500 bg-slate-50`}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-24">
              <span className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">{t.experience.timeline}</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black transition-colors duration-500 text-slate-900">{t.experience.title}</h2>
            </div>

            <div className="space-y-8 sm:space-y-10">
              {isLoading ? (
                // Skeleton Loader for Experience
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={`skeleton-exp-${index}`} className="p-8 sm:p-10 rounded-3xl sm:rounded-[3rem] border border-slate-200 bg-white shadow-sm animate-pulse">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
                      <div className="w-full">
                        <div className="h-8 w-3/4 sm:w-1/2 bg-slate-200 rounded-full mb-4"></div>
                        <div className="h-4 w-1/2 sm:w-1/3 bg-slate-200 rounded-full"></div>
                      </div>
                      <div className="h-8 w-24 bg-slate-200 rounded-full shrink-0"></div>
                    </div>
                    <div className="h-20 w-full bg-slate-200 rounded-2xl mb-8"></div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="h-4 w-full bg-slate-200 rounded-full"></div>
                      <div className="h-4 w-5/6 bg-slate-200 rounded-full"></div>
                      <div className="h-4 w-4/5 bg-slate-200 rounded-full"></div>
                      <div className="h-4 w-full bg-slate-200 rounded-full"></div>
                    </div>
                  </div>
                ))
              ) : (
                t.experience.jobs.map((job, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    viewport={{ once: true }}
                    className="group relative p-8 sm:p-10 rounded-3xl sm:rounded-[3rem] transition-all duration-300 border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-slate-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-black transition-colors mb-2 text-slate-900">{job.title}</h3>
                        <p className="font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs transition-colors duration-300 text-slate-500">{job.company}</p>
                      </div>
                      <div className="px-6 py-2 rounded-full text-[10px] sm:text-xs font-bold border transition-all duration-300 bg-slate-100 text-slate-700 border-slate-200">
                        {job.period}
                      </div>
                    </div>
                    <p className="mb-8 text-base sm:text-lg font-medium leading-relaxed max-w-3xl transition-colors duration-300 text-slate-600">{job.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {job.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-4 text-xs sm:text-sm font-medium transition-colors duration-300 text-slate-600">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                          {resp}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="mb-24">
            <span className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">{t.education.academic}</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black transition-colors duration-500 text-slate-900">{t.education.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {isLoading ? (
              // Skeleton Loader for Education
              Array.from({ length: 4 }).map((_, index) => (
                <div key={`skeleton-edu-${index}`} className="p-8 sm:p-10 rounded-3xl sm:rounded-[3rem] border border-slate-200 bg-white shadow-sm animate-pulse">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-200"></div>
                    <div className="h-8 w-20 bg-slate-200 rounded-full"></div>
                  </div>
                  <div className="h-6 w-3/4 bg-slate-200 rounded-full mb-4"></div>
                  <div className="h-4 w-1/2 bg-slate-200 rounded-full"></div>
                </div>
              ))
            ) : (
              t.education.degrees.map((edu, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-8 sm:p-10 rounded-3xl sm:rounded-[3rem] transition-all duration-300 group border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-slate-300"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all bg-slate-50 border border-slate-100 shadow-sm group-hover:rotate-6 text-slate-700 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-800">
                      <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <span className="text-[10px] sm:text-[12px] font-bold px-4 sm:px-5 py-2 rounded-full uppercase tracking-[0.2em] border transition-all duration-300 text-slate-700 bg-slate-100 border-slate-200 shadow-sm">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black leading-tight mb-4 transition-colors text-slate-900">{edu.degree}</h3>
                  <p className="text-xs sm:text-sm font-bold transition-colors duration-300 text-slate-500">{edu.institution}</p>
                </motion.div>
              ))
            )}
          </div>
        </section>

        {/* Community Involvement Section */}
        <section className="py-32 px-6 md:px-12 border-y border-slate-200 transition-colors duration-500 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24">
              <span className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">{t.community.impact}</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black transition-colors duration-500 text-slate-900">{t.community.title}</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.community.items.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-8 sm:p-10 rounded-3xl sm:rounded-[3rem] transition-all group border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-slate-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 mb-6 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-800 transition-all shadow-sm">
                    <Award className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black mb-4 transition-colors text-slate-900">{item.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed font-medium transition-colors duration-300 text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto mb-24 md:mb-0">
          <div className={`border p-6 sm:p-12 md:p-20 rounded-[3rem] md:rounded-[4rem] relative overflow-hidden transition-all duration-500 bg-white shadow-sm`}>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <span className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 block">{t.contact.connect}</span>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-none transition-colors duration-500 text-slate-900" dangerouslySetInnerHTML={{ __html: t.contact.title }}></h2>
                <p className="text-base sm:text-lg md:text-xl mb-12 max-w-md font-light transition-colors duration-500 text-slate-600">
                  {t.contact.description}
                </p>
                
                <div className="space-y-6 sm:space-y-8">
                  <motion.a whileHover={{ x: 5 }} href="mailto:mememyasaung@gmail.com" className="flex items-center gap-4 sm:gap-6 transition-all group text-slate-600 hover:text-slate-900">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[1.5rem] sm:rounded-[2rem] border flex items-center justify-center transition-all bg-slate-50 border-slate-100 group-hover:border-slate-300 text-slate-700 group-hover:bg-slate-900 group-hover:text-white shrink-0">
                      <Mail className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                    <span className="text-base sm:text-lg md:text-xl font-bold break-all">mememyasaung@gmail.com</span>
                  </motion.a>
                  <motion.a whileHover={{ x: 5 }} href="tel:0858629053" className="flex items-center gap-4 sm:gap-6 transition-all group text-slate-600 hover:text-slate-900">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[1.5rem] sm:rounded-[2rem] border flex items-center justify-center transition-all bg-slate-50 border-slate-100 group-hover:border-slate-300 text-slate-700 group-hover:bg-slate-900 group-hover:text-white shrink-0">
                      <Phone className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                    <span className="text-base sm:text-lg md:text-xl font-bold">08 586 290 53</span>
                  </motion.a>
                  <div className="flex items-center gap-4 sm:gap-6 transition-colors duration-500 group text-slate-600">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[1.5rem] sm:rounded-[2rem] border flex items-center justify-center transition-all bg-slate-50 border-slate-100 text-slate-700 shrink-0">
                      <MapPin className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                    <span className="text-base sm:text-lg md:text-xl font-bold">{t.contact.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-slate-100 bg-slate-50 shadow-sm">
                <form className="space-y-5 sm:space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest ml-2 text-slate-500">{t.contact.form.name}</label>
                    <input type="text" className="w-full px-5 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border transition-all bg-white border-slate-200 focus:border-slate-400 outline-none text-slate-900" placeholder={t.contact.form.namePlaceholder} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest ml-2 text-slate-500">{t.contact.form.email}</label>
                    <input type="email" className="w-full px-5 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border transition-all bg-white border-slate-200 focus:border-slate-400 outline-none text-slate-900" placeholder={t.contact.form.emailPlaceholder} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest ml-2 text-slate-500">{t.contact.form.message}</label>
                    <textarea rows={4} className="w-full px-5 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border transition-all bg-white border-slate-200 focus:border-slate-400 outline-none resize-none text-slate-900" placeholder={t.contact.form.messagePlaceholder}></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 sm:py-5 bg-slate-900 text-white rounded-xl sm:rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-md">
                    {t.contact.form.send} <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App Style Bottom Nav */}
        <div className="mobile-bottom-nav">
          {NAV_LINKS.map((link, idx) => {
            const icons = [
              <User key="user" className="w-6 h-6" />,
              <Briefcase key="briefcase" className="w-6 h-6" />,
              <GraduationCap key="grad" className="w-6 h-6" />,
              <Mail key="mail" className="w-6 h-6" />
            ];
            return (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="flex flex-col items-center gap-1 transition-all text-slate-500 hover:text-blue-600"
              >
                {icons[idx]}
                <span className="text-[10px] font-black uppercase tracking-tighter">{link.name}</span>
              </a>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3 font-bold text-xl">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white">
              <Heart className="w-4 h-4" />
            </div>
            <span className="text-slate-900">Me Me Mya Saung</span>
          </div>
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em] text-center md:text-left" dangerouslySetInnerHTML={{ __html: t.footer.copyright.replace('{year}', new Date().getFullYear().toString()) }}>
          </p>
          <div className="flex items-center gap-8">
            <motion.a whileHover={{ y: -2, color: '#0f172a' }} href="mailto:mememyasaung@gmail.com" className="text-slate-400 hover:text-slate-900 transition-all"><Mail className="w-5 h-5" /></motion.a>
            <motion.a whileHover={{ y: -2, color: '#0f172a' }} href="tel:0858629053" className="text-slate-400 hover:text-slate-900 transition-all"><Phone className="w-5 h-5" /></motion.a>
            <motion.a whileHover={{ y: -2, color: '#0f172a' }} href="#" className="text-slate-400 hover:text-slate-900 transition-all"><Linkedin className="w-5 h-5" /></motion.a>
          </div>
        </div>
      </footer>
      
      <style>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
          </div>
    </div>
  );
}
