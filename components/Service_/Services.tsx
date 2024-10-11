/* eslint-disable react/no-unescaped-entities */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Paintbrush,
  FileText,
  Home,
  Building,
  PaintBucket,
  Droplets,
} from "lucide-react";

const services = [
  {
    title: "Nettoyage de façade",
    description: "Redonnez de l'éclat à l'extérieur de votre bâtiment",
    icon: Droplets,
  },
  {
    title: "Papier peint",
    description: "Installation experte de papier peint pour tous les styles",
    icon: FileText,
  },
  {
    title: "Peinture décorative",
    description: "Créez une ambiance unique avec nos techniques décoratives",
    icon: Paintbrush,
  },
  {
    title: "Peinture extérieure",
    description: "Protection et esthétique pour vos façades et balcons",
    icon: Building,
  },
  {
    title: "Peinture intérieure",
    description: "Transformez vos espaces intérieurs avec nos couleurs",
    icon: Home,
  },
  {
    title: "Ravalement de façade",
    description: "Rénovation complète de l'aspect extérieur de votre bâtiment",
    icon: PaintBucket,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Nos Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Une gamme complète de services de peinture
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            De l'intérieur à l'extérieur, nous avons l'expertise pour tous vos
            projets de peinture et décoration.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <service.icon className="h-8 w-8 text-indigo-600 mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
