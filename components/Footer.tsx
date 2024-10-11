import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/#services" className="text-gray-400 hover:text-gray-500">
            Services
          </Link>
          <Link
            href="/#portfolio"
            className="text-gray-400 hover:text-gray-500"
          >
            Portfolio
          </Link>
          <Link href="/#about" className="text-gray-400 hover:text-gray-500">
            À propos
          </Link>
          <Link href="/#contact" className="text-gray-400 hover:text-gray-500">
            Contact
          </Link>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <div className="flex items-center justify-center md:justify-start">
            <p className="text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} Mustafov Seid. Tous droits
              réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
