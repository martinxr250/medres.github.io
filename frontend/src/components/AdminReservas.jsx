import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusIcon, EditIcon, TrashIcon } from 'lucide-react';

// Simulated room data
const initialRooms = [
  { id: 1, name: "Habitación Estándar", capacity: 2, price: 100 },
  { id: 2, name: "Suite Junior", capacity: 3, price: 150 },
  { id: 3, name: "Suite Familiar", capacity: 4, price: 200 },
];

export default function AdminView() {
  const [rooms, setRooms] = useState(initialRooms);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditRoom = (room) => {
    setSelectedRoom(room);
    setIsEditing(true);
  };

  const handleDeleteRoom = (roomId) => {
    setRooms(rooms.filter(room => room.id !== roomId));
  };

  const handleSaveRoom = (e) => {
    e.preventDefault();
    if (isEditing) {
      setRooms(rooms.map(room => room.id === selectedRoom.id ? selectedRoom : room));
    } else {
      setRooms([...rooms, { ...selectedRoom, id: rooms.length + 1 }]);
    }
    setSelectedRoom(null);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F0E5CF] p-6">
      <div className="w-full max-w-4xl space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Administración de Habitaciones</h2>
        <Table className="w-full bg-white shadow-md rounded-lg">
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Capacidad</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rooms.map((room) => (
              <TableRow key={room.id}>
                <TableCell>{room.name}</TableCell>
                <TableCell>{room.capacity}</TableCell>
                <TableCell>${room.price}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" onClick={() => handleEditRoom(room)}><EditIcon className="h-4 w-4" /></Button>
                    <Button variant="ghost" onClick={() => handleDeleteRoom(room.id)}><TrashIcon className="h-4 w-4" /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-center">
          <Button onClick={() => { setSelectedRoom({}); setIsEditing(false); }} className="mt-4">
            <PlusIcon className="mr-2 h-4 w-4" /> Agregar Habitación
          </Button>
        </div>
        {selectedRoom && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-center">{isEditing ? 'Editar Habitación' : 'Agregar Habitación'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveRoom} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    value={selectedRoom.name || ''}
                    onChange={(e) => setSelectedRoom({...selectedRoom, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="capacity">Capacidad</Label>
                  <Input
                    id="capacity"
                    type="number"
                    value={selectedRoom.capacity || ''}
                    onChange={(e) => setSelectedRoom({...selectedRoom, capacity: parseInt(e.target.value)})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Precio</Label>
                  <Input
                    id="price"
                    type="number"
                    value={selectedRoom.price || ''}
                    onChange={(e) => setSelectedRoom({...selectedRoom, price: parseInt(e.target.value)})}
                    required
                  />
                </div>
                <div className="flex justify-center">
                  <Button type="submit">{isEditing ? 'Guardar Cambios' : 'Agregar Habitación'}</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
