import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Courses", path: "/courses" },
  { label: "Faculty", path: "/faculty" },
  { label: "Results", path: "/results" },
  { label: "Gallery", path: "/gallery" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-primary">
        <div className="container-main flex items-center justify-between py-2 px-4 text-sm text-primary-foreground/90">
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-primary-foreground transition-colors">
              <Phone className="h-3 w-3" />
              +91 98765 43210
            </a>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">info@cmacacoaching.com</span>
          </div>
          <div className="hidden md:block font-medium">Admissions Open for 2025-26 Batch!</div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-main flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <span className="text-lg font-heading font-bold text-foreground">Pinnacle</span>
            <span className="text-sm block -mt-1 text-muted-foreground font-medium">CMA & CA Academy</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="gold" size="sm" asChild>
            <Link to="/contact">Enroll Now</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Button variant="gold" className="w-full" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>Enroll Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
