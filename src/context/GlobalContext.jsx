/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [historias, setHistorias] = useState([]);
    const [dataHistoria, setDataHistoria] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    async function addHistoria() {
        try {
            const response = await fetch(`https://json-server-tau-blush.vercel.app/historias`, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataHistoria)
            });
            
            if (response.ok) {
                const data = await response.json();
                setHistorias(prevHistorias => [...prevHistorias, data]);
                console.log('Historia añadida:', data);
            } else {
                console.error('Error al añadir la historia');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <GlobalContext.Provider value={{ historias, setHistorias, dataHistoria, setDataHistoria, isOpen, onOpen, onClose, addHistoria }}>
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}
