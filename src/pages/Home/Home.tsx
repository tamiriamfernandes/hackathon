import { Link as RouterLink } from "react-router-dom";

import banner from "../../assets/banner2.svg";
import near1 from "../../assets/jordao.jpg";
import near2 from "../../assets/local2.png";
import near3 from "../../assets/local3.png";
import near4 from "../../assets/local4.png";
import near5 from "../../assets/maranhao.png";
import near6 from "../../assets/jalapao1.jpg";

import VLibras from "@djpfs/react-vlibras";
import { Wheelchair } from "phosphor-react";

function Home() {
  return (
    <>
      <div className="App overflow-hidden mb-10 font-body">
        <img
          src="../images/logo.svg"
          className="absolute top-6 left-4"
          alt="logo"
        />
        <div className="absolute top-6 right-4 font-body">
          <button className="p-2 rounded-full bg-[#780000] text-white text-xs font-semibold">
            <Wheelchair className="w-6 h-6" color="white" />
          </button>
        </div>
        <img src={banner} className="max-w-sm" alt="banner" />

        <label className="absolute top-32 left-4 text-[#17191B] text-base font-normal">
          Busque hotéis especializados em
        </label>
        <label className="absolute top-36 left-4 text-[#17191B] text-base font-normal">
          em acessibilidade para a sua
        </label>
        <label className="absolute top-40 left-4 text-[#17191B] text-base font-normal">
          próxima viagem.
        </label>
        <button className="absolute top-48 left-4 py-4 px-4 rounded-2xl bg-[#780000] text-white text-sm font-semibold">
          QUERO VIAJAR
        </button>
        <div className="text-left p-5">
          <label className="text-black text-base font-bold">
            Destinos Próximos
          </label>

          <ul className="mt-2 flex overflow-y-auto">
            <li>
              <div className="ml-2 mb-2 p-1 border border-gray-300 rounded-md   w-[242px]">
                <img
                  src={near2}
                  className=" w-[242px] rounded-md"
                  alt="banner"
                />
                <p className="text-[#800000]  text-xs font-bold mb-2">
                  Boituva
                </p>
                <p className="text-[#17191B] text-xs font-normal">
                  Cidade conhecida por seus passeios de balão, paraquedismo e
                  parques ecológicos.
                </p>
                <p className="text-[#17191B] text-xs font-normal mt-2">
                  Fica aproximadamente 115 km.
                </p>
              </div>
            </li>
            <li>
              <div className="ml-2 mb-2 p-1 border border-gray-300 rounded-md  w-[242px]">
                <img
                  src={near3}
                  className="  w-[242px] rounded-md"
                  alt="banner"
                />
                <p className="text-[#800000]  text-xs font-bold mb-2">
                  Ubatuba
                </p>
                <p className="text-[#17191B] text-xs font-normal">
                  Conhecida por suas lindas praias, uma delas é a Praia do
                  Cedro.
                </p>
                <p className="text-[#17191B] text-xs font-normal mt-2">
                  Fica aproximadamente 172 km.
                </p>
              </div>
            </li>
            <li>
              <RouterLink to={"/traveler-perfil?location=Destinos Próximos"}>
                <div className="p-1 mb-2 border border-gray-300 rounded-md w-[222px]">
                  <img
                    src={near1}
                    className="text-center w-[242px] rounded-md"
                    alt="banner"
                  />
                  <p className="text-[#800000]  text-xs font-bold mb-2">
                    Campos do Jordão
                  </p>
                  <p className="text-[#17191B] text-xs font-normal">
                    Tem seu clima frio e sua incrível arquitetura inspirada em
                    arquiteturas europeias.
                  </p>
                  <p className="text-[#17191B] text-xs font-normal mt-2">
                    Fica aproximadamente 172 km.
                  </p>
                </div>
              </RouterLink>
            </li>
            <li>
              <div className="ml-2 mb-2 p-1 border border-gray-300 rounded-md  w-[242px]">
                <img
                  src={near4}
                  className=" w-[242px] rounded-md"
                  alt="banner"
                />
                <p className="text-[#800000]  text-xs font-bold mb-2">
                  São Sebastião
                </p>
                <p className="text-[#17191B] text-xs font-normal">
                  Conta com restaurantes de alta gastronomia e a praia de
                  Maresias.
                </p>
                <p className="text-[#17191B] text-xs font-normal mt-2">
                  Fica aproximadamente 160 km.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="text-left px-5">
          <label className="text-black text-base font-bold">
            Lugares em Destaques
          </label>

          <ul className="mt-2 flex overflow-y-auto">
            <li>
              <div className="p-1 mb-2 border border-gray-300 rounded-md  w-[242px]">
                <img
                  src={near5}
                  className="text-center  w-[242px] rounded-md"
                  alt="banner"
                />
                <p className="text-[#800000]  text-xs font-bold mb-2">
                  Lençóis Maranheces
                </p>
                <p className="text-[#17191B] text-xs font-normal">
                  Conhecida por seu patrimônio artístico e casas estreitas com
                  telhados de duas águas.
                </p>
              </div>
            </li>
            <li>
              <div className="ml-2 mb-2 p-1 border border-gray-300 rounded-md  w-[242px]">
                <img
                  src={near6}
                  className=" w-[242px] rounded-md"
                  alt="banner"
                />
                <p className="text-[#800000]  text-xs font-bold mb-2">
                  Jalapão
                </p>
                <p className="text-[#17191B] text-xs font-normal">
                  Conhecida por seu patrimônio artístico e casas estreitas com
                  telhados de duas águas.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
