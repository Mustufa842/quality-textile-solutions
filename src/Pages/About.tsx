import { Users, Target, Award, Globe } from "lucide-react";
import Layout from "@/components/Layout";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide world-class textile solutions that exceed client expectations through innovation, quality, and sustainable practices.",
  },
  {
    icon: Award,
    title: "Our Vision",
    description:
      "To be the global leader in textile manufacturing and quality management, setting industry standards for excellence.",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "A dedicated team of 500+ skilled professionals committed to delivering perfection in every product.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Serving clients across 50+ countries with reliable supply chain and timely delivery.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            About Us
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl text-lg">
            Discover the story behind StitchScanTex and our commitment to excellence
            in textile manufacturing.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to revolutionize textile manufacturing,
                  StitchScanTex has grown from a small operation to a leading name in
                  the industry over the past two decades.
                </p>
                <p>
                  Our journey began with a commitment to quality and has evolved into a
                  comprehensive solution provider for textile manufacturers worldwide.
                </p>
                <p>
                  Today, we combine cutting-edge scanning technology with traditional
                  craftsmanship to deliver products that meet the highest international
                  standards.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-card rounded-lg shadow-soft">
                  <div className="text-4xl font-heading font-bold text-accent">2005</div>
                  <div className="text-sm text-muted-foreground mt-2">Established</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg shadow-soft">
                  <div className="text-4xl font-heading font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground mt-2">Employees</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg shadow-soft">
                  <div className="text-4xl font-heading font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground mt-2">Countries</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg shadow-soft">
                  <div className="text-4xl font-heading font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground mt-2">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card p-6 rounded-xl shadow-soft text-center"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
