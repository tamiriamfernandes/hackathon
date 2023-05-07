import { CaretLeft } from "phosphor-react";

function Header(){
    return(
        <div className="grid grid-cols-3 px-4 w-full h-16 bg-white">
        <div className="flex col-start-1 items-center justify-left">
          <button className="w-9 h-9 rounded-lg hover:bg-[#708D81]">
            <CaretLeft className="w-8 h-8 text-[#780000] hover:text-white" />
          </button>
        </div>
        <div className="flex col-start-3 items-center justify-end font-body">
          <button className="py-2 px-4 rounded-md bg-[#780000] text-white text-xs font-semibold">
            Acessibilidade
          </button>
        </div>
      </div>
    )
}

export default Header;