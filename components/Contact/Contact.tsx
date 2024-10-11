import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          Contactez-nous
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Prêt à transformer votre espace ?
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          N&apos;hésitez pas à nous contacter pour toute question concernant nos
          services.
        </p>
      </div>

      <div className="mt-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-extrabold text-gray-900">
            Appelez-nous dès maintenant
          </h3>
          <p className="mt-2 text-3xl font-bold text-indigo-600">
            07 49 36 13 37
          </p>
        </div>

        <Card className="max-w-2xl mx-auto mt-12">
          <CardHeader>
            <CardTitle className="text-center">Nos coordonnées</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                <div>
                  <p className="font-medium">Adresse postale</p>
                  <p className="text-sm text-muted-foreground">
                    5 All. Vital Descos
                    <br />
                    42100 Saint-Étienne
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">
                    mustafovseid@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                <div>
                  <p className="font-medium">Téléphone</p>
                  <p className="text-sm text-muted-foreground">
                    07 49 36 13 37
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
