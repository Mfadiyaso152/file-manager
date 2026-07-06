import { FolderGit, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800" id="footer-section">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          
          {/* Logo & Pitch */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <FolderGit className="w-5 h-5" />
              </div>
              <span className="font-black text-lg tracking-tight">مدير الملفات</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              أبسط وأسرع منصة لتسهيل استخدام ومعالجة الملفات والمستندات يومياً عبر ربطك بأحدث الحلول السحابية فائقة الأمان والدقة بلمح البصر.
            </p>
          </div>

          {/* Links for tools */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">الأدوات المدعومة</h4>
            <div className="space-y-2 text-xs">
              <a 
                href="https://clearcut-lemon-one.vercel.app" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <span>مستخلص خلفيات الصور - ClearCut</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a 
                href="https://convex-six-lime.vercel.app" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <span>محول الصيغ الشامل - Convex</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a 
                href="https://project1-amber-seven.vercel.app/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <span>توثيق وتوقيع الأوراق الرسمية</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Safety disclaimer */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">الأمان والسرية</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              جميع العمليات والتحليلات تتم محلياً ومباشرةً داخل المتصفح أو عبر بروتوكولات آمنة ومشفرة تماماً لضمان سرية معلوماتك.
            </p>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div>
            &copy; {year} مدير الملفات | File Manager. جميع الحقوق محفوظة.
          </div>
          <div className="flex gap-4">
            <span className="text-slate-500">تم تصميمه بدقة متناهية لتجربة مستخدم عصرية وسهلة</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
