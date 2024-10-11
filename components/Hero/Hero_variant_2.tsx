"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";

// Remplacez la constante averageRating par une variable modifiable
const averageRating = 5; // Vous pouvez facilement modifier cette valeur
const avis = 2;

const ModernHero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Transformez votre espace</span>
              <span className="block text-indigo-600">
                avec notre expertise
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              De l&apos;intérieur à l&apos;extérieur, nous sublimerons chaque
              surface avec notre savoir-faire en peinture professionnelle.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <div>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  <Link href="#contact">Devis gratuit</Link>
                </Button>
              </div>
              <div>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-indigo-600 border-indigo-600 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  <Link
                    href="#services"
                    className="flex items-center justify-center"
                  >
                    Nos services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 relative">
            <div className="relative">
              <div className="aspect-square w-full max-w-[600px] relative overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5">
                <Image
                  className="object-cover"
                  src="/hero.jpg"
                  alt="Peintre professionnel au travail"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-indigo-600 mr-2">
                    {averageRating.toFixed(1)}
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="relative">
                        <FaStar className="h-5 w-5 text-gray-300" />
                        <div
                          className="absolute top-0 left-0 overflow-hidden"
                          style={{
                            width: `${Math.min(
                              100,
                              Math.max(0, (averageRating - i) * 100)
                            )}%`,
                          }}
                        >
                          <FaStar className="h-5 w-5 text-yellow-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {avis} avis clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernHero;
