import CVHero from '@/components/CVHero';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <CVHero />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Index;