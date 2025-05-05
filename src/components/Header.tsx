
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-dotnet">
              <span className="text-dotnet-dark">&lt;</span>
              <span className="text-dotnet">Ahmed</span>
              <span className="text-dotnet-light">Mohamed</span>
              <span className="text-dotnet-dark">/&gt;</span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-dotnet transition-colors px-1 py-2"
              >
                {item.name}
              </a>
            ))}
            <Button variant="default" className="bg-dotnet hover:bg-dotnet-dark" asChild>
              <a href="public/lovable-uploads/e2e4fba4-55d9-4c8f-a2fe-77c6bde3a99e.png" download="Ahmed_Mohamed_CV.png">
                Resume
              </a>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-dotnet"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button variant="default" className="w-full bg-dotnet hover:bg-dotnet-dark" asChild>
                <a href="public/lovable-uploads/e2e4fba4-55d9-4c8f-a2fe-77c6bde3a99e.png" download="Ahmed_Mohamed_CV.png">
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
