import Cards from "./componentes/Cards";
import { PlusCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold p-6">Mis historias</h1>
      <div className="flex justify-center items-center">
        
      </div>
      <div>
        <Cards />
      </div>
      <div className="p-10 justify-end flex">
      <button
          className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full flex items-center"
        >
          <PlusCircle  size={45} /> 
        </button>
      </div>
    </div>
  );
}
