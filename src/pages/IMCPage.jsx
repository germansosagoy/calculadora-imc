import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {MdKeyboardDoubleArrowLeft} from "react-icons/md";
import toast from "react-hot-toast";

const IMCPage = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [imc, setImc] = useState(null);
  const [calculating , setCalculating] = useState(false);
  const navigate = useNavigate();

  const handleIMC = (e) => {
    e.preventDefault();
    setCalculating(true)
    setImc(null)

    if (height === "" || weight === "" || isNaN(height) || isNaN(weight) || height <= 1 || weight <= 1) {
        toast.error('Por favor, ingrese los datos correctos.');
        setImc(null)
        setCalculating(false)
        return;
    }
    const heightInMeters = height / 100; //convertir altura a metros.
    setTimeout(() => {
      const imc = weight / (heightInMeters * heightInMeters);
      setImc(imc);
      setCalculating(false);
    }, 2500)
};

const handleBack = () => {
  navigate('/')
}

  return (
    <>
    <div className="flex justify-center items-center h-screen">
    <button onClick={handleBack} className="text-xs font-base text-white absolute top-2 left-4 mt-2 underline hover:underline-offset-2 flex items-center">
        <span><MdKeyboardDoubleArrowLeft className="text-sm"/></span>
        <span>Volver</span>
    </button>
      <div className="max-w-sm p-6 rounded-3xl shadow-lg bg-white">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Calculadora IMC
        </h1>
        <p className="text-xs font-normal text-center">
          Esta calculadora proporciona el IMC y la correspondiente categoría de
          nivel de peso según el {" "}
          <a 
          className="underline decoration-sky-800 font-medium" 
          href="https://acortar.link/srjTLQ" target="_blank" rel="noreferrer">
            IMC Oficial.
          </a>
          <br />
        </p>
        <div className="mt-1 text-xs font-normal text-center">
          <p><strong>Utilícela para adultos de 20 años o más.</strong></p>
          </div>
        <form className="bg-gray-100 p-5 rounded-lg my-4">
          <label className="block mb-2">
            <strong>Altura </strong>(en cm):
            <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Solo números, sin decimales" className="w-full py-2 px-3 border border-gray-300 rounded-lg"
            />
          </label>
          <label className="block mb-2">
            <strong>Peso </strong>(en kgs):
            <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Solo números, sin decimales" className="w-full py-2 px-3 border border-gray-300 rounded-lg"
            />
          </label>
          <div className="mt-8 flex justify-center">
            <button onClick={handleIMC} className="w-4/5 focus:outline-none text-white font-medium py-2 rounded-full bg-[#349281] hover:bg-[#4dc7b1] hover:scale-95 duration-500">
             Calcular IMC
            </button>
          </div>
        </form>
        <div className="my-2 text-center bg-gray-100 rounded-2xl p-2">
            <h2 className="text-md font-base items-center">
              {' '}
              El resultado de tu IMC:
              {calculating && <p className="text-sm text-normal my-1">Calculando ⏳ ..</p>}
            </h2>
            {imc !== null && (
              <p className="font-semibold my-1">{imc.toFixed(2)} (kg/m²).</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default IMCPage;
