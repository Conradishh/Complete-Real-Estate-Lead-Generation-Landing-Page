import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TargetAudience from './components/TargetAudience';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { useTheme } from './context/ThemeContext';

function App() {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={`min-h-screen ${isDark ? 'bg-gray-950' : 'bg-white'} transition-colors`}>
        <Navbar />
        <Hero />
        <TrustBar />
        <Features />
        <HowItWorks />
        <TargetAudience />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;