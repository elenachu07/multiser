import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hermoso paisaje de jardín con rosas y lavanda"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6 animate-fade-up animation-delay-200">
            Transforma Tu Espacio Exterior en un{" "}
            <span className="text-gold">Paraíso Natural</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up animation-delay-400">
            Servicios expertos de paisajismo y cuidado de jardines que traen la belleza 
            de la naturaleza a tu puerta. Más de 15 años creando espacios exteriores impresionantes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-600">
          <Button asChild variant="accent" size="xl">
            <a
              href="https://wa.me/611341597"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consulta Gratuita
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-up animation-delay-800">
            {[
              { value: "500+", label: "Proyectos" },
              { value: "15+", label: "Años" },
              { value: "100%", label: "Satisfacción" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/60 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
