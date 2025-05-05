
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const Skills = () => {
  const skillCategories = [
    {
      name: "Backend Development",
      skills: [
        "ASP.NET Core MVC", 
        "C#", 
        "C++",
        ".NET Framework",
        "Windows Forms",
        "REST APIs",
        "Windows Services"
      ]
    },
    {
      name: "Data & Database",
      skills: [
        "SQL Server", 
        "LINQ",
        "EF Core",
        "T-SQL",
        "Database Design",
        "Data Structures",
        "Algorithms"
      ]
    },
    {
      name: "Development & Tools",
      skills: [
        "Visual Studio", 
        "Git & GitHub", 
        "Problem-Solving",
        "OOP",
        "Postman",
        "JavaScript",
        "HTML5 & CSS"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-dotnet mx-auto"></div>
          <p className="mt-6 text-lg text-foreground/70 max-w-3xl mx-auto">
            With experience in .NET development, I've built a strong foundation
            focused on creating high-performance, scalable backend systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className={cn(
                "border-border hover:border-dotnet/50 transition-all duration-300",
                "animate-fade-up [animation-delay:var(--delay)]"
              )}
              style={{ '--delay': `${index * 150}ms` } as React.CSSProperties}
            >
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-dotnet-light">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-background/80 text-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
