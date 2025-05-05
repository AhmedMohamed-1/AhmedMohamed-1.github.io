
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-lg font-semibold text-dotnet">
              <span className="text-dotnet-dark">&lt;</span>
              <span className="text-dotnet">Ahmed</span>
              <span className="text-dotnet-light">Mohamed</span>
              <span className="text-dotnet-dark">/&gt;</span>
            </span>
          </div>
          
          <div className="text-center md:text-left text-foreground/70 mb-4 md:mb-0">
            <p>ASP.NET Core MVC Backend Developer | Building robust web solutions</p>
          </div>
          
          <button
            onClick={scrollToTop}
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center",
              "bg-dotnet text-white hover:bg-dotnet-dark",
              "transition-colors duration-300"
            )}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-border mt-6 pt-6 text-center text-foreground/60">
          <p>© {new Date().getFullYear()} Ahmed Mohamed. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
