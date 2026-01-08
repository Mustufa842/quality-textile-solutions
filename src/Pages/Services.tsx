import { Scan, Settings, Package, Truck, FileCheck, Headphones } from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Scan,
    title: "Fabric Scanning",
    description:
      "Advanced fabric scanning technology to detect defects and ensure quality at every stage of production.",
  },
  {
    icon: Settings,
    title: "Production Management",
    description:
      "End-to-end production management from raw materials to finished products with real-time tracking.",
  },
  {
    icon: FileCheck,
    title: "Quality Inspection",
    description:
      "Comprehensive quality inspection services adhering to international standards and buyer requirements.",
  },
  {
    icon: Package,
    title: "Packaging Solutions",
    description:
      "Custom packaging solutions designed to protect your products during storage and transit.",
  },
  {
    icon: Truck,
    title: "Export & Logistics",
    description:
      "Complete export documentation and logistics management for seamless international delivery.",
  },
  {
    icon: Headphones,
    title: "Consultation",
    description:
      "Expert consultation services to optimize your textile manufacturing processes.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Our Services
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl text-lg">
            Comprehensive textile solutions designed to meet your manufacturing
            and quality management needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
