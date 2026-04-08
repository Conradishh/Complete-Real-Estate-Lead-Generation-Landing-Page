import { Star, Quote } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Testimonials() {
  const { isDark } = useTheme();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Real Estate Agent',
      result: 'Generated 47 qualified leads in 30 days',
      content: 'LeadFlow transformed my business completely. I went from struggling to find clients to having a consistent pipeline of qualified leads every single week.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Homeowner',
      result: 'Sold home in 12 days',
      content: 'I was skeptical at first, but within two weeks I had multiple serious buyers interested in my property. The quality of leads was exceptional.',
      rating: 5,
    },
    {
      name: 'Jennifer Martinez',
      role: 'Real Estate Broker',
      result: '3x increase in monthly closings',
      content: 'The AI-powered system is incredible. It saves me hours every day and brings in better leads than I ever got from traditional marketing.',
      rating: 5,
    },
  ];

  return (
    <section className={`${isDark ? 'bg-gray-900' : 'bg-gray-50'} py-20 transition-colors`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Why Teams Use Systems Like This
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            What this system is designed to improve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-xl'} rounded-xl p-8 shadow-lg transition-all`}
            >
              <Quote className={`w-10 h-10 opacity-20 mb-4 ${isDark ? 'text-orange-500' : 'text-blue-900'}`} />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
              </div>

              <p className={`mb-6 leading-relaxed italic ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                "{testimonial.content}"
              </p>

              <div className={`${isDark ? 'border-gray-700' : 'border-gray-200'} border-t pt-4`}>
                <p className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{testimonial.role}</p>
                <p className="text-sm text-green-500 font-semibold mt-2">
                  {testimonial.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
