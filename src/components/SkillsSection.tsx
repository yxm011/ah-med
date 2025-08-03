import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Brain, Users, Languages } from 'lucide-react';

const skillsData = {
  clinical: [
    "Patient Assessment",
    "Medical History Taking",
    "Physical Examination",
    "Diagnostic Interpretation",
    "Treatment Planning",
    "Emergency Medicine",
    "Cardiology",
    "Internal Medicine"
  ],
  technical: [
    "Electronic Health Records (EHR)",
    "Medical Imaging Analysis",
    "Laboratory Analysis",
    "Research Methodology",
    "Statistical Analysis (R, SPSS)",
    "Data Visualization",
    "Literature Review",
    "Clinical Research",
    "MS Word",
    "MS PowerPoint",
    "MS Excel"
  ],
  interpersonal: [
    "Patient Communication",
    "Multidisciplinary Collaboration",
    "Cultural Sensitivity",
    "Empathy & Compassion",
    "Leadership",
    "Teaching & Mentoring",
    "Conflict Resolution",
    "Public Speaking"
  ],
  languages: [
    "Azerbaijani - Native",
    "German - C1",
    "English - B2",
    "Turkish - B2"
  ]
};

const skillCategories = [
  {
    title: "Clinical Skills",
    icon: Activity,
    skills: skillsData.clinical,
    color: "bg-gradient-primary"
  },
  {
    title: "Technical Skills",
    icon: Brain,
    skills: skillsData.technical,
    color: "bg-gradient-secondary"
  },
  {
    title: "Interpersonal Skills",
    icon: Users,
    skills: skillsData.interpersonal,
    color: "medical-gradient"
  },
  {
    title: "Language Skills",
    icon: Languages,
    skills: skillsData.languages,
    color: "bg-gradient-primary"
  }
];

const SkillsSection = () => {
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

    const element = document.getElementById('skills-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills-section" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Skills & Competencies</h2>
          <p className="text-lg text-muted-foreground">Comprehensive medical and professional capabilities</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className={`floating-card card-gradient p-8 transition-all duration-1000 ${
                  isVisible ? `animate-fade-in-up stagger-${index + 1}` : 'opacity-0'
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="hover:scale-105 transition-transform duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;