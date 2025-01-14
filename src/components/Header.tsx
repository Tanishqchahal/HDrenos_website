import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-sm shadow-lg' 
          : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo section */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="RenovatePro Logo" 
              className="h-20 w-auto object-contain" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {['Home', 'About Us', 'Services', 'Portfolio', 'Testimonials', 'Contact Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white text-base font-medium hover:text-[#ff0022] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <button className="bg-[#ff0022] text-white px-8 py-3 rounded-md hover:bg-[#cc001b] transition-all duration-200 font-medium text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Get a Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-black/95 backdrop-blur-sm shadow-lg">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Testimonials', 'Contact Us'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-white hover:text-[#ff0022] px-4 py-3 transition-colors text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="px-3 py-3">
                <button
                  className="w-full text-center bg-[#ff0022] text-white px-8 py-3 rounded-md hover:bg-[#cc001b] transition-all duration-200 font-medium text-base shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;