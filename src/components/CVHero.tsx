import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Download, Linkedin, Github } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const CVHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="relative inline-block mb-8">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto shadow-floating object-cover animate-float"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10"></div>
          </div>
          
          <h1 className={`font-heading text-5xl md:text-6xl font-bold text-foreground mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Dr. Ahmed Asgarov
          </h1>
          
          <p className={`text-xl md:text-2xl text-muted-foreground mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Medical Student
          </p>
          
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Passionate about internal medicine and patient care, with extensive clinical experience 
            and research in cardiovascular health. Committed to advancing healthcare through 
            evidence-based practice and compassionate patient interaction.
          </p>
          
          <div className={`flex flex-wrap justify-center gap-4 mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>ahmed.asgerov03@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+994 51 737 2003</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Baku, AZ</span>
            </div>
          </div>
          
          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Button 
              className="medical-gradient hover:scale-105 transition-transform duration-300"
              asChild
            >
              <a href="/ahmed_v.pdf" download="ahmed_v.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
            <Button variant="outline" className="hover:scale-105 transition-transform duration-300">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" className="hover:scale-105 transition-transform duration-300">
              <Github className="w-4 h-4 mr-2" />
              Research
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVHero;