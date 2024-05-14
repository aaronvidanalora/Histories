/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import {  Pencil,  Trash2 } from "lucide-react";

export default function Carta({ id, titulo, fecha, experiencia, imagen }) {
  return (
    <Card isFooterBlurred className="w-full h-[300px] relative">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Viaje a {titulo}</p>
          <h4 className="text-white font-medium text-2xl">{fecha}</h4>
      </CardHeader>
      <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={imagen}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between w-full">
          <div className="w-1/2">
              <p className="text-black text-tiny">{experiencia}</p>
          </div>
          <div className="space-x-2">
              <Button color="warning" variant="ghost" radius="lg" size="sm">
                  <Pencil />
              </Button>
              <Button color="danger" variant="ghost" radius="lg" size="sm">
                  <Trash2 />
              </Button>
          </div>
      </CardFooter>
    </Card>
  );
};
