import IMCCard from "./IMCCard";
import { dataCards } from "../data/dataCards.js";

const IMCCalculator = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
       <IMCCard dataCards={dataCards} />
      </div>
    </>
  );
};

export default IMCCalculator;
