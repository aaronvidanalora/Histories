import { Modal } from "@nextui-org/react";
import { PlusCircle } from 'lucide-react';
import Cards from "./componentes/Cards";
import { useGlobalContext } from './context/GlobalContext';
import ModalForm from './componentes/ModalForm';

export default function App() {
    const { isOpen, onOpen, onClose, dataHistoria, setDataHistoria, addHistoria } = useGlobalContext();

    const handleCrearNuevaHistoria = () => {
        setDataHistoria({
            fecha: "Ejemplo: Marzo de 2024",
            titulo: "",
            experiencia: "",
            comentario: "",
            imagen: ""
        });
        onOpen();
    };

    return (
        <div className="relative">
            <div className="text-center mx-auto max-w-7xl">
                <h1 className="text-4xl font-bold p-6">Mis historias</h1>
                <div>
                    <Cards />
                </div>
            </div>
            <div className="fixed bottom-4 right-14">
                <button
                    className="bg-green-700 hover:bg-green-500 text-white font-bold py-4 px-4 rounded-full flex items-center"
                    onClick={handleCrearNuevaHistoria}
                >
                    <PlusCircle size={35} />
                </button>
            </div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onClose}
                placement="top-center"
            >
                <ModalForm onClose={onClose} setDataHistoria={setDataHistoria} dataHistoria={dataHistoria} isCreating={!dataHistoria?.id} addHistoria={addHistoria} />
            </Modal>
        </div>
    );
}
