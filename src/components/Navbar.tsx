import { Menu, X, Leaf, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Servicios" },
    { href: "#about", label: "Nosotros" },
    { href: "#gallery", label: "Galería" },
    { href: "#testimonials", label: "Testimonios" },
    { href: "#contact", label: "Contacto" },
  ];

  const phoneNumber = "+34611341597"; // change if needed
  const telLink = `tel:${phoneNumber}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl md:text-2xl font-semibold text-foreground">
              Multiser
            </span>
          </a>

          {/* Desktop Navigation + Call button */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}

            {/* ✅ CALL BUTTON (Desktop) */}
            <Button asChild className="ml-2">
              <a href={telLink} aria-label="Llamar ahora">
                <Phone className="w-4 h-4 mr-2" />
                Llamar
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              {/* ✅ CALL BUTTON (Mobile dropdown) */}
              <Button asChild className="w-full mt-2">
                <a
                  href={telLink}
                  aria-label="Llamar ahora"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar ahora
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
