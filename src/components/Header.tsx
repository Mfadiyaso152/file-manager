import { motion } from 'motion/react';
import { FolderGit, Sparkles, Shield, ArrowUpRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden py-10 md:py-16 bg-gradient-to-b from-blue-50/50 via-slate-50/20 to-transparent">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Brand Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-blue-600 text-xs md:text-sm font-medium mb-6 shadow-sm"
          id="brand-badge"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>مرحباً بك في الجيل الجديد لإدارة ملفاتك</span>
        </motion.div>

        {/* Logo and App Title */}
        <div className="flex flex-col items-center justify-center gap-4 mb-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 relative group"
            id="logo-container"
          >
            <FolderGit className="w-9 h-9 md:w-11 md:h-11 transition-transform group-hover:scale-110" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-ping" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight"
            id="main-title"
          >
            مدير الملفات <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">File Manager</span>
          </motion.h1>
        </div>

        {/* Dynamic Concept Explanation */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl mx-auto text-base md:text-lg text-slate-600 leading-relaxed font-light mb-8"
          id="hero-desc"
        >
          منصتك الموحدة والبسيطة التي تم تصميمها خصيصاً لتسهيل استخدام ومعالجة الملفات اليومية. قمنا بدمج وربط أهم الأدوات الاحترافية في واجهة واحدة نظيفة ومريحة للعين، لتنجز مهامك دون مغادرة متصفحك.
        </motion.p>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-right"
          id="feature-highlights"
        >
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-slate-100 flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 text-sm">أدوات ذكية متخصصة</h3>
              <p className="text-xs text-slate-500 mt-0.5">معالجة فورية وتوفير تام للوقت والجهد.</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-slate-100 flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 text-sm">أمان وخصوصية كاملة</h3>
              <p className="text-xs text-slate-500 mt-0.5">تتم المعالجة دون التسلل لخصوصية ملفاتك.</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-slate-100 flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-2 rounded-lg bg-amber-50 text-amber-600 shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 text-sm">سهولة وسرعة قصوى</h3>
              <p className="text-xs text-slate-500 mt-0.5">روابط وتكامل سلس مع أفضل الخدمات السحابية.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
