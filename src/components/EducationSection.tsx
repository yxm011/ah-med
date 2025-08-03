import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar, Star } from 'lucide-react';

const educationData = [
  {
    degree: "Faculty of Human Medicine",
    institution: "Azerbaijan Medical University",
    location: "Baku, Azerbaijan",
    period: "2020 - Present",
    gpa: "",
    honors: ["Medical Student"],
    description: "Currently pursuing medical education with focus on comprehensive medical training and clinical practice."
  },
  {
    degree: "High School Diploma",
    institution: "Ordubad City School No. 3",
    location: "Nakhchivan, Azerbaijan",
    period: "2009 - 2020",
    gpa: "",
    honors: ["Graduate"],
    description: "Completed secondary education with strong academic foundation preparing for medical studies."
  }
];

const EducationSection = () => {
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

    const element = document.getElementById('education-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education-section" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-lg text-muted-foreground">Academic journey and achievements</p>
        </div>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className={`floating-card card-gradient p-8 transition-all duration-1000 ${
                isVisible ? `animate-fade-in-left stagger-${index + 1}` : 'opacity-0'
              }`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 medical-gradient rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-primary font-medium">{edu.institution}</p>
                      <p className="text-muted-foreground">{edu.location}</p>
                    </div>
                    
                    <div className="text-right mt-4 md:mt-0">
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center gap-2 text-accent font-semibold">
                          <Star className="w-4 h-4" />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {edu.honors.map((honor, honorIndex) => (
                      <span
                        key={honorIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {honor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;