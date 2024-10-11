import { Paintbrush, Home, Building, Droplet } from "lucide-react";

const services = [
  {
    name: "Peinture intérieure",
    description:
      "Transformez vos espaces intérieurs avec nos services de peinture de haute qualité.",
    icon: Home,
  },
  {
    name: "Peinture extérieure",
    description:
      "Protégez et embellissez l'extérieur de votre propriété avec notre expertise.",
    icon: Building,
  },
  {
    name: "Revêtements spéciaux",
    description:
      "Découvrez nos solutions de revêtements spéciaux pour des finitions uniques.",
    icon: Droplet,
  },
  {
    name: "Conseils couleurs",
    description:
      "Bénéficiez de l'expertise de nos conseillers pour choisir les meilleures combinaisons de couleurs.",
    icon: Paintbrush,
  },
];

const Services = () => {
  return (
    <div id="services" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Nos Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Une solution pour chaque projet
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Découvrez notre gamme complète de services de peinture
            professionnelle pour répondre à tous vos besoins.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {services.map((service) => (
              <div key={service.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {service.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {service.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Services;
