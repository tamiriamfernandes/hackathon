import {
  Car,
  CheckCircle,
  Circle,
  ForkKnife,
  RadioButton,
  Snowflake,
  Star,
  Wheelchair,
  WifiHigh,
  UmbrellaSimple,
  X,
} from "phosphor-react";
import stepEnum from "../../enum/stepPerfilEnum";
import { useEffect, useState } from "react";
import hotelTemoana from "../../assets/hotelTeMoana.png";
import { Link as RouterLink } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Dialog from "../../Components/Dialog/Dialog";
import facebook from "../../assets/facebook.svg";
import gmail from "../../assets/gmail.svg";
import email from "../../assets/email.svg";

function DetailsHotel() {
  const [step, setStep] = useState<stepEnum>(6);
  const [dialog, setDialog] = useState<Boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App overflow-hidden font-body">
      <Header />

      {dialog ? (
        <Dialog>
          <div className="grid grid-cols-3">
            <div className="col-start-2">
              <img
                src="../images/logo.svg"
                className=" top-6 left-4"
                alt="logo"
              />
            </div>
            <div className="flex justify-end col-start-3">
              <button type="button" onClick={() => setDialog(!dialog)}>
                <X className="w-6 h-6 text-[#780000]" />
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center mt-7">
            <RouterLink
              to={"/payment-accomodation"}
              className="w-52 bg-[#780000] hover:bg-grey text-grey-darkest font-bold py-2 px-4 inline-flex items-center rounded-3xl text-xs text-white"
            >
              <img src={facebook} className="flex mr-2" />
              <span>ACESSE COM O FACEBOOK</span>
            </RouterLink>
          </div>

          <div className="flex justify-center items-center mt-8">
            <RouterLink
              to={"/payment-accomodation"}
              className="w-52 bg-[#780000] hover:bg-grey text-grey-darkest font-bold py-2 px-4 inline-flex items-center rounded-3xl text-xs text-white"
            >
              <img src={gmail} className="flex mr-2" />
              <span>ACESSE COM O GOOGLE</span>
            </RouterLink>
          </div>

          <div className="flex justify-center items-center mt-8">
            <RouterLink
              to={"/payment-accomodation"}
              className="w-52 bg-[#780000] hover:bg-grey text-grey-darkest font-bold py-2 px-4 inline-flex items-center rounded-3xl text-xs text-white"
            >
              <img src={email} className="flex mr-2" />
              <span>ACESSE COM O E-MAIL</span>
            </RouterLink>
          </div>

          <div className="flex justify-center items-center mt-8">
            <RouterLink
              to={"/payment-accomodation"}
              className="w-52 bg-[#780000] hover:bg-grey text-grey-darkest font-bold py-2 px-4 inline-flex items-center rounded-3xl text-xs text-white"
            >
              <span>CADASTRE-SE</span>
            </RouterLink>
          </div>
        </Dialog>
      ) : null}

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

      <div className="mb-28">
        <div className=" flex justify-center mt-4">
          <div className="ml-2 p-1 w-[350px]">
            <img
              src={hotelTemoana}
              className="w-[350px] rounded-md"
              alt="hotel"
            />
            <div className="grid grid-cols-6 mt-4">
              <div className="col-start-1 col-span-5">
                <p className="text-left text-xs mr-2 ">
                  Pousada TeMoana oferece acomodações com piscina ao ar livre,
                  estacionamento privativo gratuito, jardim e lounge
                  compartilhado. A propriedade fica a menos de 1 km da Praia de
                  Maranduba e a 2,2 km da Praia da Lagoinha.
                </p>
                <p className="text-left mt-0 text-xs mr-2 ">
                  A propriedade fica a menos de 1 km da Praia de Maranduba e a
                  2,2 km da Praia da Lagoinha.
                </p>
              </div>

              <div className="flex justify-end col-start-6">
                <Star
                  className="ml-6"
                  size={16}
                  color="#fbf418"
                  weight="fill"
                />
                4.5
              </div>
            </div>
            <div className="flex justify-end mr-2">
              <a className="text-[#780000] text-xs underline font-bold">
                Ver comentários
              </a>
            </div>

            <div className="w-full bg-[#708D81] rounded-xl px-6 py-3 mt-4">
              <label className="flex text-xs text-white">
                Principais Comodidades:
              </label>

              <div className="grid grid-cols-2 mt-4">
                <div className="flex items-center col-start-1">
                  <ForkKnife className="w-6 h-6" color="white" />
                  <label className="ml-0.5 text-xs text-white">
                    Restaurante
                  </label>
                </div>
                <div className="flex items-center col-start-2">
                  <Car className="w-6 h-6" color="white" />
                  <label className="ml-0.5 text-xs text-white">
                    Estacionamento
                  </label>
                </div>
                <div className="flex items-center col-start-1 mt-2">
                  <Snowflake className="w-6 h-6" color="white" />
                  <label className="ml-0.5 text-xs text-white">
                    Ar-condicionado
                  </label>
                </div>
                <div className="flex items-center col-start-2 mt-2">
                  <Wheelchair className="w-6 h-6" color="white" />
                  <label className="ml-0.5 text-xs text-white">
                    Instalações para PCDs
                  </label>
                </div>
                <div className="flex items-center col-start-1 mt-2">
                  <img
                    src={"/images/family.svg"}
                    className="w-6 h-6 text-white"
                  />
                  <label className="ml-0.5 text-xs text-white">
                    Quartos para famílias
                  </label>
                </div>
                <div className="flex items-center col-start-2 mt-2">
                  <UmbrellaSimple className="w-6 h-6" color="white" />
                  <label className="ml-0.5 text-xs text-white">Beira-mar</label>
                </div>
                <div className="flex items-center col-start-1 mt-2">
                  <WifiHigh className="w-6 h-6" color="white" />
                  <label className="ml-0.5 text-xs text-white">
                    Wi-Fi Gratuito
                  </label>
                </div>
                <div className="flex items-center col-start-2 mt-2">
                  <img
                    src={"/images/swimmingpool.svg"}
                    className="w-6 h-6 text-white"
                  />
                  <label className="ml-0.5 text-xs text-white">
                    Piscina ao ar livre
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full bg-white border border-[#708D81] rounded-xl px-6 py-3 mt-4">
              <label className="flex text-xs text-[#780000] font-bold">
                Quarto Standard:
              </label>

              <div className="grid grid-cols-2">
                <div className="flex items-center col-start-1">
                  <img
                    src={"/images/sleep.svg"}
                    className="w-4 h-4 text-[#708D81]"
                  />
                  <label className="ml-0.5 text-xs text-[#17191B]">
                    Quarto casal - 30 m²
                  </label>
                </div>
                <div className="flex items-center col-start-1 ">
                  <Snowflake className="w-4 h-4" color="#708D81" />
                  <label className="ml-0.5 text-xs text-[#17191B]">
                    Ar-condicionado
                  </label>
                </div>
                <div className="flex items-center col-start-1">
                  <img
                    src={"/images/fastfood.svg"}
                    className="w-4 h-4 text-[#708D81]"
                  />
                  <label className="ml-0.5 text-xs text-[#17191B]">
                    Frigobar
                  </label>
                </div>
                <div className="flex items-center col-start-1">
                  <img
                    src={"/images/people.svg"}
                    className="w-4 h-4 text-[#708D81]"
                  />
                  <label className="ml-0.5 text-xs text-[#17191B]">
                    2 pessoas por quarto
                  </label>
                </div>
                <div className="flex items-center col-start-1">
                  <img
                    src={"/images/wifi.svg"}
                    className="w-4 h-4 text-[#708D81]"
                  />
                  <label className="ml-0.5 text-xs text-[#17191B]">Wifi</label>
                </div>
                <div className="flex items-center col-start-1">
                  <img
                    src={"/images/tv.svg"}
                    className="w-4 h-4 text-[#708D81]"
                  />
                  <label className="ml-0.5 text-xs text-[#17191B]">TV</label>
                </div>
                <div className="flex items-center col-start-1">
                  <img
                    src={"/images/acessibility.svg"}
                    className="w-4 h-4 text-[#708D81]"
                  />
                  <label className="ml-0.5 text-xs text-[#17191B]">
                    Acessivel
                  </label>
                </div>

                <div className="col-start-2 row-start-1 row-span-4">
                  <p className="ml-0.5 text-xs text-[#17191B]">
                    Preço por Noite
                  </p>
                  <p className="ml-0.5 text-xs text-[#17191B] font-bold mt-2 mb-4">
                    R$ 250,00
                  </p>
                  <button
                    className="bg-[#780000] text-white px-4 py-2 rounded-3xl text-xs"
                    type="button"
                    onClick={() => setDialog(true)}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full bg-white border border-[#708D81] rounded-xl px-6 py-3 mt-4">
              <label className="flex text-xs text-[#780000] font-bold">
                Quarto Superior:
              </label>

              <div className="grid grid-cols-2">
                <div className="flex items-center col-start-1">
                  <img
                    src={"/images/sleep.svg"}
                    className="w-4 h-4 text-[#708D81]"
                  />
                  <label className="ml-0.5 text-xs text-[#17191B]">
                    Quarto casal - 35 m²
                  </label>
                </div>
                <div className="flex items-center col-start-1 ">
                  <Snowflake className="w-4 h-4" color="#708D81" />
                  <label className="ml-0.5 text-xs text-[#17191B]">
                    Ar-condicionado
                  </label>
                </div>
                <div className="flex items-center col-start-1">
                  <img
                    src={"/images/fastfood.svg"}
                    className="w-4 h-4 text-[#708D81]"
                  />
                  <label className="ml-0.5 text-xs text-[#17191B]">
                    Frigobar
                  </label>
                </div>
                <div className="flex items-center col-start-1">
                  <img
                    src={"/images/people.svg"}
                    className="w-4 h-4 text-[#708D81]"
                  />
                  <label className="ml-0.5 text-xs text-[#17191B]">
                    2 pessoas por quarto
                  </label>
                </div>
                <div className="flex items-center col-start-1">
                  <img
                    src={"/images/wifi.svg"}
                    className="w-4 h-4 text-[#708D81]"
                  />
                  <label className="ml-0.5 text-xs text-[#17191B]">Wifi</label>
                </div>
                <div className="flex items-center col-start-1">
                  <img
                    src={"/images/tv.svg"}
                    className="w-4 h-4 text-[#708D81]"
                  />
                  <label className="ml-0.5 text-xs text-[#17191B]">TV</label>
                </div>
                <div className="flex items-center col-start-1">
                  <img
                    src={"/images/acessibility.svg"}
                    className="w-4 h-4 text-[#708D81]"
                  />
                  <label className="ml-0.5 text-xs text-[#17191B]">
                    Acessivel
                  </label>
                </div>

                <div className="col-start-2 row-start-1 row-span-4">
                  <p className="ml-0.5 text-xs text-[#17191B]">
                    Preço por Noite
                  </p>
                  <p className="ml-0.5 text-xs text-[#17191B] font-bold mt-2">
                    R$ 360,00
                  </p>
                  <button className="bg-[#780000] text-white px-4 py-2 rounded-3xl text-xs mt-3">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailsHotel;
