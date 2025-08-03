import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Stethoscope, Calendar, MapPin } from 'lucide-react';

const experienceData = [
  {
    title: "Clinical Rotation - Internal Medicine",
    institution: "Massachusetts General Hospital",
    location: "Boston, MA",
    period: "Sep 2024 - Dec 2024",
    description: "Comprehensive clinical experience managing patients with complex medical conditions including cardiovascular disease, diabetes, and respiratory disorders.",
    achievements: [
      "Managed 15+ patients daily during inpatient rotations",
      "Assisted in emergency procedures and critical care",
      "Presented 20+ case studies to attending physicians"
    ]
  },
  {
    title: "Research Assistant",
    institution: "Cardiovascular Research Lab",
    location: "Harvard Medical School",
    period: "Jun 2023 - Aug 2024",
    description: "Conducted research on novel biomarkers for early detection of cardiovascular disease in high-risk populations.",
    achievements: [
      "Co-authored 3 peer-reviewed publications",
      "Analyzed data from 500+ patient samples",
      "Presented findings at American Heart Association conference"
    ]
  },
  {
    title: "Clinical Volunteer",
    institution: "Boston Community Health Center",
    location: "Boston, MA",
    period: "Jan 2022 - May 2023",
    description: "Provided patient care assistance and health education in underserved communities.",
    achievements: [
      "Volunteered 200+ hours in patient care",
      "Conducted health screenings for 100+ patients",
      "Developed patient education materials in Spanish"
    ]
  }
];

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('experience-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience-section" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Clinical Experience</h2>
          <p className="text-lg text-muted-foreground">Hands-on medical training and research</p>
        </div>
        
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <Card
              key={index}
              className={`floating-card card-gradient p-8 transition-all duration-1000 ${
                isVisible ? `animate-fade-in-right stagger-${index + 1}` : 'opacity-0'
              }`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <Stethoscope className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-primary font-medium">{exp.institution}</p>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mt-4 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;