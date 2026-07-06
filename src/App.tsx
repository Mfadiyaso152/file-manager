import Header from './components/Header';
import ToolsGrid from './components/ToolsGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfdfe] text-slate-700 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden font-sans">
      {/* Upper decorative horizontal line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-500" />

      {/* Main Header */}
      <Header />

      {/* Interactive workspace */}
      <main className="pb-16 relative">
        {/* Soft backdrop radial light circles */}
        <div className="absolute top-1/4 right-1/12 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/12 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

        {/* Three Specialized Tools presentation */}
        <ToolsGrid />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

