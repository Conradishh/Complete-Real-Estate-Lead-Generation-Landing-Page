import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PopupModal } from 'react-calendly';
import { useState } from 'react';

export default function FinalCTA() {
  const { isDark } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={`${isDark ? 'bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-300 '} py-20 transition-colors`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>
          Ready to Never Miss Another Lead?
        </h2>
        <p className={`text-xl mb-10 max-w-5xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
          See how every new lead is contacted instantly, qualified automatically, and booked into your calendar.
        </p>
<button
  onClick={() => setIsModalOpen(true)}
  className="mx-auto bg-amber-500 hover:bg-amber-600 text-white px-10 py-5 rounded-lg font-bold text-xl flex items-center justify-center gap-3 transition-all shadow-xl"
>
  Get A Live Demo
  <ArrowRight className="w-6 h-6" />
</button>
        <p className={`${isDark ? 'text-sm text-gray-400 mt-5 text-center' : 'text-sm text-gray-700 mt-5 text-center'}`}>
          Takes 15 minutes • No commitment • Works with your current lead sources
        </p>

        {typeof window !== "undefined" && (
          <PopupModal
            url="https://cal.com/conrad-flowvantage/15-minute-demo-flowvantage"
            open={isModalOpen}
            onModalClose={() => setIsModalOpen(false)}
            rootElement={document.body}
          />
        )}
      </div>
    </section>
  );
}