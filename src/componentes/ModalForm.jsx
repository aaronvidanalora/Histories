/* eslint-disable react/prop-types */
import { ModalContent, ModalHeader, ModalBody, ModalFooter, Textarea, Input, Button } from "@nextui-org/react";
import { CalendarIcon, PencilIcon } from 'lucide-react';
import { useGlobalContext } from "../context/GlobalContext";

export function ModalForm({ onClose, setDataHistoria, dataHistoria, isCreating, addHistoria }) {
    const { setHistorias } = useGlobalContext();

    const controladorNuevaHistoria = async () => {
        console.log('Nueva historia creada:', dataHistoria);
        await handleNuevaHistoria();
    }

    const controladorActualizarHistoria = async () => {
        console.log('Actualizando historia:', dataHistoria);
        await actualizarHistoria(dataHistoria);
    }

    const controladorFormHistoria = (campo, valor) => {
        setDataHistoria(prevState => ({
            ...prevState,
            [campo]: valor
        }));
    }

    const leerHistorias = async () => {
        try {
            const response = await fetch('https://json-server-tau-blush.vercel.app/historias', { method: 'GET' });
            const data = await response.json();
            
            console.log(data); 

            if (Array.isArray(data)) {
                console.log('historias', data);
                setHistorias(data);
            } else {
                console.error('Data is not an array:', data)
            }
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    async function actualizarHistoria(dataHistoria) {
        console.log(`ID: ${dataHistoria.id}`);

        try {
            const response = await fetch(`https://json-server-tau-blush.vercel.app/historias/${dataHistoria.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataHistoria)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Información de la historia actualizada:', data);
                await leerHistorias();
                onClose();
            } else {
                console.error('Error al actualizar la historia');
            }
        } catch (error) {
            console.error('Error actualizando la historia:', error);
        }
    }

    const handleNuevaHistoria = async () => {
        await addHistoria();
        await leerHistorias();
        onClose();
    }

    return (
        <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
                Editar Historia "{dataHistoria?.titulo || 'Historia sin título'}"
            </ModalHeader>
            <ModalBody>
                <Input
                    autoFocus
                    endContent={
                        <CalendarIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Fecha"
                    placeholder="Ejemplo: Marzo de 2024"
                    variant="bordered"
                    value={dataHistoria?.fecha || ''}
                    onChange={(e) => controladorFormHistoria('fecha', e.target.value)}
                />
                <Input
                    endContent={
                        <PencilIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Título"
                    placeholder="Título de la historia"
                    variant="bordered"
                    value={dataHistoria?.titulo || ''}
                    onChange={(e) => controladorFormHistoria('titulo', e.target.value)}
                />
                <Textarea
                    label="Experiencia"
                    placeholder="Describe tu experiencia"
                    variant="bordered"
                    value={dataHistoria?.experiencia || ''}
                    onChange={(e) => controladorFormHistoria('experiencia', e.target.value)}
                />
                <Textarea
                    label="Comentario"
                    placeholder="Escribe comentarios"
                    variant="bordered"
                    value={dataHistoria?.comentario || ''}
                    onChange={(e) => controladorFormHistoria('comentario', e.target.value)}
                />
                <Input
                    label="Imagen"
                    placeholder="Url de la imagen"
                    variant="bordered"
                    value={dataHistoria?.imagen || ''}
                    onChange={(e) => controladorFormHistoria('imagen', e.target.value)}
                />
            </ModalBody>
            <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                    Cerrar
                </Button>
                <Button color={isCreating ? "primary" : "success"} onPress={isCreating ? controladorNuevaHistoria : controladorActualizarHistoria}>
                    {isCreating ? 'Crear' : 'Actualizar'} Historia
                </Button>
            </ModalFooter>
        </ModalContent>
    );
}

export default ModalForm;
