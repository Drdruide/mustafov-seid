import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroVariant3 = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Peinture professionnelle</span>{" "}
                <span className="block text-indigo-600">
                  pour votre intérieur et extérieur
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Transformez votre espace avec notre expertise en peinture.
                Qualité, précision et satisfaction garantie.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Button asChild size="lg" className="mr-4">
                  <Link href="#contact">Obtenir un devis</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#services">Nos services</Link>
                </Button>
              </div>
            </div>
          </main>
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:flex sm:justify-center lg:justify-start">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {[
                  "Devis gratuit",
                  "Garantie qualité",
                  "Équipe experte",
                  "Travail soigné",
                ].map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="flex items-center justify-center text-sm font-medium"
                  >
                    <CheckCircle className="mr-1.5 h-4 w-4 text-green-500" />
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center lg:justify-start">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-5 w-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <span className="ml-2 text-sm font-medium text-gray-500">
              4.9 sur 5 - Basé sur 150 avis clients
            </span>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/hero_variant_1.jpg"
          alt="Peintre professionnel au travail"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default HeroVariant3;
