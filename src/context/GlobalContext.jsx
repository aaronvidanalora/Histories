/* eslint-disable react/prop-types */
import  { createContext, useState } from 'react';

// Crear el context global
export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [historias, setHistorias] = useState([]);

  return (
    <GlobalContext.Provider value={{ historias, setHistorias }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
