import { Card, CardFooter, Image } from "@nextui-org/react";
import { Edit, Trash } from "lucide-react";

const Carta = ({ historia }) => {
  const { titulo, fecha, experiencia, comentario, imagen } = historia;

  return (
    <div className="card-wrapper">
      <Card isFooterBlurred radius="sm" className="border-none">
        <Image
          alt={titulo}
          className="object-cover h-64 w-full" // Establecer un alto fijo y ocupar el ancho completo
          src={imagen}
        />
        <CardFooter className="flex flex-col gap-2 p-4">
          <div>
            <h2 className="text-lg font-semibold">{titulo}</h2>
            <p className="text-sm">{experiencia}</p>
            <p className="text-xs text-gray-500">{comentario}</p>
            <p className="text-xs text-gray-500">{fecha}</p>
          </div>
          <div className="flex items-center gap-2">
            <Edit className="text-yellow-500 w-6 h-6" />
            <Trash className="text-red-500 w-6 h-6" />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Carta;
