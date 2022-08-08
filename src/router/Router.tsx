import { BrowserRouter, Routes, Route } from "react-router-dom";
import WazaList from "../pages/WazaList";
import Settings from "../pages/Settings";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<WazaList />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
