import { historias } from "../bd/historias";
import Carta from "./Card";

const Cards = () => {
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
};

export default Cards;
