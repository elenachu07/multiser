import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Propietaria",
    content: "Multiser transformó nuestro patio trasero en un paraíso absoluto. Sarah entendió exactamente lo que queríamos y superó nuestras expectativas. La atención al detalle es extraordinaria.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Administrador de Propiedades",
    content: "Llevamos tres años trabajando con Multiser. Su servicio de mantenimiento mantiene todas nuestras propiedades impecables. Profesionales, confiables y siempre puntuales.",
    rating: 5,
  },
  {
    name: "Elena Martínez",
    role: "Dueña de Restaurante",
    content: "El área de comedor exterior que diseñaron se ha convertido en nuestro espacio más solicitado. Los clientes constantemente elogian el hermoso ambiente del jardín. La mejor inversión que hemos hecho.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-muted-foreground text-lg">
            No solo confíes en nuestra palabra — escucha a los propietarios y 
            empresas con los que hemos tenido el placer de trabajar.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-background rounded-2xl p-6 md:p-8 shadow-soft border border-border/50 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-serif font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
