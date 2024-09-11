import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'; // Asegúrate de que la ruta sea correcta

export default function NotLoggedInView() {
  const handleAlert = () => {
    alert('Debe iniciar sesión para acceder a esta página.');
  };

  return (
    <div
      style={{
        backgroundImage: `url('/hotel-mediterraneo-perfil.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '95vh',
      }}
      className="flex justify-center items-start pt-40 p-4 bg-opacity-85"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="w-full max-w-md mx-auto rounded-lg shadow-lg bg-white bg-opacity-90"
      >
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-red-700">¡Acceso Restringido!</CardTitle>
            <CardDescription className="text-gray-800">Debe iniciar sesión para ver esta página</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center mb-6 text-gray-900 font-semibold">
              Para acceder a las funciones de reserva y administración, por favor inicie sesión en su cuenta.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-4">
              <Link to="/login">
                <Button variant="outline" className="w-full md:w-auto bg-red-700 text-white hover:bg-red-800">Iniciar Sesión</Button>
              </Link>
              <Button onClick={handleAlert} className="w-full md:w-auto bg-red-700 text-white hover:bg-red-800">¿Por qué?</Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}