import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PageBase from "./pages/PageBase/PageBase";
import FilterPeriod from "./pages/TravelerPerfil/TravelerPerfil";
import DetailsHotel from "./pages/DetailsHotel/DetailsHotel";
import HotelOption from "./pages/HotelOption/HotelOption";
import Payment from "./pages/Payment/Payment";
import FinshPayment from "./pages/FinishPayment/FinshPayment";

export function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<PageBase />}>
        <Route path="/" element={<Home />} />
        <Route path="traveler-perfil" element={<FilterPeriod />} />
        <Route path="details-hotel" element={<DetailsHotel />} />
        <Route path="hotel-option" element={<HotelOption />} />
        <Route path="payment-accomodation" element={<Payment />} />
        <Route path="end-payment" element={<FinshPayment />} />
      </Route>

      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
