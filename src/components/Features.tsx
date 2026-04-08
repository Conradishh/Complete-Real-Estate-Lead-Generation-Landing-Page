import { Bolt, Bot, Calendar, CloudLightning, MessageCircle, TrendingUp, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Features() {
  const { isDark } = useTheme();

  const features = [
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Every new lead is contacted within seconds via SMS, email, or web chat — so you’re always first.',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Bot,
      title: 'Automated Qualification',
      description: 'We identify serious buyers and sellers by asking the right questions and filtering out low-intent leads.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Calendar,
      title: 'Appointment Booking',
      description: 'Qualified prospects are automatically scheduled into your calendar — ready for you to close deals.',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section id="features" className={`${isDark ? 'bg-gray-800' : 'bg-white'} py-20 transition-colors`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            How Your Leads Turn Into Booked Appointments
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
            Everything you need to generate and manage high-quality real estate leads
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`${isDark ? 'bg-gray-700 border-gray-500 hover:shadow-xl hover:bg-gray-600' : 'bg-gray-50 border-gray-300 hover:shadow-xl hover:bg-gray-200'} border rounded-xl p-8 transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`bg-gradient-to-br ${feature.color} w-14 h-14 rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
