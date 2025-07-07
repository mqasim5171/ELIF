import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce solution with advanced features and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Brand Identity Design',
      category: 'Graphic Design',
      description: 'Complete brand redesign including logo, color palette, and marketing materials.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
      technologies: ['Adobe Creative Suite', 'Figma', 'Brand Strategy'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'SaaS Dashboard',
      category: 'UI/UX Design',
      description: 'Intuitive dashboard design for a fintech SaaS application with complex data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      technologies: ['Figma', 'React', 'Chart.js', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI Chatbot Integration',
      category: 'AI Solutions',
      description: 'Custom AI chatbot for customer service automation with natural language processing.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      technologies: ['OpenAI API', 'Python', 'FastAPI', 'React'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Corporate Website',
      category: 'Web Development',
      description: 'Professional corporate website with CMS integration and SEO optimization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'Sanity CMS', 'Vercel', 'SEO'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Social Media Campaign',
      category: 'Digital Marketing',
      description: 'Comprehensive social media strategy resulting in 300% engagement increase.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      technologies: ['Facebook Ads', 'Instagram', 'Analytics', 'Content Strategy'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover-lift transition-smooth bg-gradient-card border-border/50">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-smooth flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button variant="glass" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button variant="glass" size="sm">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-accent text-sm font-semibold">{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;