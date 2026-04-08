import { useState } from 'react';
import { Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function LeadCaptureForm() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className={`${isDark ? 'bg-gray-900' : 'bg-white'} py-20 transition-colors`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-blue-900 to-blue-800'} rounded-2xl p-8 sm:p-12 shadow-2xl transition-colors`}>
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Start Getting Leads Today
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-blue-100'}`}>
              Join hundreds of successful real estate professionals generating quality leads
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-orange-500 outline-none ${isDark ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-white text-gray-900 placeholder-gray-500'}`}
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-orange-500 outline-none ${isDark ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-white text-gray-900 placeholder-gray-500'}`}
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-orange-500 outline-none ${isDark ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-white text-gray-900 placeholder-gray-500'}`}
                placeholder="(555) 123-4567"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
            >
              Get My Leads
              <Send className="w-5 h-5" />
            </button>

            <p className={`text-sm text-center ${isDark ? 'text-gray-400' : 'text-blue-100'}`}>
              No credit card required. Start seeing results in 48 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
