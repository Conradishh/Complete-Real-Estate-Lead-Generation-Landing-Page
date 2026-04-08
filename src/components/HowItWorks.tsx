import { Bell, Filter, Check, Inbox } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function HowItWorks() {
  const { isDark } = useTheme();

  const steps = [
    {
      icon: Inbox,
      number: '01',
      title: 'A Lead Comes In',
      description: 'From your ads, website, or listings — every new inquiry is captured instantly.',
    },
    {
      icon: Filter,
      number: '02',
      title: 'AI Responds & Filters',
      description: 'Your lead is contacted within seconds, asked key questions, and qualified automatically.',
    },
    {
      icon: Check,
      number: '03',
      title: 'Appointments Are Booked',
      description: 'Serious prospects are scheduled directly into your calendar, ready for you to close.',
    },
  ];

  return (
    <section id="how-it-works" className={`${isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-300'} py-20 transition-colors`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-9">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            How It Works - Step By Step
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
            Every lead is handled instantly, qualified, and booked — automatically
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className={`${isDark ? 'bg-gray-800 border border-gray-600' : 'bg-gray-50 border border-gray-300'} rounded-xl p-8 shadow-sm h-full transition-colors`}>
                  <div className="flex items-center gap-5 mb-6">
                    <span className={`text-5xl font-bold opacity-40 ${isDark ? 'text-blue-200/60' : 'text-blue-900'}`}>
                      {step.number}
                    </span>
                    <div className="bg-gradient-to-br from-blue-500 to-green-500 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {step.title}
                  </h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-7 transform -translate-y-1/2 z-10">
                    <div className={`w-9 h-0.5 ${isDark ? 'bg-gray-700' : 'bg-gray-400'}`}></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
