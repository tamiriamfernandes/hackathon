import {
  CaretLeft,
  List,
  MagnifyingGlass,
  MapPinLine,
  Pencil,
  X,
} from "phosphor-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ITravelerPerfilModel from "../../Model/TravelerPerfilModel";
import stepEnum from "../../enum/stepPerfilEnum";
import near1 from "../../assets/near1.jpg";
import near2 from "../../assets/near2.jpg";
import near3 from "../../assets/near3.jpg";
import near4 from "../../assets/near4.jpg";
import TypePerfilEnum from "../../enum/typePerfilEnum";

function TravelerPerfil() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [location, setLocation] = useState<string>("");
  const [step, setStep] = useState<stepEnum>(0);
  const [edit, setEdit] = useState<boolean>(false);

  const [travelerPerfil, setTravelerPerfil] = useState<ITravelerPerfilModel>({
    typePerfil: undefined,
    location: "teste",
    pcd:undefined
  });

  useEffect(() => {
    const existsLocation = searchParams.get("location");
    if (existsLocation != undefined) {
      setTravelerPerfil({
        ...travelerPerfil,
        location: existsLocation.toString(),
      });
    }
  }, []);

  const descriptionTypePerfil = (_perfil?: TypePerfilEnum) => {
    switch (_perfil) {
      case TypePerfilEnum.alone:
        return "Sozinho (a)";
      case TypePerfilEnum.pair:
        return "Casal";
      case TypePerfilEnum.friends:
        return "Com amigos";
      case TypePerfilEnum.family:
        return "Em familia";
      default:
        return "";
    }
  };

  const setTypePerfil = (_perfil: TypePerfilEnum) => {
    setTravelerPerfil({
      ...travelerPerfil,
      typePerfil: _perfil,
    });
    setStep(stepEnum.period);
  };

  return (
    <>
      <div className="grid grid-cols-3 px-4 w-full h-16 bg-white">
        <div className="flex col-start-1 items-center justify-left">
          <button className="w-9 h-9 rounded-lg hover:bg-[#708D81]">
            <CaretLeft className="w-8 h-8 text-[#800000] hover:text-white" />
          </button>
        </div>
        <div className="flex col-start-3 items-center justify-end">
          <button className="py-2 px-4 rounded-md bg-[#800000] text-white text-xs font-semibold">
            Acessibilidade
          </button>
          {/* <button className="text-right items-center justify-end w-9 h-9 rounded-lg hover:bg-[#708D81]">
            <List className="w-8 h-8 text-[#800000] hover:text-white" />
          </button> */}
        </div>
      </div>
      <div className="App overflow-hidden">
        <div className="text-left px-8 py-1">
          <p className="text-[#800000] text-lg font-bold">Vamos começar a</p>
          <p className="text-[#800000] text-lg font-bold">
            personalizar a sua viagem:
          </p>

          <div className="mt-6">
            <p className="text-sm font-bold">Qual o seu destino?</p>
            {step == stepEnum.location ? (
              <label
                htmlFor="email"
                className="relative text-gray-400 focus-within:text-black block"
              >
                <MagnifyingGlass className="focus-within:text-[#800000] pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-2" />
                {travelerPerfil.location == "" ? (
                  <X className="text-[#800000] pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-2 hidden" />
                ) : null}

                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Insira o destino"
                  className="px-10 form-input w-full p-2 rounded-lg border border-[#800000]"
                  value={travelerPerfil.location}
                  onChange={(e) =>
                    setTravelerPerfil({
                      ...travelerPerfil,
                      location: e.target.value,
                    })
                  }
                  onBlur={() => {
                    travelerPerfil.typePerfil != undefined
                      ? setStep(stepEnum.period)
                      : setStep(stepEnum.perfil);
                  }}
                />
              </label>
            ) : (
              <div
                className="flex"
                onClick={() => {
                  setStep(stepEnum.location);
                }}
              >
                <label className="text-sm">{travelerPerfil.location}</label>
                <Pencil className="ml-10 w-5 h-5" />
              </div>
            )}
          </div>

          {travelerPerfil.typePerfil != undefined || step == stepEnum.perfil ? (
            <div className="mt-5">
              <p className="text-sm font-bold">Qual o perfil da sua viagem?</p>
              {step == stepEnum.perfil ? (
                <div className="p-10 grid grid-cols-2 gap-4">
                  <div
                    className="col-start-1 p-1 border border-gray-300 rounded-md w-[90px] shadow-2xl"
                    onClick={() => setTypePerfil(TypePerfilEnum.alone)}
                  >
                    <img
                      src={near1}
                      className="text-center w-[80px] rounded-md"
                      alt="banner"
                    />
                    <p className="mt-1 text-center text-black text-xs font-bold">
                      Sozinho (a)
                    </p>
                  </div>
                  <div
                    className="col-start-2 p-1 border border-gray-300 rounded-md w-[90px] shadow-2xl"
                    onClick={() => setTypePerfil(TypePerfilEnum.pair)}
                  >
                    <img
                      src={near2}
                      className="text-center w-[80px] rounded-md"
                      alt="banner"
                    />
                    <p className="mt-1 text-center text-black text-xs font-bold">
                      Casal
                    </p>
                  </div>

                  <div
                    className="col-start-1 p-1 border border-gray-300 rounded-md w-[90px] shadow-2xl"
                    onClick={() => setTypePerfil(TypePerfilEnum.friends)}
                  >
                    <img
                      src={near3}
                      className="text-center w-[80px] rounded-md"
                      alt="banner"
                    />
                    <p className="mt-1 text-center text-black text-xs font-bold">
                      Com amigos
                    </p>
                  </div>
                  <div
                    className="col-start-2 p-1 border border-gray-300 rounded-md w-[90px] shadow-2xl"
                    onClick={() => setTypePerfil(TypePerfilEnum.family)}
                  >
                    <img
                      src={near4}
                      className="text-center w-[80px] rounded-md"
                      alt="banner"
                    />
                    <p className="mt-1 text-center text-black text-xs font-bold">
                      Em familia
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className="flex"
                  onClick={() => {
                    setStep(stepEnum.perfil);
                  }}
                >
                  <label className="text-sm">
                    {descriptionTypePerfil(travelerPerfil.typePerfil)}
                  </label>
                  <Pencil className="ml-10 w-5 h-5" />
                </div>
              )}
            </div>  
          ) : null}
          
          {travelerPerfil.typePerfil != undefined || step == stepEnum.perfil ? (
            <div className="mt-5">
              <p className="text-sm font-bold">Qual o perfil da sua viagem?</p>
              {step == stepEnum.perfil ? (
                <div className="p-10 grid grid-cols-2 gap-4">
                  <div
                    className="col-start-1 p-1 border border-gray-300 rounded-md w-[90px] shadow-2xl"
                    onClick={() => setTypePerfil(TypePerfilEnum.alone)}
                  >
                    <img
                      src={near1}
                      className="text-center w-[80px] rounded-md"
                      alt="banner"
                    />
                    <p className="mt-1 text-center text-black text-xs font-bold">
                      Sozinho (a)
                    </p>
                  </div>
                  <div
                    className="col-start-2 p-1 border border-gray-300 rounded-md w-[90px] shadow-2xl"
                    onClick={() => setTypePerfil(TypePerfilEnum.pair)}
                  >
                    <img
                      src={near2}
                      className="text-center w-[80px] rounded-md"
                      alt="banner"
                    />
                    <p className="mt-1 text-center text-black text-xs font-bold">
                      Casal
                    </p>
                  </div>

                  <div
                    className="col-start-1 p-1 border border-gray-300 rounded-md w-[90px] shadow-2xl"
                    onClick={() => setTypePerfil(TypePerfilEnum.friends)}
                  >
                    <img
                      src={near3}
                      className="text-center w-[80px] rounded-md"
                      alt="banner"
                    />
                    <p className="mt-1 text-center text-black text-xs font-bold">
                      Com amigos
                    </p>
                  </div>
                  <div
                    className="col-start-2 p-1 border border-gray-300 rounded-md w-[90px] shadow-2xl"
                    onClick={() => setTypePerfil(TypePerfilEnum.family)}
                  >
                    <img
                      src={near4}
                      className="text-center w-[80px] rounded-md"
                      alt="banner"
                    />
                    <p className="mt-1 text-center text-black text-xs font-bold">
                      Em familia
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className="flex"
                  onClick={() => {
                    setStep(stepEnum.perfil);
                  }}
                >
                  <label className="text-sm">
                    {descriptionTypePerfil(travelerPerfil.typePerfil)}
                  </label>
                  <Pencil className="ml-10 w-5 h-5" />
                </div>
              )}
            </div>  
          ) : null}

          <div className="hidden">
            <p>Periodo</p>
            <div className="flex mt-1">
              <input
                placeholder="Data Inicial"
                className="w-6/12 p-1 border border-[#800000] rounded-lg"
                type="date"
              />
              <input
                placeholder="Data Final"
                className="w-6/12 p-1 ml-4 border border-[#800000] rounded-lg"
                type="date"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TravelerPerfil;
