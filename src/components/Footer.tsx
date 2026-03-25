import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-main section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <span className="text-lg font-heading font-bold">Pinnacle</span>
                <span className="text-sm block -mt-1 text-primary-foreground/70">CMA Academy</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              India's leading coaching institute for CMA aspirants. Transforming careers since 2010 with expert faculty and proven results.
            </p>
            <div className="flex gap-3 mt-4">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-full bg-primary-foreground/10 hover:bg-secondary/80 flex items-center justify-center transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {[
                { label: "Courses", path: "/courses" },
                { label: "Results", path: "/results" },
                { label: "Blog", path: "/blog" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-secondary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Courses</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {[
                { label: "CMA Foundation", path: "/cma-foundation" },
                { label: "CMA Intermediate", path: "/cma-intermediate" },
                { label: "CMA Final", path: "/cma-final" },
              ].map((c) => (
                <li key={c.path}>
                  <Link to={c.path} className="hover:text-secondary transition-colors">{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                123 Education Lane, Knowledge Park, New Delhi - 110001
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-secondary transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@cmacacoaching.com" className="hover:text-secondary transition-colors">info@cmacacoaching.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-primary-foreground/50">
          <p>© 2025 Pinnacle CMA Academy. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link to="/about" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
