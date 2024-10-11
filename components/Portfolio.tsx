import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const portfolioItems = [
  {
    title: "Décoration d'intérieur",
    description:
      "Transformation élégante d'un salon contemporain à Saint-Étienne",
    imageUrl: "/decoration.jpg",
  },
  {
    title: "Ravalement de façade",
    description:
      "Rénovation complète de la façade d'un immeuble ancien à Saint-Étienne",
    imageUrl: "/ravalement.jpg",
  },
  {
    title: "Rénovation de cuisine",
    description: "Modernisation complète d'une cuisine familiale",
    imageUrl: "/renov.jpg",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Nos Réalisations
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Portfolio de nos travaux
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Découvrez quelques-uns de nos projets récents et laissez-vous
            inspirer pour votre prochain chantier.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
