import React from 'react';
import { Modal } from "@nextui-org/react";
import { PlusCircle } from 'lucide-react';
import Cards from "./componentes/Cards";
import { useGlobalContext } from './context/GlobalContext';
import ModalForm from './componentes/ModalForm';

export default function App() {
    const { isOpen, onOpen, onClose, dataHistoria, setDataHistoria } = useGlobalContext();

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
                    onClick={() => {
                        setDataHistoria({
                            fecha: "Ejemplo: Marzo de 2024",
                            titulo: "",
                            experiencia: "",
                            comentario: ""
                        });
                        onOpen(); 
                    }} 
                >
                    <PlusCircle size={45} />
                </button>
            </div>
            <Modal 
                isOpen={isOpen} 
                onOpenChange={onClose}
                placement="top-center"
            >
                <ModalForm onClose={onClose} setDataHistoria={setDataHistoria} dataHistoria={dataHistoria} />
            </Modal>
        </div>
    );
}
