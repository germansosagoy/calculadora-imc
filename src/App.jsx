import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IMCalculator from "./components/IMCalculator";
import NotFound from "./pages/NotFound";
import IMCPage from "./pages/IMCPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<IMCalculator />} />
        <Route path="/calculadora-imc" element={<IMCPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
