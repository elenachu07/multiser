import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "611 34 15 97 - 722 64 32 00",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "info@multiser.es",
    href: "mailto:info@multiser.com",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Porto Lagos 11 bajo A Alcorcón",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun-Dom: 8AM - 8PM",
    href: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const res = await fetch("https://formspree.io/f/xpqqaozj", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });
  
      if (res.ok) {
        toast.success("¡Gracias por tu mensaje! Te contactaremos pronto.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("No se pudo enviar el mensaje. Inténtalo de nuevo.");
      }
    } catch (error) {
      toast.error("Error de conexión. Inténtalo de nuevo.");
    }
  };
  

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <div>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Contáctanos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
              ¿Listo para Comenzar Tu <span className="text-primary">Proyecto de Jardín?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Ya sea que sueñes con una transformación completa de tu jardín o necesites 
              mantenimiento regular, nos encantaría saber de ti. Contáctanos para una 
              consulta gratuita.
            </p>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {item.label}
                    </div>
                    <div className="font-medium text-foreground">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-muted/30 rounded-2xl p-6 md:p-8 border border-border/50">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Envíanos un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Tu Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                  placeholder="Juan Pérez"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    placeholder="juan@ejemplo.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    placeholder="+34 123 45 67 89"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-foreground"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Enviar Mensaje
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
