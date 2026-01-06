import { Check } from "lucide-react";
import gardenerImage from "@/assets/gardener-portrait.jpg";

const highlights = [
  "Más de 15 años de experiencia profesional",
  "Horticultor certificado y diseñador de paisajes",
  "Prácticas ecológicas y sostenibles",
  "Atención personalizada en cada proyecto",
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <img
                src={gardenerImage}
                alt="Jardinero profesional trabajando"
                className="w-full h-auto object-cover aspect-square"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-sm rounded-xl p-4 md:p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-serif font-bold text-lg">15</span>
                  </div>
                  <div>
                    <div className="font-serif font-semibold text-foreground">Años de Excelencia</div>
                    <div className="text-sm text-muted-foreground">Creando jardines hermosos</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
              Apasionados por Crear <span className="text-primary">Jardines Hermosos</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              En Mutiliser, creemos que cada espacio exterior tiene el potencial de convertirse 
              en algo extraordinario. Fundada por Sarah Mitchell, una horticultora certificada 
              con un profundo amor por la naturaleza, hemos estado transformando jardines en toda la región 
              durante más de 15 años.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nuestro enfoque combina la sabiduría tradicional de jardinería con prácticas 
              modernas y sostenibles. Nos tomamos el tiempo para entender tu visión, estilo de vida 
              y las características únicas de tu espacio para crear jardines que sean tanto 
              hermosos como funcionales.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
