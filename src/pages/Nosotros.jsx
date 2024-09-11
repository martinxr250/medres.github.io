import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Nosotros() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4 space-y-12 max-w-4xl">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Hotel Mediterráneo</h1>
          <p className="text-xl text-muted-foreground">Su hogar lejos de casa en Laboulaye</p>
        </section>

        <Separator className="my-8" />

        <Card className="bg-secondary/50">
          <CardHeader>
            <CardTitle className="text-3xl">Nuestra Historia</CardTitle>
            <CardDescription>Un viaje a través del tiempo</CardDescription>
          </CardHeader>
          <CardContent className="prose dark:prose-invert">
            <p>
              Fundado en 1995, el Hotel Mediterráneo nació de la visión de crear un oasis de hospitalidad 
              que combinara el encanto mediterráneo con la calidez de la pampa argentina. Durante más de 
              dos décadas, hemos sido testigos de innumerables historias, desde celebraciones familiares 
              hasta eventos empresariales de gran envergadura.
            </p>
            <p>
              Nuestra trayectoria está marcada por un compromiso inquebrantable con la excelencia y 
              una dedicación constante a la satisfacción de nuestros huéspedes. Cada rincón de nuestro 
              hotel cuenta una historia de tradición, innovación y hospitalidad genuina.
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="mision" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="mision">Misión</TabsTrigger>
            <TabsTrigger value="vision">Visión</TabsTrigger>
            <TabsTrigger value="valores">Valores</TabsTrigger>
          </TabsList>
          <TabsContent value="mision">
            <Card>
              <CardHeader>
                <CardTitle>Nuestra Misión</CardTitle>
                <CardDescription>El propósito que nos impulsa cada día</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  En el Hotel Mediterráneo, nuestra misión es ofrecer una experiencia de alojamiento excepcional 
                  que combine el confort moderno con la calidez de la hospitalidad tradicional. Nos esforzamos 
                  por crear un ambiente donde cada huésped se sienta como en casa, atendido por un equipo 
                  dedicado y apasionado por el servicio de calidad.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="vision">
            <Card>
              <CardHeader>
                <CardTitle>Nuestra Visión</CardTitle>
                <CardDescription>Hacia dónde nos dirigimos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Aspiramos a ser reconocidos como el hotel de referencia en Laboulaye y la región, destacando 
                  por nuestra calidad de servicio, atención personalizada y compromiso con la comunidad local. 
                  Buscamos ser líderes en innovación hotelera, siempre anticipándonos a las necesidades 
                  cambiantes de nuestros huéspedes y contribuyendo al desarrollo sostenible de nuestra ciudad.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="valores">
            <Card>
              <CardHeader>
                <CardTitle>Nuestros Valores</CardTitle>
                <CardDescription>Los principios que guían nuestras acciones</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Excelencia en el servicio: Nos esforzamos por superar las expectativas en cada interacción.</li>
                  <li>Calidez y hospitalidad: Tratamos a cada huésped como si fuera parte de nuestra familia.</li>
                  <li>Respeto por la cultura local: Celebramos y promovemos las tradiciones y la riqueza cultural de Laboulaye.</li>
                  <li>Sostenibilidad: Nos comprometemos con prácticas responsables que respeten nuestro entorno.</li>
                  <li>Innovación continua: Buscamos constantemente formas de mejorar y evolucionar nuestros servicios.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Nuestro Equipo</CardTitle>
            <CardDescription>El corazón de nuestra hospitalidad</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Dirección y Administración</AccordionTrigger>
                <AccordionContent>
                  Nuestro equipo directivo combina años de experiencia en la industria hotelera con una 
                  visión innovadora, asegurando que el Hotel Mediterráneo se mantenga a la vanguardia 
                  de la hospitalidad en Laboulaye.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Recepción y Atención al Cliente</AccordionTrigger>
                <AccordionContent>
                  La primera sonrisa que recibirá al llegar es la de nuestro equipo de recepción, 
                  siempre dispuesto a hacer de su estancia una experiencia inolvidable, desde el 
                  check-in hasta el check-out.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Housekeeping y Mantenimiento</AccordionTrigger>
                <AccordionContent>
                  Nuestro dedicado equipo de housekeeping y mantenimiento trabaja incansablemente 
                  para asegurar que cada rincón del hotel cumpla con los más altos estándares de 
                  limpieza y funcionalidad.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Restaurante y Servicios de Alimentos</AccordionTrigger>
                <AccordionContent>
                  Desde nuestros talentosos chefs hasta nuestro atento personal de servicio, 
                  el equipo de alimentos y bebidas se esfuerza por ofrecer experiencias 
                  gastronómicas excepcionales que deleiten todos los sentidos.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
