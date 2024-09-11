import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import AdminReservas from '../components/AdminReservas'
import UsuarioReservas from '../components/UsuarioReservas'
import NoLogin from '../components/NoLogin'
import FormInicioReserva from '@/components/FormInicioReserva';

export default function Bienvenida({
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
        console.log("usuario en la pantalla de bienvenida: ", usuarioEnSesion)
    }, [])
  return (
        <>
            {/* if */}
            {usuarioEnSesion ? (
                <>
                    {/* <div>Bienvenido {usuarioEnSesion?.usuario}</div> */}
                    {
                        <>

                            {usuarioEnSesion?.idRol === 2 ? (
                                <div className="bg-[#E8DED1] p-4">
                                    <h1 className="text-3xl font-bold mb-6">Bienvenido, {usuarioEnSesion.usuario} !</h1>
                                    <FormInicioReserva/>
                                </div>
                            ) : (
                                <div>
                                    <AdminReservas/>
                                </div>
                            )}
                        </>
                    }
                </>
                // {/* else */}
            ) : (
                
                <>
                  <NoLogin className="bg-red-500" />
                </>
            )}
        </>
    
  )
}
