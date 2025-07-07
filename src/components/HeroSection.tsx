import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-accent mr-2" />
            <span className="text-accent font-semibold">Digital Excellence Delivered</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Transform Your</span>
            <br />
            <span className="text-foreground">Digital Presence</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We craft exceptional digital experiences through cutting-edge web development, 
            stunning design, and innovative AI solutions. Let's bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg">
              View Our Work
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-slide-up">
          {[
            { number: '50+', label: 'Happy Clients' },
            { number: '100+', label: 'Projects Completed' },
            { number: '5+', label: 'Years Experience' },
            { number: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;