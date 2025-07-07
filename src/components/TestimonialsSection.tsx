import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612c993?w=400&h=400&fit=crop&crop=face',
      content: 'DigitalCraft transformed our online presence completely. Their web development and SEO expertise helped us increase our leads by 250% in just 6 months.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      content: 'The AI integration they provided revolutionized our customer service. The chatbot handles 80% of inquiries automatically, saving us countless hours.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, CreativeSpace',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      content: 'Their design work is exceptional. The brand identity they created perfectly captures our vision and has received amazing feedback from our clients.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'CTO, InnovateLabs',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      content: 'Professional, reliable, and innovative. They delivered our project on time and exceeded expectations. The code quality is outstanding.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      role: 'E-commerce Manager, StyleHub',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      content: 'Our e-commerce platform performance improved dramatically. Page load times decreased by 60% and conversions increased by 180%.',
      rating: 5
    },
    {
      name: 'James Thompson',
      role: 'Business Owner, LocalBiz',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      content: 'Their social media management strategies helped us build a strong online community. Our engagement rates have never been higher.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover-lift transition-smooth bg-gradient-card border-border/50 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                ))}
              </div>

              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">100+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;