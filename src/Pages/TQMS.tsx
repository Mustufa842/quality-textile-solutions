import { CheckCircle, BarChart3, FileSearch, ClipboardCheck } from "lucide-react";
import Layout from "@/components/Layout";

const tqmsFeatures = [
  {
    icon: FileSearch,
    title: "Inspection Protocols",
    description:
      "Standardized inspection procedures at every production stage to maintain consistent quality.",
  },
  {
    icon: BarChart3,
    title: "Quality Metrics",
    description:
      "Real-time quality metrics and KPIs to track and improve production performance.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Management",
    description:
      "Complete compliance with international quality standards including ISO 9001.",
  },
  {
    icon: CheckCircle,
    title: "Defect Prevention",
    description:
      "Proactive defect prevention strategies to minimize waste and maximize efficiency.",
  },
];

const certifications = [
  "ISO 9001:2015",
  "ISO 14001:2015",
  "OEKO-TEX Standard 100",
  "GOTS Certified",
  "BSCI Compliant",
  "WRAP Certified",
];

const TQMS = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Total Quality Management System
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl text-lg">
            Our comprehensive TQMS ensures excellence at every stage of textile
            manufacturing.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            TQMS Framework
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {tqmsFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-6 bg-card p-6 rounded-xl shadow-soft"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-4">
            Certifications & Standards
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            We maintain the highest international quality and environmental certifications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="bg-card p-4 rounded-lg shadow-soft text-center"
              >
                <span className="font-heading font-semibold text-sm text-foreground">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TQMS;
