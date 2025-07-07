import { Card } from '@/components/ui/card';
import { 
  Code, 
  Palette, 
  Video, 
  Search, 
  Share2, 
  Brain,
  ArrowRight 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: ['React & Next.js', 'Full-stack Development', 'API Integration', 'Database Design']
    },
    {
      icon: Palette,
      title: 'Web & Graphic Design',
      description: 'Stunning visual designs that capture your brand essence and engage your audience across all platforms.',
      features: ['UI/UX Design', 'Brand Identity', 'Print Design', 'Logo Creation']
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video production and editing services to tell your story and showcase your brand.',
      features: ['Corporate Videos', 'Social Media Content', 'Motion Graphics', 'Color Grading']
    },
    {
      icon: Search,
      title: 'SEO & Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online visibility and drive targeted traffic.',
      features: ['SEO Optimization', 'PPC Campaigns', 'Content Marketing', 'Analytics & Reporting']
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Strategic social media presence management to build your community and increase engagement.',
      features: ['Content Strategy', 'Community Management', 'Paid Social Ads', 'Influencer Outreach']
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Cutting-edge AI solutions to automate processes and enhance your business capabilities.',
      features: ['Chatbots & Automation', 'AI-Powered Analytics', 'Custom AI Solutions', 'Machine Learning']
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive suite of digital services to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group p-6 hover-lift hover:shadow-card transition-smooth bg-gradient-card border-border/50">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 text-accent mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-border/50">
                <span className="text-accent font-semibold group-hover:text-accent-glow transition-colors cursor-pointer">
                  Learn More →
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;