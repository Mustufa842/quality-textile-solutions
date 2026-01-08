import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Factory, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PakistanMap from "@/components/PakistanMap";
import herobg from "@/assests/hero-bg.jpg";
const features = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control at every stage of production.",
  },
  {
    icon: Factory,
    title: "Modern Facilities",
    description: "State-of-the-art machinery and production capabilities.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Efficient processes ensuring timely delivery worldwide.",
  },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Clients Worldwide" },
  { value: "10M+", label: "Units Produced" },
  { value: "50+", label: "Countries Served" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${herobg})` }}
        >
          <div className="absolute inset-0 bg-hero opacity-85" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
              Excellence in{" "}
              <span className="text-gradient">Textile Manufacturing</span>
            </h1>
            <p
              className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              StitchScanTex delivers premium quality textile solutions with cutting-edge
              scanning technology and comprehensive quality management systems.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/20"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card shadow-soft relative -mt-16 mx-4 lg:mx-auto lg:max-w-5xl rounded-xl z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine traditional craftsmanship with modern technology to deliver
              exceptional textile products.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Let's discuss how StitchScanTex can help elevate your textile requirements
            with our comprehensive solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              <Link to="/company-profile">
                Download Company Profile
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Comprehensive Textile Services
              </h2>
              <p className="text-muted-foreground mb-8">
                From fabric scanning to complete quality management, we offer end-to-end
                solutions for your textile manufacturing needs.
              </p>
              <ul className="space-y-4">
                {[
                  "Advanced fabric inspection & scanning",
                  "Complete production management",
                  "Export documentation & logistics",
                  "Quality certification & compliance",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8">
                <Link to="/services">
                  View All Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-strong">
                <img
                  src={herobg}
                  alt="Textile manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-medium">
                <div className="text-3xl font-heading font-bold">100%</div>
                <div className="text-sm">Quality Assured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <PakistanMap />
    </Layout>
  );
};

export default Index;
