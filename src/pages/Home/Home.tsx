
import logo from "../../assets/banner2.jpg";
import near1 from "../../assets/near1.jpg";
import near2 from "../../assets/near2.jpg";
import near3 from "../../assets/near3.jpg";
import near4 from "../../assets/near4.jpg";
import near5 from "../../assets/near5.jpg";

import VLibras from "@djpfs/react-vlibras";

function Home() {
  return (
    <>
      <div className="App overflow-hidden mb-10">
        <VLibras forceOnload={true} />

        <img src={logo} className="max-w-sm" alt="banner" />
        <label className="absolute top-10 left-8 text-white text-lg font-bold">
          Explore o mundo
        </label>
        <label className="absolute top-20 left-8 text-white text-lg font-normal">
          Busque hotéis
        </label>
        <label className="absolute top-24 left-8 text-white text-lg font-normal">
          para a sua próxima viagem.
        </label>

        <button className="absolute top-40 left-8 py-2 px-4 rounded-md bg-[#800000] text-white text-sm font-semibold">
          QUERO VIAJAR
        </button>

        <div className="text-left p-5">
          <label className="text-black text-base font-bold">
            Destinos Próximos
          </label>

          <ul className="mt-2 flex overflow-y-auto">
            <li>
              <div className="p-1 border border-gray-300 rounded-md w-[90px]">
                <img
                  src={near1}
                  className="text-center w-[80px] rounded-md"
                  alt="banner"
                />
                <p className="text-black text-xs font-bold">Local</p>
                <p className="text-gray-400 text-xs font-bold">100 km</p>
              </div>
            </li>
            <li>
              <div className="ml-2 p-1 border border-gray-300 rounded-md w-[90px]">
                <img src={near2} className="w-[80px] rounded-md" alt="banner" />
                <p className="text-black text-xs font-bold">Local</p>
                <p className="text-gray-400 text-xs font-bold">100 km</p>
              </div>
            </li>
            <li>
              <div className="ml-2 p-1 border border-gray-300 rounded-md w-[90px]">
                <img src={near3} className="w-[80px] rounded-md" alt="banner" />
                <p className="text-black text-xs font-bold">Local</p>
                <p className="text-gray-400 text-xs font-bold">100 km</p>
              </div>
            </li>
            <li>
              <div className="ml-2 p-1 border border-gray-300 rounded-md w-[90px]">
                <img src={near4} className="w-[80px] rounded-md" alt="banner" />
                <p className="text-black text-xs font-bold">Local</p>
                <p className="text-gray-400 text-xs font-bold">100 km</p>
              </div>
            </li>
            <li>
              <div className="ml-2 p-1 border border-gray-300 rounded-md w-[90px]">
                <img src={near5} className="w-[80px] rounded-md" alt="banner" />
                <p className="text-black text-xs font-bold">Local</p>
                <p className="text-gray-400 text-xs font-bold">100 km</p>
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
              <div className="p-1 border border-gray-300 rounded-md w-[90px]">
                <img
                  src={near1}
                  className="text-center w-[80px] rounded-md"
                  alt="banner"
                />
                <p className="text-black text-xs font-bold">Local</p>
                <p className="text-gray-400 text-xs font-bold">100 km</p>
              </div>
            </li>
            <li>
              <div className="ml-2 p-1 border border-gray-300 rounded-md w-[90px]">
                <img src={near2} className="w-[80px] rounded-md" alt="banner" />
                <p className="text-black text-xs font-bold">Local</p>
                <p className="text-gray-400 text-xs font-bold">100 km</p>
              </div>
            </li>
            <li>
              <div className="ml-2 p-1 border border-gray-300 rounded-md w-[90px]">
                <img src={near3} className="w-[80px] rounded-md" alt="banner" />
                <p className="text-black text-xs font-bold">Local</p>
                <p className="text-gray-400 text-xs font-bold">100 km</p>
              </div>
            </li>
            <li>
              <div className="ml-2 p-1 border border-gray-300 rounded-md w-[90px]">
                <img src={near4} className="w-[80px] rounded-md" alt="banner" />
                <p className="text-black text-xs font-bold">Local</p>
                <p className="text-gray-400 text-xs font-bold">100 km</p>
              </div>
            </li>
            <li>
              <div className="ml-2 p-1 border border-gray-300 rounded-md w-[90px]">
                <img src={near5} className="w-[80px] rounded-md" alt="banner" />
                <p className="text-black text-xs font-bold">Local</p>
                <p className="text-gray-400 text-xs font-bold">100 km</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
