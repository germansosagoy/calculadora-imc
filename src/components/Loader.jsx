import { RaceBy } from "@uiball/loaders";
import iconImage from "../assets/icons/icono-imc.svg";

const Loader = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={iconImage} alt="icono imagen" className="w-16 h-auto mb-4 shadow-lg opacity-95" />
      <div className="flex flex-col items-center">
        <RaceBy size={80} speed={1.7} color="white" lineWeight={3} />
      </div>
    </div>
  );
};


export default Loader;
