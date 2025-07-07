import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">DigitalCraft</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming digital experiences through innovative web development, 
              stunning design, and cutting-edge AI solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Web Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Web Design</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Graphic Design</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Video Editing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">SEO & Marketing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">AI Integration</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} DigitalCraft. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Crafted with ❤️ by our amazing team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;