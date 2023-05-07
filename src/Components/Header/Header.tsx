import { CaretLeft, Wheelchair } from "phosphor-react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 px-4 w-full h-16 bg-white">
      <div className="flex col-start-1 items-center justify-left">
        <button
          className="w-9 h-9 rounded-lg hover:bg-[#708D81]"
          type="button"
          onClick={() => navigate(-1)}
        >
          <CaretLeft className="w-8 h-8 text-[#780000] hover:text-white" />
        </button>
      </div>
      <div className="flex col-start-2 items-center justify-center">
        <RouterLink to={"/"}>
          <img src={"/images/logo.svg"} />
        </RouterLink>
      </div>
      <div className="flex col-start-3 items-center justify-end font-body">
        <button className="p-2 rounded-full bg-[#780000] text-white text-xs font-semibold">
          <Wheelchair className="w-6 h-6" color="white" />
        </button>
      </div>
    </div>
  );
}

export default Header;
