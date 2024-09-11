import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { BedSingle, User, Menu, X, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";

export default function Component({
  usuarioEnSesion,
  setEstaEnSesion,
  setUsuarioEnSesion,
  setToken
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuAnimation = useSpring({
    transform: isMenuOpen ? "translateY(0%)" : "translateY(-100%)",
    opacity: isMenuOpen ? 1 : 0,
  });

  return (
    <div className="mt-0">
      <header className="bg-[#555555] text-primary-foreground py-2 shadow-md mb-0">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo del hotel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <BedSingle className="h-10 w-10" />
              <h1 className="text-2xl font-bold tracking-tight">Hotel Mediterráneo</h1>
            </motion.div>

            {/* Menú de navegación para pantallas grandes */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex space-x-4 ml-auto"
            >
              <Link to="/">
                <Button variant="ghost">Inicio</Button>
              </Link>
              <Link to="/habitaciones">
                <Button variant="ghost">Habitaciones</Button>
              </Link>
              <Link to="/servicios">
                <Button variant="ghost">Servicios</Button>
              </Link>
              <Link to="/nosotros">
                <Button variant="ghost">Nosotros</Button>
              </Link>
              {/* Menú de usuario */}
              {!usuarioEnSesion ? (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant="secondary" className="ml-4">
                      <User className="mr-2 h-4 w-4" />
                      Iniciar Sesión
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>
                      <Link to="/login">Iniciar Sesión</Link>
                    </DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Link to="/register">Registrarse</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant="secondary" className="ml-4">
                      <User className="mr-2 h-4 w-4" />
                      {usuarioEnSesion?.usuario?.toUpperCase()}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link to="/">
                        <Button
                          variant="secondary"
                          className="ml-4"
                          onClick={() => {
                            setUsuarioEnSesion(null);
                            setToken(null);
                            setEstaEnSesion(false);
                            window.localStorage.removeItem("medres");
                          }}
                        >
                          <User />
                          Cerrar Sesión
                        </Button>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </motion.div>

            {/* Menú para pantallas pequeñas (Responsive) */}
            <div className="flex md:hidden space-x-4 ml-auto">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Menú desplegable en pantallas pequeñas */}
        {isMenuOpen && (
          <animated.div style={menuAnimation} className="md:hidden bg-[#555555] text-primary-foreground py-3 transition duration-300 ease-in-out">
            <div className="container mx-auto px-4">
              {/* Opciones de navegación */}
              <nav className="flex flex-col space-y-4">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full text-left">Inicio</Button>
                </Link>
                <Link to="/habitaciones" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full text-left">Habitaciones</Button>
                </Link>
                <Link to="/servicios" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full text-left">Servicios</Button>
                </Link>
                <Link to="/nosotros" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full text-left">Nosotros</Button>
                </Link>

                {/* Separador */}
                <hr className="border-gray-300 my-4" />

                {/* Opciones de sesión */}
                {!usuarioEnSesion ? (
                  <>
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" className="w-full text-left">Iniciar Sesión</Button>
                    </Link>
                    <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" className="w-full text-left">Registrarse</Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Button
                      variant="ghost"
                      className="w-full text-left"
                      onClick={() => {
                        setUsuarioEnSesion(null);
                        setToken(null);
                        setEstaEnSesion(false);
                        window.localStorage.removeItem("medres");
                        setIsMenuOpen(false);
                      }}
                    >
                      <User />
                      Cerrar Sesión
                    </Button>
                  </>
                )}
              </nav>
            </div>
          </animated.div>
        )}
      </header>
    </div>
  );
}