/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Pencil, Trash2 } from "lucide-react";
import { useGlobalContext } from "../context/GlobalContext";

export default function Carta({ id, titulo, fecha, experiencia, comentario, imagen }) {
    const { setDataHistoria, onOpen, setHistorias, historias } = useGlobalContext();

    function controladorEditarHistoria() {
        const editar = {
            id,
            titulo,
            fecha,
            experiencia,
            comentario,
            imagen
        };

        setDataHistoria(editar);
        onOpen();
    }

    async function controladorBorrarHistoria(id) {
        console.log("Borrar historia con id :", id);

        try {
            const response = await fetch(`https://json-server-tau-blush.vercel.app/historias/${id}`, { method: 'DELETE' });
            
            if (response.ok) {
                setHistorias(historias.filter(historia => historia.id !== id));
            } else {
                console.error('Error al borrar la historia');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

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
                    <Button color="warning" variant="ghost" radius="lg" size="sm" onClick={controladorEditarHistoria}>
                        <Pencil />
                    </Button>
                    <Button color="danger" variant="ghost" radius="lg" size="sm" onClick={() => controladorBorrarHistoria(id)}>
                        <Trash2 />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
