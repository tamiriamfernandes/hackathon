import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PageBase from "./pages/PageBase/PageBase";
import FilterPeriod from "./pages/TravelerPerfil/TravelerPerfil";

export function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<PageBase />}>
        <Route path="/" element={<Home />} />
        <Route path="traveler-perfil" element={<FilterPeriod />} />
      </Route>

      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
