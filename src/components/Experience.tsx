
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Building, School, Award, Languages, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const Experience = () => {
  const education = [
    {
      institution: "Pharaohs Academy",
      degree: "Bachelor of Computer Science",
      period: "2023-2027",
      description: "Currently pursuing a degree in Computer Science, focusing on software development and computer engineering principles."
    }
  ];

  const certifications = [
    {
      title: "EF SET English Language Certificate",
      issuer: "EF Standard English Test",
      period: "",
      description: "Achieved level C1 (Advanced) in English language proficiency.",
      link: "https://cert.efset.org/ECg6tW"
    }
  ];
  
  const languages = [
    {
      language: "English",
      level: "C1 (Advanced)"
    },
    {
      language: "Arabic",
      level: "Native"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="h-1 w-20 bg-dotnet mx-auto"></div>
          <p className="mt-6 text-lg text-foreground/70 max-w-3xl mx-auto">
            My academic background and professional qualifications.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-dotnet">
                <School size={24} className="mr-2" /> Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card 
                    key={index}
                    className={cn(
                      "border-l-4 border-l-dotnet animate-fade-up [animation-delay:var(--delay)]"
                    )}
                    style={{ '--delay': `${index * 200}ms` } as React.CSSProperties}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <CardTitle className="text-xl text-dotnet-light">{edu.degree}</CardTitle>
                        <Badge variant="outline" className="w-fit">
                          <Calendar size={14} className="mr-1" />
                          {edu.period}
                        </Badge>
                      </div>
                      <div className="flex items-center text-foreground/70">
                        <Building size={16} className="mr-2" />
                        {edu.institution}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-foreground/80">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-dotnet">
                <Award size={24} className="mr-2" /> Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card 
                    key={index}
                    className={cn(
                      "border-l-4 border-l-dotnet animate-fade-up [animation-delay:var(--delay)]"
                    )}
                    style={{ '--delay': `${index * 200}ms` } as React.CSSProperties}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <CardTitle className="text-xl text-dotnet-light">{cert.title}</CardTitle>
                        {cert.period && (
                          <Badge variant="outline" className="w-fit">
                            <Calendar size={14} className="mr-1" />
                            {cert.period}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center text-foreground/70">
                        <Award size={16} className="mr-2" />
                        {cert.issuer}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-foreground/80">{cert.description}</p>
                      {cert.link && (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center text-dotnet hover:underline"
                        >
                          View Certificate
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Languages Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-dotnet">
                <Languages size={24} className="mr-2" /> Languages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {languages.map((lang, index) => (
                  <Card 
                    key={index}
                    className={cn(
                      "animate-fade-up [animation-delay:var(--delay)]"
                    )}
                    style={{ '--delay': `${index * 200}ms` } as React.CSSProperties}
                  >
                    <CardContent className="flex items-center justify-between p-6">
                      <div className="flex items-center">
                        <Languages size={20} className="mr-3 text-dotnet" />
                        <span className="font-medium">{lang.language}</span>
                      </div>
                      <Badge>{lang.level}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
