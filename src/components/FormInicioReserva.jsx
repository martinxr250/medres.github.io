import React from 'react';

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
import { Link } from 'react-router-dom';
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
export default function Component() {
  const form = useForm()
; 

  const onSubmit = (data) => {
    console.log(data);
    // Aquí puedes manejar la lógica de envío del formulario
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="bg-primary text-primary-foreground">
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold text-center">Introducir fechas y ver precios</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6">
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          
            <FormField
              control={form.control}
              name="Adultos"
              rules={{ required: "El campo es requerido", min : {value: 1, message: "Debe ser mayor a 0"}, max : {value: 10, message: "Debe ser menor a 10"} }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adultos</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Adulto" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />       
              <Button type="submit" className="w-full">
                Reservar
              </Button>
          </form>
        </Form>


        







      </CardContent>
    </Card>
  );
}