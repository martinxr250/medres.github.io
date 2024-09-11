import React, {useEffect} from 'react'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palmtree, Utensils, Anchor, Coffee, Star, MapPinned, Facebook, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import ReseñaCard from "@/components/Reseñas";

export default function Component( {
    usuarioEnSesion,
    setToken,
    setUsuarioEnSesion,
    setEstaEnSesion
}) {

    // efecto para persistencia (el F5) de sesion: 
    useEffect(() => {
        const logueado = window.localStorage.getItem("medres")
        if (logueado) {
            const logueadoJSON = JSON.parse(logueado)
            setToken(logueadoJSON.token)
            setUsuarioEnSesion(logueadoJSON)
            setEstaEnSesion(true)
        }
    }, [])

    // {token: "", usuario: ""}
    useEffect(() => {
        console.log("usuario en la pantalla de Inicio: ", usuarioEnSesion)
    }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#f0e5cf] to-[#d9c7a7] text-gray-800">
      <main className="flex-grow">
        <section className="relative h-[100vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/hotel-mediterraneo-perfil.jpg?height=1080&width=1920')" }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <motion.div
            className="relative z-10 text-center text-white max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h2 className="text-5xl font-bold mb-6 leading-tight animate-bounce">Descubre el Hotel Mediterráneo</h2>
            <p className="text-xl mb-8 leading-relaxed">Sumérgete en una experiencia de tranquilidad y confort</p>
            <Link to="/bienvenida">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6 hover:bg-secondary transition-transform transform hover:-translate-y-1">
                Reserva Ahora
              </Button>
            </Link>
          </motion.div>
        </section>

        <section className="py-24 bg-[#D9C7A7]">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl text-primary font-bold text-center mb-16"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Experiencia Hotel Mediterráneo
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { icon: Palmtree, title: "Vistas Panorámicas", description: "Disfrute de las impresionantes vistas en el Hotel Mediterráneo desde la comodidad de su suite." },
                { icon: Utensils, title: "Gastronomía Exquisita", description: "Deleite su paladar con la auténtica cocina de Laboulaye." },
                { icon: Coffee, title: "Tranquilidad y Bienestar", description: "Venga a relájarce en nuestro hotel." },
                { icon: MapPinned, title: "Ubicacion Privilegiada", description: "algo de la ubicacion." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-white border-none shadow-lg hover:shadow-2xl transition-shadow transform">
                    <CardHeader className="text-center">
                      <item.icon className="w-12 h-12 mb-4 text-primary" />
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#F5E8D3]">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold text-center mb-16"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Lo Que Dicen Nuestros Huéspedes
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-primary text-primary animate-pulse" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="text-lg italic mb-4">
                        "Una experiencia inolvidable. El servicio, las instalaciones y la ubicación son inmejorables. Definitivamente volveremos."
                      </blockquote>
                      <p className="font-semibold">- Maximo L.</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-[#555555] text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Hotel Mediterráneo Laboulaye</h3>
              <p className="mb-2">Ruta Nro. 7 </p>
              <p className="mb-2">Laboulaye 6120 Laboulaye Córdoba</p>
              <p className="mb-2">Argentina</p>
              <p className="mb-2">info@mediterraneohotel.com.ar</p>
              <p>Tel: +54 03385 42-1986</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:underline">Eventos</a></li>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.5734279533162!2d-63.39819182427324!3d-34.14474463340439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cf7b326f3cd60f%3A0x472c824b64a3304b!2sHotel%20Mediterraneo!5e1!3m2!1ses-419!2sar!4v1725766153669!5m2!1ses-419!2sar"
                  width="400"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Embed"
                ></iframe>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Síguenos en</h3>
              <div className="flex space-x-4">
                <a href="https://web.facebook.com/hotelmediterraneolaboualye" className="hover:text-secondary transition-colors">
                  <Facebook className="inline-block mr-2" /> Facebook
                </a>
                <a href="https://www.instagram.com/hotelmediterraneolaboulaye/" className="hover:text-secondary transition-colors">
                  <Instagram className="inline-block mr-2" /> Instagram
                </a>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2">Suscribite a nuestras novedades.</h4>
                <form className="flex">
                  <Input type="email" placeholder="Tu email" className="rounded-r-none" />
                  <Button type="submit" className="rounded-l-none">Suscribirse</Button>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
            <p>&copy; 2024 Hotel Mediterráneo.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}