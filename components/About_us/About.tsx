/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            À propos de nous
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            FNK peintre pro
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Votre partenaire de confiance pour tous vos projets de peinture et
            décoration à Saint-Étienne et ses environs.
          </p>
        </div>

        <div className="mt-10 lg:mt-20 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Notre engagement envers la qualité
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Depuis notre création, nous nous efforçons de fournir des services
              de peinture et de décoration de la plus haute qualité. Notre
              équipe d'artisans qualifiés s'engage à transformer vos espaces
              avec précision et créativité.
            </p>

            <dl className="mt-10 space-y-10">
              <div className="relative">
                <dt>
                  <p className="text-lg leading-6 font-medium text-gray-900">
                    Expertise locale
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Basés à Saint-Étienne, nous connaissons parfaitement les
                  styles architecturaux et les préférences locales.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <p className="text-lg leading-6 font-medium text-gray-900">
                    Matériaux de qualité
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Nous n'utilisons que des peintures et des matériaux de
                  première qualité pour garantir la durabilité de nos travaux.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <p className="text-lg leading-6 font-medium text-gray-900">
                    Satisfaction client
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Notre priorité est votre satisfaction. Nous travaillons en
                  étroite collaboration avec vous pour réaliser votre vision.
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <Image
              className="relative mx-auto rounded-lg shadow-lg"
              width={490}
              height={490}
              src="/engagement.jpg"
              alt="Notre équipe au travail"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
