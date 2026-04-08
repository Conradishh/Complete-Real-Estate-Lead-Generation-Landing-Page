import { Home as HomeIcon, Briefcase, CheckCircle, UserCheck, Users, } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Profiler } from 'react';

export default function TargetAudience() {
  const { isDark } = useTheme();

  return (
    <section
  id="target-audience"
  className={`${isDark ? 'bg-gray-800' : 'bg-white border-gray-200'} py-20 transition-colors`}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Built for Real Estate Professionals
          </h2>
          <p className={`text-lg max-w-2x2 mx-auto ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
            Whether you’re a solo agent or a growing team, every lead gets qualified, handled instantly, and booked automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`${isDark ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-amber-500 hover:shadow-amber-900/50' : 'bg-white border-amber-400 hover:shadow-2xl'} border-2 rounded-2xl p-10 shadow-lg transition-all`}>
            <div className={`${isDark ? 'bg-amber-600' : 'bg-amber-500'} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
              <UserCheck className={`${isDark ?"w-8 h-8 text-amber-100" : "w-8 h-8 text-amber-100"}`} />
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              For Solo Agents
            </h3>
            <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Stay responsive without being glued to your phone.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Every lead gets handled, even when you’re unavailable</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Leads are contacted instantly — no delays or missed opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Spend more time closing, less time chasing cold leads</span>
              </li>
            </ul>
          </div>

          <div className={`${isDark ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-blue-500 hover:shadow-blue-900/50' : 'bg-white border-blue-400 hover:shadow-2xl'} border-2 rounded-2xl p-10 shadow-lg transition-all`}>
            <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Users className={`${isDark ?"w-8 h-8 text-blue-100" : "w-8 h-8 text-blue-100"}`} />
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              For Real Estate Teams / Brokerages
            </h3>
            <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Create consistency across every agent and every lead.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Eliminate missed leads across your entire team</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Route and qualify prospects before agents ever reach out</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Build a more predictable pipeline of booked appointments</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
