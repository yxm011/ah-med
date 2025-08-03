import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Stethoscope, Calendar, MapPin } from 'lucide-react';

const experienceData = [
  {
    title: "Plastic Surgery Internship",
    institution: "Waldkrankenhaus Bonn",
    location: "Bonn, Germany",
    period: "Jul 2025 - Aug 2025",
    description: "International plastic surgery internship gaining comprehensive experience in reconstructive and aesthetic surgical procedures.",
    achievements: [
      "Conducted patient visits and assessments",
      "Assisted in pre-operative patient preparation",
      "Participated in post-operative patient care and monitoring",
      "Observed and assisted in various plastic surgery procedures"
    ]
  },
  {
    title: "Anesthesia Internship",
    institution: "Baku Medika Hospital",
    location: "Baku, Azerbaijan",
    period: "From Sep 2024",
    description: "Currently gaining hands-on experience in anesthesia procedures and perioperative patient care in a modern medical facility.",
    achievements: [
      "Learning advanced anesthesia techniques and protocols",
      "Assisting in pre-operative patient assessments",
      "Gaining experience in operating room procedures"
    ]
  },
  {
    title: "Surgical Assistant",
    institution: "Baku UNIKLINIKA",
    location: "Baku, Azerbaijan",
    period: "Jul 2023 - Sep 2023, Jul 2024 - Sep 2024",
    description: "Provided surgical assistance in various procedures while gaining valuable experience in surgical techniques and patient care.",
    achievements: [
      "Assisted in multiple surgical procedures",
      "Maintained sterile environment and surgical protocols",
      "Supported surgical team in pre and post-operative care"
    ]
  },
  {
    title: "ICU Intern & Surgical Assistant",
    institution: "Baku Medical Plaza",
    location: "Baku, Azerbaijan",
    period: "Jun 2022 - Aug 2022",
    description: "Dual role providing critical care support in the Intensive Care Unit and surgical assistance in operating rooms.",
    achievements: [
      "Monitored critical patients in ICU setting",
      "Assisted in emergency surgical procedures",
      "Gained experience in patient monitoring and critical care protocols"
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