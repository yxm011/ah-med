import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar, Star } from 'lucide-react';

const educationData = [
  {
    degree: "Doctor of Medicine (M.D.)",
    institution: "Harvard Medical School",
    location: "Boston, MA",
    period: "2021 - 2025",
    gpa: "3.9/4.0",
    honors: ["Dean's List", "Alpha Omega Alpha Honor Society"],
    description: "Focus on Internal Medicine with clinical rotations in cardiology, emergency medicine, and primary care."
  },
  {
    degree: "Bachelor of Science in Biology",
    institution: "Massachusetts Institute of Technology",
    location: "Cambridge, MA",
    period: "2017 - 2021",
    gpa: "3.8/4.0",
    honors: ["Summa Cum Laude", "Phi Beta Kappa"],
    description: "Specialized in molecular biology and biochemistry with research in cardiovascular disease mechanisms."
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
                      <div className="flex items-center gap-2 text-accent font-semibold">
                        <Star className="w-4 h-4" />
                        <span>GPA: {edu.gpa}</span>
                      </div>
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