import { useState, useContext, createContext } from "react";
import historiasJSON from '../bd.json';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [historias, setHistorias] = useState(historiasJSON.historias);
    const [dataHistoria, setDataHistoria] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    return (
        <GlobalContext.Provider value={{ historias, setHistorias, dataHistoria, setDataHistoria, isOpen, onOpen, onClose }}>
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}
