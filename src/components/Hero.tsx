import { ArrowRight, Play } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PopupButton } from 'react-calendly';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { isDark } = useTheme();
  return (
    <section id="home" className={`${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-white'} py-20 lg:py-28 relative overflow-hidden transition-colors`}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Convert Inquiries Into Real Leads{' '}
              <span className="text-blue-600">Automatically</span>
            </h1>

<p className={`text-lg sm:text-xl tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
  Your leads get contacted within seconds, qualified instantly, and automatically booked directly into your calendar.
</p>

<ul className="hero-bullets">
  <li className={`${isDark ? "text-lg text-gray-300" : "text-lg text-gray-900"}`}>Responds to every lead within seconds via SMS, email, or web</li>
  <li className={`${isDark ? "text-lg text-gray-300" : "text-lg text-gray-900"}`}>Filters serious buyers and sellers</li>
  <li className={`${isDark ? "text-lg text-gray-300" : "text-lg text-gray-900"}`}>Converts inquiries into booked appointments</li>
</ul>

            <div className="flex flex-col sm:flex-row gap-5">
<PopupButton
  url="https://cal.com/conrad-flowvantage/15-minute-demo-flowvantage"
  rootElement={document.getElementById("root") || document.body}
  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all shadow-lg"
  text="Get A Live Demo"
/>

<button
  onClick={() => {
    const el = document.getElementById("how-it-works");
    if (el) {
      const yOffset = -80; // adjust for navbar height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }}
  className={`${isDark ? 'bg-gray-800 hover:bg-gray-700 text-amber-400 border-amber-400' : 'bg-white hover:bg-gray-200 text-amber-600 border-amber-500'} border-2 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all`}
>
  <Play className="w-5 h-5" />
  See How It Works
</button>
            </div>
          </div>

          <div className="relative">
            <div className={`${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-700 shadow-2xl' : 'bg-white border border-gray-300'} rounded-2xl p-8 transition-colors`}>
<div className="chat-card">
  <div className="chat-header">
    <span>AI Lead Assistant</span>
    <span className="response-time">Responded in 8s</span>
  </div>

  <div className="chat-body">
    <div className="msg lead">Hi, I'm looking to buy a home soon.</div>
    <div className="msg ai">Great — are you planning to buy within the next 90 days?</div>
    <div className="msg lead">Yes, within 60 days.</div>
    <div className="msg ai">Perfect. What price range are you targeting?</div>
    <div className="msg lead">$350k–$450k.</div>
    <div className="msg ai">Excellent. I can book you with an agent tomorrow at 2:00 PM or 4:30 PM.</div>
  </div>

  <div className="chat-footer">
    <span className="badge">Qualified Buyer</span>
    <span className="badge">60-Day Timeline</span>
    <span className="badge">Appointment Set</span>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
