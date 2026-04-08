import { Home, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`${isDark ? 'bg-gray-950 text-gray-400' : 'bg-gray-900 text-gray-300'} py-16 transition-colors`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Home className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">FlowVantage</span>
            </div>
            <p className="text-sm leading-relaxed">
              Helping real estate professionals respond to, qualify, and book every lead automatically.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-orange=-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-orange-500 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-orange-500 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-500 transition-colors">
                  
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="text-sm">conrad@flowvantageai.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500" />
                <span className="text-sm">(207) 323-4363</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="w-0 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="w-0 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin className="w-0 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Instagram className="w-0 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className={`${isDark ? 'border-gray-800' : 'border-gray-800'} border-t pt-8 text-center text-sm`}>
          <p>&copy; 2026 FlowVantage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
