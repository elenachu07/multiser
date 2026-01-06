import { Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-semibold text-primary-foreground">
              Multiser
            </span>
          </a>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/70">
            <a href="#services" className="hover:text-primary-foreground transition-colors">
              Servicios
            </a>
            <a href="#about" className="hover:text-primary-foreground transition-colors">
              Nosotros
            </a>
            <a href="#gallery" className="hover:text-primary-foreground transition-colors">
              Galería
            </a>
            <a href="#testimonials" className="hover:text-primary-foreground transition-colors">
              Testimonios
            </a>
            <a href="#contact" className="hover:text-primary-foreground transition-colors">
              Contacto
            </a>
          </div>

          {/* Copyright */}
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Multiser. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
