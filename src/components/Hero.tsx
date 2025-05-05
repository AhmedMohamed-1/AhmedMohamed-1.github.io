
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="pt-28 pb-20 md:pt-32 md:pb-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dotnet/5 to-transparent opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-dotnet/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-dotnet-light/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <p className="text-dotnet font-medium mb-3">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-dotnet to-dotnet-light">
                Ahmed Mohamed
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/80 font-light mb-8">.NET Backend Developer</p>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
              I build robust and scalable web applications with ASP.NET Core MVC.
              Passionate about clean code, problem-solving, and efficient database design.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button 
                size="lg" 
                className="bg-dotnet hover:bg-dotnet-dark text-white"
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-dotnet text-dotnet hover:bg-dotnet/5"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          <a 
            href="#skills" 
            className={cn(
              "inline-flex items-center justify-center w-10 h-10 rounded-full",
              "border border-border mt-16 animate-bounce",
              "text-foreground/60 hover:text-dotnet transition-colors"
            )}
          >
            <ChevronDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
