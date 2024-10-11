import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              À propos de notre société
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Depuis plus de 20 ans, notre société de peinture s&apos;engage à
              offrir des services de haute qualité à nos clients. Nous sommes
              fiers de notre expertise, de notre professionnalisme et de notre
              souci du détail dans chaque projet que nous entreprenons.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="#contact"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Contactez-nous
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <Image
              className="rounded-lg shadow-lg"
              src="/aboutus2.jpg"
              alt="Notre équipe au travail"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
