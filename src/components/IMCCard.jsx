import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import Loader from "./Loader";
import IMCPage from "../pages/IMCPage";

const IMCCard = ({ dataCards }) => {
  const [showContent, setShowContent] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [showCalculator, setShowCalculator] = useState(false);

  const navigate = useNavigate();

  const handleStart = () => {
    setShowCalculator(true);
    navigate('/calculadora-imc')
  }

  const handleNext = () => {
    if (currentCard < dataCards.length - 1) {
      setCurrentCard(currentCard + 1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true)
    }, 3000)
  },[])


  return (
    <div className="max-w-xs rounded-3xl overflow-hidden shadow-xl bg-white p-5 mb-4 relative">
      <div className={`${showContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 ease-in-out`}>
        <img src={dataCards[currentCard].imagen} alt="imagen tarjeta" className="w-full h-80 object-cover mb-4 rounded-xl" />
        <p className="text-center font-medium text-gray-700 mb-4">{dataCards[currentCard].frase}</p>
        <div className="flex justify-center my-4">
          {currentCard === dataCards.length - 1 ? (
            <button onClick={handleStart} className="text-white font-medium py-2 px-16 rounded-full bg-[#349281] hover:bg-[#4dc7b1] hover:scale-95 duration-500">
              <span>Calculadora </span>
            </button>
          ) : (
            <button onClick={handleNext} className="text-white font-medium py-2 px-16 rounded-full bg-[#349281] hover:bg-[#4dc7b1] hover:scale-95 duration-500">
              <span>Siguiente</span>
            </button>
          )}
        </div>
      </div>
      {/* Muestra el componente IMC si showCalculator es true */}
      {showCalculator && <IMCPage />}
      <div className={`${showContent ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700 ease-in-out absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-gray-700`} style={{ pointerEvents: showContent ? 'none' : 'auto' }}>
        {/* Componente Loader */}
        <Loader/>
      </div>
    </div>
  );
};

export default IMCCard;
