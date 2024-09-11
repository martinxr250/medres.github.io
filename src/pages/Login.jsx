"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router-dom";

import { userServices } from "../services/usuarios.services.js";

export default function TabsDemo({
    setEstaEnSesion,
    setUsuarioEnSesion,
    setToken
}) {
  const form = useForm();
  const form2 = useForm();

  const [loginError, setLoginError] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const [textoExito, setTextoExito] = useState("")

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    console.log(data);
    const response = await userServices.registerUser(data);
    if (response.error) {
      setRegisterError(true)
      return
    }
    setRegisterError(false)
    setTextoExito("Usuario registrado con éxito")
    form.reset()
  }


  // formulario de login
  const onSubmitLogin = async (data) => {
    console.log(data);

    const response = await userServices.login(data);

    console.log("resultado del logueo: ", response);
    if (response.error) {
      setLoginError(true)
      return
    }
    setLoginError(false)

    // indicar que un usuario ha iniciado sesion, ademas de guardar los datos de ese usuario
    setEstaEnSesion(true);
    setUsuarioEnSesion(response);
    window.localStorage.setItem("medres", JSON.stringify(response));
    setToken(response.token);

    form.reset()
    navigate("/bienvenida")
  }


  return (
    <div className="my-8"> {/* Agrega márgenes arriba y abajo */}
      <Card className="mx-auto max-w-md p-4"> {/* Centra y ajusta el ancho del Card */}
        <Tabs defaultValue="Inicio" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="Registro">Registrarse</TabsTrigger>
            <TabsTrigger value="Inicio">Iniciar Sesión</TabsTrigger>
          </TabsList>
          <TabsContent value="Registro">
            <Card>
              <CardHeader>
                <CardTitle>Regístrate</CardTitle>
                <CardDescription>
                  Ingrese sus datos para crear una cuenta.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="user_name"
                      rules={{ required: "Ingrese un nombre de usuario." }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre de usuario</FormLabel>
                          <FormControl>
                            <Input placeholder="Nombre de usuario" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="correo"
                      rules={{ required: "Ingrese un correo electronico" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo Electronico: </FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Correo Electronico" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="contrasena"
                      rules={{ required: "La contraseña es requerida." }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contraseña</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="nombre"
                      rules={{ required: "Ingrese su nombre." }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder="Nombre" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="apellido"
                      rules={{ required: "Ingrese su apellido." }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Apellido</FormLabel>
                          <FormControl>
                            <Input placeholder="Apellido" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit">Registrarse</Button>
                  </form>

                  {registerError && <p className="text-red-500 bg-red-100 border border-red-400 rounded p-2 mt-4">
                      Ingreso campos incorrectos.
                    </p>}
                  <p>{textoExito}</p>
                </Form>
              </CardContent>
              <CardFooter>
                {/* Puede incluir acciones adicionales aquí si es necesario */}
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="Inicio">
            <Card>
              <CardHeader>
                <CardTitle>Iniciar Sesion</CardTitle>
                <CardDescription>
                  Ingrese usuario y contraseña.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                 <Form {...form2}>
                  <form onSubmit={form2.handleSubmit(onSubmitLogin)} className="space-y-8">
                    <FormField
                      control={form2.control}
                      name="user_name"
                      rules={{ required: "Username is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre de usuario *</FormLabel>
                          <FormControl>
                            <Input placeholder="Nombre de usuario" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form2.control}
                      name="contrasena"
                      rules={{ required: "Password is required", minLength: { value: 5, message: "La contraña debe tener al menos 5 caracteres." }, maxLength: { value: 20, message: "La contraseña debe tener máximo 20 caracteres." } }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contraseña *</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Contaseña" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit">Iniciar Sesión</Button>

                  </form>

                  {loginError && (
                    <p className="text-red-500 bg-red-100 border border-red-400 rounded p-2 mt-4">
                      Ingreso usuario o contraseña incorrectos.
                    </p>
                  )}

                </Form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
