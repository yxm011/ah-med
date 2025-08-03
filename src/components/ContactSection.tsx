import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from 'lucide-react';

const ContactSection = () => {
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

    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact-section" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Let's connect and discuss opportunities in medicine and research
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className={`floating-card card-gradient p-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in-left stagger-1' : 'opacity-0'}`}>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 medical-gradient rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">ahmed.asgerov03@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">+994 51 737 2003</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 medical-gradient rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Baku, Azerbaijan</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-medium text-foreground mb-4">Connect with me</p>
              <div className="flex gap-3">
                <Button size="sm" className="medical-gradient">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button size="sm" variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  Research
                </Button>
              </div>
            </div>
          </Card>
          
          <Card className={`floating-card card-gradient p-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in-right stagger-2' : 'opacity-0'}`}>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">Professional Interests</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-secondary/50 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Research Collaboration</h4>
                <p className="text-sm text-muted-foreground">
                  Open to collaborating on cardiovascular research projects and clinical studies
                </p>
              </div>
              
              <div className="p-4 bg-secondary/50 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Residency Opportunities</h4>
                <p className="text-sm text-muted-foreground">
                  Seeking Internal Medicine residency positions for 2025
                </p>
              </div>
              
              <div className="p-4 bg-secondary/50 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Mentorship</h4>
                <p className="text-sm text-muted-foreground">
                  Available to mentor pre-med students and share medical school experiences
                </p>
              </div>
            </div>
            
            <Button className="w-full mt-6 medical-gradient">
              <MessageCircle className="w-4 h-4 mr-2" />
              Start a Conversation
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;