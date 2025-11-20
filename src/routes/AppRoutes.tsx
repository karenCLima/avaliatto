import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Avaliacao from "../pages/Avaliacao";

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/avaliacao" element={<Avaliacao />} />
      </Routes>
  
  );
};

export default AppRoutes;
