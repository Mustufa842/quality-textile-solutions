import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
<div className="w-[150px] h-[150px] flex items-center justify-center rounded-lg overflow-hidden">
  <img
    src="/favicon4.png"
    alt="StitchScanTex Logo"
    className="max-w-full max-h-full object-contain"
  />
</div>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["About", "Services", "Products", "TQMS"].map((item) => (
                <li key={item}>
                <Link to="/products">

                </Link>
                                <Link to="/Services">
                </Link>
                                <Link to="/TQMS">
                </Link>
                                <Link to="/About">

                </Link>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Quality Inspection</li>
              <li>Fabric Scanning</li>
              <li>Production Management</li>
              <li>Export Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80">
                  Industrial Area, Textile District, Pakistan
                </span>
              </li>

              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-foreground/80">
                  +92 300 1234567
                </span>
              </li>

              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-foreground/80">
                  info@stitchscantex.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} StitchScanTex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
