import { historias } from "../bd/historias";
import Carta from "./Card";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {historias.map((historia) => (
        <Carta
          key={historia.id}
          historia={historia}
          titulo={historia.titulo}
          fecha={historia.fecha}
          experiencia={historia.experiencia}
          comentario={historia.comentario}
          imagen={historia.imagen}
        />
      ))}
    </div>
  );
};

export default Cards;
