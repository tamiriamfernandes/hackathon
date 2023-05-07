import {
  Car,
  CheckCircle,
  Circle,
  ForkKnife,
  RadioButton,
  SlidersHorizontal,
  Snowflake,
  Star,
  Wheelchair,
} from "phosphor-react";
import { Link as RouterLink } from "react-router-dom";
import hotelTemoana from "../../assets/hotelTeMoana.png";
import stepEnum from "../../enum/stepPerfilEnum";
import { useState } from "react";

import Header from "../../Components/Header/Header";

function HotelOption() {
  const [step, setStep] = useState<stepEnum>(5);

  return (
    <div className="App overflow-hidden font-body">
      <Header />

      <div className="flex items-center justify-start">
        <div className="h-0.5 w-20 bg-gray-400"></div>
        <div>
          {step > stepEnum.pcd ? (
            <CheckCircle size={24} color="#708d81" />
          ) : step == stepEnum.pcd ? (
            <RadioButton size={24} color="#708d81" />
          ) : (
            <Circle size={24} color="#708d81" />
          )}
        </div>
        <div className="h-0.5 w-20 bg-gray-400"></div>
        <div>
          {step > stepEnum.optionsAccomodation ? (
            <CheckCircle size={24} color="#708d81" />
          ) : step == stepEnum.optionsAccomodation ? (
            <RadioButton size={24} color="#708d81" />
          ) : (
            <Circle size={24} color="#708d81" />
          )}
        </div>
        <div className="h-0.5 w-20 bg-gray-400"></div>
        <div className="">
          {step > stepEnum.detailAccomodation ? (
            <CheckCircle size={24} color="#708d81" />
          ) : step == stepEnum.detailAccomodation ? (
            <RadioButton size={24} color="#708d81" />
          ) : (
            <Circle size={24} color="#708d81" />
          )}
        </div>

        <div className="h-0.5 w-20 bg-gray-400"></div>
      </div>
      <div className="grid grid-cols-3 ml-6">
        <div className="flex justify-center items-center col-start-1">
          <label className="ml-2 text-[8px] text-gray-400 font-bold">
            Perfil Definido
          </label>
        </div>
        <div className="flex justify-center items-center col-start-2">
          <label className="-ml-6 w-20 text-[8px] text-gray-400 font-bold">
            Opções de Acomodação
          </label>
        </div>
        <div className="flex justify-start items-center col-start-3">
          <label className="-ml-3 w-20 text-[8px] text-gray-400 font-bold">
            Detalhes da Acomodação
          </label>
        </div>
      </div>

      <div className="flex flex-row mt-6 ml-10">
        <div className="basis-1/4">
          <div>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative items-center ml-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block items-center w-52 p-2 pl-14 mb-4 text-sm text-gray-900 border border-gray-400 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nome do hotel"
                required
              />
            </div>
          </div>
        </div>
        <div className="basis-1/4 ml-2 ">
          <SlidersHorizontal
            className="cursor-pointer"
            size={36}
            color="#708d81"
            weight="thin"
          />
        </div>
      </div>
      <div className=" ">
        <div className=" grid grid-cols-1  justify-center mt-4">
          <div className="ml-2 p-1 w-[350px]">
            <img
              src={hotelTemoana}
              className="w-[350px] rounded-md"
              alt="hotel"
            />
            <div className="flex mt-4">
              <p className="text-[#780000]  text-[12px] font-bold ">
                Hotel Temoana
              </p>
              <div className="flex ml-44 -mb-2">
                <Star
                  className="ml-6"
                  size={16}
                  color="#fbf418"
                  weight="fill"
                />
                4.5
              </div>
            </div>
            <p className="flex justify-start text-[#17191B] text-[11px] font-bold">
              Praia do Sapé, Ubatuba.
            </p>
            <div className="flex  ">
              <p className="text-[10px]">Fica aproximadamente 205 km</p>
              <div className="ml-24">
                <ForkKnife className="" size={24} color="#780000" />
              </div>
              <div>
                <Snowflake className="ml-1" size={24} color="#780000" />
              </div>
              <div>
                <Car size={24} className="ml-1" color="#780000" />
              </div>
              <div>
                <Wheelchair size={24} className="ml-1" color="#780000" />
              </div>
            </div>
            <div className="text-left w-[248px] h-[10px]">
              <p className="mt-4 text-xs mr-2 ">
                Pousada TeMoana oferece acomodações com piscina ao ar livre,
                estacionamento privativo gratuito, jardim e lounge
                compartilhado.
              </p>
            </div>

            <RouterLink
              to={"/details-hotel"}
              className="ml-60  py-2 px-4 mr-2 mb-4 text-[14px] font-medium text-[#780000] focus:outline-none bg-white rounded-full border border-[#780000] hover:bg-[#780000] hover:text-white focus:z-10 focus:ring-4 "
            >
              Ver mais
            </RouterLink>
          </div>
        </div>
        <div className=" grid grid-cols-1  justify-center mt-8">
          <div className="ml-2 p-1 w-[350px]">
            <img
              src={hotelTemoana}
              className="w-[350px] rounded-md"
              alt="hotel"
            />
            <div className="flex mt-4">
              <p className="text-[#780000]  text-[12px] font-bold ">
                Hotel Temoana
              </p>
              <div className="flex ml-44 -mb-2">
                <Star
                  className="ml-6"
                  size={16}
                  color="#fbf418"
                  weight="fill"
                />
                4.5
              </div>
            </div>
            <p className="flex justify-start text-[#17191B] text-[11px] font-bold">
              Praia do Sapé, Ubatuba.
            </p>
            <div className="flex  ">
              <p className="text-[10px]">Fica aproximadamente 205 km</p>
              <div className="ml-24">
                <ForkKnife className="" size={24} color="#780000" />
              </div>
              <div>
                <Snowflake className="ml-1" size={24} color="#780000" />
              </div>
              <div>
                <Car size={24} className="ml-1" color="#780000" />
              </div>
              <div>
                <Wheelchair size={24} className="ml-1" color="#780000" />
              </div>
            </div>
            <div className="text-left w-[248px] h-[10px]">
              <p className="mt-4 text-xs mr-2 ">
                Pousada TeMoana oferece acomodações com piscina ao ar livre,
                estacionamento privativo gratuito, jardim e lounge
                compartilhado.
              </p>
            </div>

            <button
              type="button"
              className="ml-60  py-2 px-4 mr-2 mb-2 text-[14px] font-medium text-[#780000] focus:outline-none bg-white rounded-full border border-[#780000] hover:bg-[#780000] hover:text-white focus:z-10 focus:ring-4 "
            >
              Ver mais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelOption;
