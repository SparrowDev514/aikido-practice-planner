import { BrowserRouter, Routes, Route } from "react-router-dom";
import Generater from "../pages/Generater";
import Settings from "../pages/Settings";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Generater />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
