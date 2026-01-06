import { Flower2, TreeDeciduous, Scissors, Droplets, Sun, Shovel, Hammer, Paintbrush, Wrench } from "lucide-react";

const services = [
  {
    icon: TreeDeciduous,
    title: "Diseño de Paisajes",
    description: "Diseños de jardines personalizados que complementan la arquitectura de tu hogar y tu estilo personal.",
  },
  {
    icon: Flower2,
    title: "Plantación y Jardineras",
    description: "Jardineras y selección de plantas cuidadosamente curadas para color y belleza durante todo el año.",
  },
  {
    icon: Scissors,
    title: "Mantenimiento de Césped",
    description: "Corte regular, bordeado y cuidado para mantener tu césped exuberante, verde y saludable.",
  },
  {
    icon: Droplets,
    title: "Sistemas de Riego",
    description: "Soluciones de riego inteligentes que conservan agua mientras mantienen tu jardín floreciente.",
  },
  {
    icon: Sun,
    title: "Poda de Arboles",
    description: "Limpieza de primavera, preparación de otoño y plantación estacional para mantener tu jardín en su mejor momento.",
  },
  {
    icon: Shovel,
    title: "Debroces",
    description: "Patios, caminos y muros de contención que añaden estructura y funcionalidad.",
  },
  {
    icon: Hammer,
    title: "Reforma en General",
    description: "Servicios completos de renovación y remodelación para transformar cualquier espacio de tu hogar.",
  },
  {
    icon: Paintbrush,
    title: "Pintura Interior y Exterior",
    description: "Acabados profesionales de pintura que renuevan y protegen tus espacios con colores duraderos.",
  },
  {
    icon: Wrench,
    title: "Soldadura",
    description: "Trabajos de soldadura profesional para estructuras, rejas, puertas y proyectos personalizados.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
            Todo lo que Tu Jardín Necesita
          </h2>
          <p className="text-muted-foreground text-lg">
            Desde el diseño inicial hasta el mantenimiento continuo, proporcionamos servicios 
            integrales de jardinería adaptados a tu espacio único.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 md:p-8 rounded-2xl gradient-card border border-border/50 hover:border-primary/30 hover:shadow-medium transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;