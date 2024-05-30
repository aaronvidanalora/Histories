import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Carta from "./Card";

const Cards = () => {
  const { historias, setHistorias } = useGlobalContext()

  useEffect(() => {
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
    

    leerHistorias()
}, []);



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:pl-32 sm:pr-32 ">
      {historias.map((historia, index) => (
        <Carta
          key={index}
          id={historia.id}
          titulo={historia.titulo}
          fecha={historia.fecha}
          experiencia={historia.experiencia}
          imagen={historia.imagen}    
        />
      ))}
    </div>
  );
}

export default Cards;
