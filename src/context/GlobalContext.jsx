import { useState, useContext, createContext } from "react";

import historiasJSON from '../bd.json'

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [historias, setHistorias] = useState(historiasJSON.historias)

    return (
        <GlobalContext.Provider value={{ historias, setHistorias }}>
            {children}
        </GlobalContext.Provider>
    )    
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}