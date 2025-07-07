import { Card } from '@/components/ui/card';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes that drive your business forward.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay ahead of trends and use cutting-edge technologies to give you an edge.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships with our clients.'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'We maintain the highest standards in every project we deliver.'
    }
  ];

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Happy Clients' },
    { number: '100+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-gradient">DigitalCraft</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're a passionate team of digital experts dedicated to helping businesses thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Crafting Digital Excellence Since 2019
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between innovative technology and business success, 
              DigitalCraft has grown into a trusted partner for companies looking to make their mark in the digital world.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our multidisciplinary team combines expertise in web development, design, marketing, and AI to deliver 
              comprehensive solutions that not only look great but drive real business results.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From startups to established enterprises, we've helped over 50 clients transform their digital presence 
              and achieve their business goals through our innovative approach and commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-card border-border/50 hover-lift transition-smooth">
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover-lift transition-smooth bg-gradient-card border-border/50 group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">
            Our <span className="text-gradient">Mission</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To empower businesses with innovative digital solutions that drive growth, enhance user experiences, 
            and create lasting value. We believe that great design and cutting-edge technology should be accessible 
            to businesses of all sizes, and we're committed to making that a reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;