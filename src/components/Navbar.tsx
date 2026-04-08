import { Home, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { isDark, toggleDarkMode } = useTheme();
  const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -80; // adjust if needed
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
};
  return (
    <nav className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-300'} border-b sticky top-0 z-50 transition-colors`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Home className={`w-8 h-8 ${isDark ? 'text-blue-500' : 'text-blue-900'}`} />
            <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-blue-900'}`}>FlowVantage</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
<button
  onClick={() => scrollToSection("home")}
  className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-800 hover:text-blue-600'} transition-colors`}
>
  Home
</button>

<button
  onClick={() => scrollToSection("features")}
  className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-800 hover:text-blue-600'} transition-colors`}
>
  Features
</button>

<button
  onClick={() => scrollToSection("how-it-works")}
  className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-800 hover:text-blue-600'} transition-colors`}
>
  How It Works
</button>

<button
  onClick={() => scrollToSection("target-audience")}
  className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-800 hover:text-blue-600'} transition-colors`}
>
  Who's It For?
</button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
<button
  onClick={() => window.open("https://cal.com/conrad-flowvantage/15-minute-demo-flowvantage", "_blank", "noopener,noreferrer")}
  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
>
  Get A Live Demo
</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
