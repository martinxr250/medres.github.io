import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterComponent from './components/FooterComponent';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Nosotros from './pages/Nosotros';
import Habitaciones from './pages/Habitaciones';
import Servicios from './pages/Servicios';
import Reservas from "./pages/Reservas";
import Bienvenida from "./pages/Bienvenida";
import { API_URL } from "./constants/constants.js";
import WhatsAppButton from "./components/Whatsapp.jsx";

//Cambiar el boton iniciar session por un boton de bienvenida con el nombre del usuario que inicio sesion.
function App() {

  // declarar estados que indican que usuario esta en sesion y si lo esta o no, además de su token de sesión
  //globales.
  const [estaEnSesion, setEstaEnSesion] = useState(false);
  const [usuarioEnSesion, setUsuarioEnSesion] = useState(null);
  const [token, setToken] = useState(null)


  return (
    <div>
      <BrowserRouter>
      <header><Navbar usuarioEnSesion={usuarioEnSesion} setEstaEnSesion={setEstaEnSesion} setUsuarioEnSesion={setUsuarioEnSesion} setToken={setToken}/></header>
        <Routes> 
          <Route path="/" element={<Inicio usuarioEnSesion={usuarioEnSesion} setToken={setToken}  setUsuarioEnSesion={setUsuarioEnSesion} setEstaEnSesion={setEstaEnSesion} />} />
          <Route path="/habitaciones" element={<Habitaciones />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/login" element={<Login setEstaEnSesion={setEstaEnSesion}setToken={setToken} setUsuarioEnSesion={setUsuarioEnSesion} />} />
          <Route path="/reservas" element={<Reservas usuarioEnSesion={usuarioEnSesion} setToken={setToken}  setUsuarioEnSesion={setUsuarioEnSesion} setEstaEnSesion={setEstaEnSesion} />} />
          <Route path="/bienvenida" element={<Bienvenida usuarioEnSesion={usuarioEnSesion} setToken={setToken}  setUsuarioEnSesion={setUsuarioEnSesion} setEstaEnSesion={setEstaEnSesion} />} />
        </Routes>
      </BrowserRouter>
      <WhatsAppButton />

      
    </div>
  );
}

export default App;
