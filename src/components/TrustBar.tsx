import { Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function TrustBar() {
  const { isDark } = useTheme();

  return (
    <section className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-300'} py-12 border-y transition-colors`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3">
          <Award className={`w-6 h-6 ${isDark ? 'text-blue-500' : 'text-blue-900'}`} />
          <p className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
            Built using proven lead conversion principles used by top-performing real estate teams
          </p>
        </div>
      </div>
    </section>
  );
}
