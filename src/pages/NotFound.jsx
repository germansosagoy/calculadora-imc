import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full m-4">
      <h1 className="font-semibold text-xl mb-2">404 - Página no encontrada</h1>
      <p className="font-base text-lg">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <button
        onClick={handleBack}
        className="text-xs font-base text-white absolute top-2 left-4 mt-2 underline hover:underline-offset-2 flex items-center"
      >
        <span>
          <MdKeyboardDoubleArrowLeft className="text-sm" />
        </span>
        <span>Ir a inicio</span>
      </button>
    </div>
  );
};

export default NotFound;
