
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const projects = [
    {
      title: "Tic Tac Toe Game",
      description: "A simple Tic Tac Toe game using C# and WinForms, featuring a graphical user interface with PictureBoxes for player moves. The game includes functionality for detecting wins, losses, and draws, and allows players to reset and start a new game.",
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=800&q=80",
      tags: ["C#", ".NET Windows Forms", "Visual Studio", "GitHub"],
      github: "https://github.com/AhmedMohamed-1/Tic-Tac-Toe-Game",
      live: "",
    },
    {
      title: "ClsString Library",
      description: "A C++ library offering a comprehensive set of string manipulation functions, including operations for counting letters, changing case, and reversing strings. Designed for efficient string handling and ease of use in C++ applications.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
      tags: ["C++", "Visual Studio", "GitHub"],
      github: "https://github.com/AhmedMohamed-1/String-Library",
      live: "",
    },
    {
      title: "Math Game",
      description: "A C++ math game with multiple difficulty levels and tracking for wins, losses, and draws. Includes a record page to track player performance and progress over time.",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
      tags: ["C++", "Visual Studio", "GitHub"],
      github: "https://github.com/AhmedMohamed-1/Math-Game",
      live: "",
    }
  ];

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));
  
  const filteredProjects = filter
    ? projects.filter(p => p.tags.includes(filter))
    : projects;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-dotnet mx-auto"></div>
          <p className="mt-6 text-lg text-foreground/70 max-w-3xl mx-auto">
            Explore some of my recent work showcasing my skills in C#, C++ and software development.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button
            variant={filter === null ? "default" : "outline"}
            className={filter === null ? "bg-dotnet hover:bg-dotnet-dark" : ""}
            onClick={() => setFilter(null)}
          >
            All
          </Button>
          
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              className={filter === tag ? "bg-dotnet hover:bg-dotnet-dark" : ""}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className={cn(
                "overflow-hidden border-border hover:border-dotnet/50 transition-all duration-300",
                "animate-fade-up [animation-delay:var(--delay)]"
              )}
              style={{ '--delay': `${index * 150}ms` } as React.CSSProperties}
            >
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="bg-dotnet/10 text-dotnet hover:bg-dotnet/20 cursor-pointer"
                      onClick={() => setFilter(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-foreground/70 text-base line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardContent>
              
              <CardFooter className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                {project.live && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
