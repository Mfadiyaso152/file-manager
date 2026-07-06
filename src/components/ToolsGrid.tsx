import { motion } from 'motion/react';
import { 
  ImageIcon, Shuffle, FileCheck, ArrowUpRight
} from 'lucide-react';
import { externalTools } from '../data/tools';
import { ExternalTool } from '../types';

export default function ToolsGrid() {
  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Image':
        return <ImageIcon className="w-6 h-6" />;
      case 'Shuffle':
        return <Shuffle className="w-6 h-6" />;
      case 'FileSignature':
        return <FileCheck className="w-6 h-6" />;
      default:
        return <ImageIcon className="w-6 h-6" />;
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-16" id="tools-section">
      {/* Section Head */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
          منظومة الأدوات المتكاملة للملفات
        </h2>
        <p className="text-base text-slate-500 mt-3 max-w-2xl mx-auto leading-relaxed">
          اختر الأداة المناسبة لمهامك اليومية بضغطة زر واحدة، وتمتع بمعالجة فورية فائقة السرعة والأمان لملفاتك وصورك.
        </p>
      </div>

      {/* Grid of Tools */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {externalTools.map((tool: ExternalTool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`bg-white rounded-2xl border border-slate-100 p-8 shadow-sm flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${tool.hoverColor}`}
            id={`tool-card-${tool.id}`}
          >
            {/* Background absolute flare on hover */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-slate-50 rounded-full transition-transform duration-500 group-hover:scale-[3] -z-10 opacity-60" />

            <div>
              {/* Tool Icon and Brand Header */}
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3.5 rounded-2xl border ${tool.accentColor} shadow-inner`}>
                  {getIcon(tool.iconName)}
                </div>
                
                <span className="text-xs font-mono font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </span>
              </div>

              {/* Tool Titles */}
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                {tool.arabicName}
              </h3>
              
              <p className="text-xs text-slate-400 font-mono mb-6">
                {tool.url.replace('https://', '')}
              </p>

              {/* Description - Exactly one sentence */}
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                {tool.description}
              </p>
            </div>

            {/* Bottom Actions */}
            <div>
              {/* Link CTA */}
              <a
                href={tool.url}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm bg-slate-50 hover:bg-gradient-to-l hover:from-blue-600 hover:to-indigo-600 hover:text-white border border-slate-150 hover:border-transparent text-slate-700 shadow-sm transition-all duration-300 group-hover:-translate-y-0.5"
                id={`cta-link-${tool.id}`}
              >
                <span>ابدأ الآن مجاناً</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
