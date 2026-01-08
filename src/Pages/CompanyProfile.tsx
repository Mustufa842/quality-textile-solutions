import { Download, Building2, Users, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const highlights = [
  { icon: Building2, label: "Established", value: "2005" },
  { icon: Users, label: "Employees", value: "500+" },
  { icon: Award, label: "Certifications", value: "6+" },
  { icon: Globe, label: "Export Countries", value: "50+" },
];

const CompanyProfile = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Company Profile
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl text-lg">
            Learn more about StitchScanTex - our history, capabilities, and
            commitment to excellence.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-card shadow-soft relative -mt-8 mx-4 lg:mx-auto lg:max-w-5xl rounded-xl z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {highlights.map((item) => (
            <div key={item.label} className="text-center">
              <item.icon className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-heading font-bold text-foreground">
                {item.value}
              </div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              About StitchScanTex
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                StitchScanTex is a leading textile manufacturing and quality management
                company established in 2005. With over two decades of experience, we have
                built a reputation for delivering premium quality textile products to
                clients across the globe.
              </p>
              <p>
                Our state-of-the-art facilities span over 100,000 square feet, equipped
                with the latest machinery and technology. We employ over 500 skilled
                professionals dedicated to maintaining the highest standards of quality
                and craftsmanship.
              </p>
              <p>
                We specialize in a wide range of textile products including woven fabrics,
                knitted textiles, denim, technical textiles, and home textiles. Our Total
                Quality Management System (TQMS) ensures that every product meets
                international quality standards.
              </p>
            </div>

            <div className="mt-12 bg-muted p-8 rounded-xl">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Download Company Profile
              </h3>
              <p className="text-muted-foreground mb-6">
                Get our detailed company profile document with complete information
                about our capabilities, certifications, and product range.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyProfile;
