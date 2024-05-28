import { Button, Checkbox, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, Input } from "@nextui-org/react"; // Importa Input de @nextui-org/react, no de postcss
import Cards from "./componentes/Cards";
import { Calendar, CalendarIcon, Edit2, Link, LockIcon, MailIcon, PencilIcon, PlusCircle } from 'lucide-react';
import { useDisclosure } from "@nextui-org/react";

export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold p-6">Mis historias</h1>
      <div className="flex justify-center items-center"></div>
      <div>
        <Cards />
      </div>
      <div className="p-10 justify-end flex">
        <button
          className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full flex items-center"
          onClick={onOpen} 
        >
          <PlusCircle size={45} />
        </button>
      </div>
      
      <Modal 
  isOpen={isOpen} 
  onOpenChange={onOpenChange}
  placement="top-center"
>
  <ModalContent>
    {(onClose) => (
      <>
        <ModalHeader className="flex flex-col gap-1">Editar Historia "Historia sin título"</ModalHeader>
        <ModalBody>
          <Input
            autoFocus
            endContent={
              <CalendarIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            label="Fecha"
            placeholder="Ejemplo: Marzo de 2024"
            variant="bordered"
          />
          <Input
            endContent={
              <PencilIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            label="Título"
            placeholder="Título de la historia"
            variant="bordered"
          />
          <Textarea
            label="Experiencia"
            placeholder="Describe tu experiencia"
            variant="bordered"
          />
          <Textarea
            label="Comentario"
            placeholder="Escribe comentarios"
            variant="bordered"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="flat" onPress={onClose}>
            Cerrar
          </Button>
          <Button color="success" onPress={onClose}>
            Editar
          </Button>
        </ModalFooter>
      </>
    )}
  </ModalContent>
</Modal>

    </div>
    
  );
}
