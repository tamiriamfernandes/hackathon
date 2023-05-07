import {
  CaretLeft,
  CheckCircle,
  Circle,
  List,
  MagnifyingGlass,
  MapPinLine,
  Pencil,
  RadioButton,
  X,
} from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ITravelerPerfilModel from "../../Model/TravelerPerfilModel";
import stepEnum from "../../enum/stepPerfilEnum";
import near1 from "../../assets/sozinho.jpeg";
import near2 from "../../assets/casal.jpeg";
import near3 from "../../assets/amigos.jpg";
import near4 from "../../assets/familia.jpg";
import hotel from "../../assets/hotel.jpg";
import residencia from "../../assets/residencia.jpg";
import resort from "../../assets/resort.jpg";
import chale from "../../assets/chale.jpg";
import pousada from "../../assets/pousada.jpg";
import hostel from "../../assets/hostel.jpg";
import TypePerfilEnum from "../../enum/typePerfilEnum";
import PcdEnum from "../../enum/pdcsEnum";
import AccommodationEnum from "../../enum/accommodationEnum";
import Header from "../../Components/Header/Header";

function TravelerPerfil() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [location, setLocation] = useState<string>("");
  const [step, setStep] = useState<stepEnum>(0);
  const [outros, setOutros] = useState<boolean>(false);

  const [travelerPerfil, setTravelerPerfil] = useState<ITravelerPerfilModel>({
    typePerfil: undefined,
    accommodation: undefined,
    location: "",
    typePcd: [],
    pcd: 0,
    dateInitial: "",
    dateEnd: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const existsLocation = searchParams.get("location");
    if (existsLocation != undefined) {
      setTravelerPerfil({
        ...travelerPerfil,
        location: existsLocation.toString(),
      });
      setStep(stepEnum.perfil);
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

  const descriptionTypeAccommodation = (_accommodation?: AccommodationEnum) => {
    switch (_accommodation) {
      case AccommodationEnum.hotel:
        return "Hotel";
      case AccommodationEnum.residence:
        return "Residência";
      case AccommodationEnum.resort:
        return "Resort";
      case AccommodationEnum.lodging:
        return "Pousada";
      case AccommodationEnum.cottage:
        return "Chalé";
      case AccommodationEnum.hostel:
        return "Hostel";
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

  const setAccommodation = (_accommodation: AccommodationEnum) => {
    setTravelerPerfil({
      ...travelerPerfil,
      accommodation: _accommodation,
    });
    setStep(stepEnum.pcd);
  };

  const handlePcd = (_checkbox: any, _pcd: PcdEnum) => {
    const arrayPcd = travelerPerfil.typePcd;

    if (_checkbox.checked) {
      arrayPcd.push(_pcd);
    } else {
      const index = arrayPcd.indexOf(2);
      arrayPcd.splice(index, 1);
    }

    setTravelerPerfil({ ...travelerPerfil, typePcd: arrayPcd });
  };

  const searchAccommodation = () => {
    localStorage.setItem("perfil", JSON.stringify(travelerPerfil));
    navigate("/hotel-option");
  };

  return (
    <>
      <div className="App overflow-hidden font-body">
        <Header />

        <div className="flex items-center justify-center">
          <div className="h-0.5 w-20 bg-transparent"></div>
          <div>
            {step > stepEnum.location ? (
              <CheckCircle size={24} color="#708d81" />
            ) : step == stepEnum.location ? (
              <RadioButton size={24} color="#708d81" />
            ) : (
              <Circle size={24} color="#708d81" />
            )}
          </div>
          <div className="h-0.5 w-20 bg-gray-400"></div>
          <div className="">
            {step > stepEnum.perfil ? (
              <CheckCircle size={24} color="#708d81" />
            ) : step == stepEnum.perfil ? (
              <RadioButton size={24} color="#708d81" />
            ) : (
              <Circle size={24} color="#708d81" />
            )}
          </div>
          <div className="h-0.5 w-20 bg-gray-400"></div>
          <div className="">
            {step > stepEnum.typeAccommodation ? (
              <CheckCircle size={24} color="#708d81" />
            ) : step == stepEnum.typeAccommodation ? (
              <RadioButton size={24} color="#708d81" />
            ) : (
              <Circle size={24} color="#708d81" />
            )}
          </div>
          <div className="h-0.5 w-20 bg-gray-400"></div>
          <div className="">
            {step > stepEnum.pcd ? (
              <CheckCircle size={24} color="#708d81" />
            ) : step == stepEnum.pcd ? (
              <RadioButton size={24} color="#708d81" />
            ) : (
              <Circle size={24} color="#708d81" />
            )}
          </div>
         
          <div className="h-0.5 w-20 bg-gray-400"></div>
        </div>
        <div className="grid grid-cols-4 ml-6">
          <div className="flex justify-center items-center col-start-1">
            <label className="text-[8px] text-gray-400 font-bold">
              Escolha do Destino
            </label>
          </div>
          <div className="flex justify-center items-center col-start-2">
            <label className="-ml-6 text-[8px] text-gray-400 font-bold">
            Quem irá viajar
            </label>
          </div>
          <div className="flex justify-start items-center col-start-3">
            <label className="-ml-4 text-[8px] text-gray-400 font-bold">
            Tipo de Acomodação
            </label>
          </div>
          <div className="flex justify-center items-center col-start-4">
            <label className="-ml-10 text-[8px] text-gray-400 font-bold">
              Acessibilidade
            </label>
          </div>
        </div>
        
        <div className="mt-2 text-left px-7 py-1">
          <p className="text-[#780000] text-lg font-bold">Vamos começar a</p>
          <p className="text-[#780000] text-lg font-bold">
            personalizar a sua viagem:
          </p>

          <div className="mt-6">
            <p className="text-sm font-bold">Qual o seu destino?</p>
            {step == stepEnum.location ? (
              <label
                htmlFor="email"
                className="relative text-gray-400 focus-within:text-black block"
              >
                <MagnifyingGlass className="focus-within:text-[#780000] pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-2" />
                {travelerPerfil.location == "" ? (
                  <X className="text-[#780000] pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-2 hidden" />
                ) : null}

                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Insira o destino"
                  className="px-10 form-input w-full p-2 rounded-lg border border-[#780000]"
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
                <div className="p-1 grid grid-cols-2 gap-4">
                  <div
                    className="col-start-1  border border-gray-300 rounded-md w-[150px] "
                    onClick={() => {
                      setTypePerfil(TypePerfilEnum.alone);
                      setStep(stepEnum.typeAccommodation);
                    }}
                  >
                    <img
                      src={near1}
                      className="text-center w-[150px] rounded-md"
                      alt="banner"
                    />
                    <p className="mt-1 text-center text-black text-xs font-bold">
                      Sozinho (a)
                    </p>
                  </div>
                  <div
                    className="col-start-2 p-1 border border-gray-300 rounded-md w-[150px] "
                    onClick={() => {
                      setTypePerfil(TypePerfilEnum.pair);
                      setStep(stepEnum.typeAccommodation);
                    }}
                  >
                    <img
                      src={near2}
                      className="text-center w-[150px] rounded-md"
                      alt="banner"
                    />
                    <p className="mt-1 text-center text-black text-xs font-bold">
                      Casal
                    </p>
                  </div>

                  <div
                    className="col-start-1 p-1 border border-gray-300 rounded-md w-[150px]"
                    onClick={() => {
                      setTypePerfil(TypePerfilEnum.friends);
                      setStep(stepEnum.typeAccommodation);
                    }}
                  >
                    <img
                      src={near3}
                      className="text-center w-[150px] rounded-md"
                      alt="banner"
                    />
                    <p className="mt-1 text-center text-black text-xs font-bold">
                      Com amigos
                    </p>
                  </div>
                  <div
                    className="col-start-2 p-1 border border-gray-300 rounded-md w-[150px] "
                    onClick={() => {
                      setTypePerfil(TypePerfilEnum.family);
                      setStep(stepEnum.typeAccommodation);
                    }}
                  >
                    <img
                      src={near4}
                      className="text-center w-[150px] rounded-md"
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

          {travelerPerfil.accommodation != undefined ||
          step == stepEnum.typeAccommodation ? (
            <div className="mt-5">
              <p className="text-sm font-bold">
                Qual o tipo de hospedagem você prefere?
              </p>
              {step == stepEnum.typeAccommodation ? (
                <div className="mt-5 grid grid-cols-3 gap-4">
                  <div
                    className="col-start-1 p-1 border border-gray-300 rounded-md w-[90px]"
                    onClick={() => {
                      setAccommodation(AccommodationEnum.hostel);
                    }}
                  >
                    <img
                      src={hotel}
                      className="text-center w-[80px] rounded-md"
                      alt="banner"
                    />
                    <p className="mt-1 text-center text-black text-xs font-bold">
                      Hotel
                    </p>
                  </div>
                  <div
                    className="col-start-2 p-1 border border-gray-300 rounded-md w-[90px] "
                    onClick={() => {
                      setAccommodation(AccommodationEnum.residence);
                    }}
                  >
                    <img
                      src={residencia}
                      className="text-center w-[80px] rounded-md"
                      alt="banner"
                    />
                    <p className="mt-1 text-center text-black text-xs font-bold">
                      Residência
                    </p>
                  </div>

                  <div
                    className="col-start-3 p-1 border border-gray-300 rounded-md w-[90px] "
                    onClick={() => {
                      setAccommodation(AccommodationEnum.resort);
                    }}
                  >
                    <img
                      src={resort}
                      className="text-center w-[80px] rounded-md"
                      alt="banner"
                    />
                    <p className="mt-1 text-center text-black text-xs font-bold">
                      Resort
                    </p>
                  </div>
                  <div
                    className="col-start-1 p-1 border border-gray-300 rounded-md w-[90px] "
                    onClick={() => {
                      setAccommodation(AccommodationEnum.lodging);
                    }}
                  >
                    <img
                      src={pousada}
                      className="text-center w-[80px] rounded-md"
                      alt="banner"
                    />
                    <p className="mt-1 text-center text-black text-xs font-bold">
                      Pousada
                    </p>
                  </div>
                  <div
                    className="col-start-2 p-1 border border-gray-300 rounded-md w-[90px] "
                    onClick={() => {
                      setAccommodation(AccommodationEnum.cottage);
                    }}
                  >
                    <img
                      src={chale}
                      className="text-center w-[80px] rounded-md"
                      alt="banner"
                    />
                    <p className="mt-1 text-center text-black text-xs font-bold">
                      Chalé
                    </p>
                  </div>
                  <div
                    className="col-start-3 p-1 border border-gray-300 rounded-md w-[90px] "
                    onClick={() => {
                      setAccommodation(AccommodationEnum.hostel);
                    }}
                  >
                    <img
                      src={hostel}
                      className="text-center w-[80px] rounded-md"
                      alt="banner"
                    />
                    <p className="mt-1 text-center text-black text-xs font-bold">
                      Hostel
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className="flex"
                  onClick={() => {
                    setStep(stepEnum.typeAccommodation);
                  }}
                >
                  <label className="text-sm">
                    {descriptionTypeAccommodation(travelerPerfil.accommodation)}
                  </label>
                  <Pencil className="ml-10 w-5 h-5" />
                </div>
              )}
            </div>
          ) : null}

          {travelerPerfil.typePerfil != undefined ||
          (travelerPerfil.pcd != undefined && step == stepEnum.pcd) ? (
            <>
              <div className="mt-5">
                <p className="text-sm font-bold">
                  Você
                  {travelerPerfil.typePerfil == TypePerfilEnum.alone
                    ? " "
                    : " ou algum acompanhante "}
                  possui alguma deficiência ou necessidade de acessibilidade?
                </p>
                {step == stepEnum.pcd ? (
                  <div className="mt-4 grid grid-cols-2">
                    <div className="col-start-1 flex items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value={travelerPerfil.pcd}
                        checked={travelerPerfil.pcd == 1}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onClick={() =>
                          setTravelerPerfil({
                            ...travelerPerfil,
                            pcd: travelerPerfil.pcd == 0 ? 1 : 0,
                          })
                        }
                      />
                      <label
                        htmlFor="default-checkbox"
                        className="ml-2 text-sm font-medium text-black"
                      >
                        Sim
                      </label>
                    </div>

                    {travelerPerfil.pcd == 1 ? (
                      <>
                        <div className="col-start-1 flex items-center mb-4">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onClick={(e) => handlePcd(e.target, PcdEnum.visual)}
                          />
                          <label
                            htmlFor="default-checkbox"
                            className="ml-2 text-sm font-medium text-black"
                          >
                            Visual
                          </label>
                        </div>
                        <div className="col-start-2 flex items-center mb-4">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="default-checkbox"
                            className="ml-2 text-sm font-medium text-black"
                          >
                            Intelectual
                          </label>
                        </div>
                        <div className="col-start-1 flex items-center mb-4">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onClick={(e) => handlePcd(e.target, PcdEnum.motora)}
                          />
                          <label
                            htmlFor="default-checkbox"
                            className="ml-2 text-sm font-medium text-black "
                          >
                            Motora
                          </label>
                        </div>
                        <div className="col-start-2 flex items-center mb-4">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onClick={(e) =>
                              handlePcd(e.target, PcdEnum.mobilidade)
                            }
                          />
                          <label
                            htmlFor="default-checkbox"
                            className="ml-2 text-sm font-medium text-black"
                          >
                            Mobilidade Reduzida
                          </label>
                        </div>
                        <div className="col-start-1 flex items-center mb-4">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onClick={(e) =>
                              handlePcd(e.target, PcdEnum.auditiva)
                            }
                          />
                          <label
                            htmlFor="default-checkbox"
                            className="ml-2 text-sm font-medium text-black"
                          >
                            Auditiva
                          </label>
                        </div>
                        <div className="col-start-2 flex items-center mb-4">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            checked={outros}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onClick={() => setOutros(!outros)}
                          />
                          <label
                            htmlFor="default-checkbox"
                            className="ml-2 text-sm font-medium text-black"
                          >
                            Outro
                          </label>
                        </div>

                        {outros ? (
                          <div className="col-start-2 flex items-center mb-4">
                            <input
                              id=""
                              type="text"
                              value=""
                              placeholder=""
                              className="px-4 w-36 h-7 text-black border border-[#780000] rounded"
                            />
                          </div>
                        ) : null}
                      </>
                    ) : null}
                  </div>
                ) : (
                  <div
                    className="flex mb-4"
                    onClick={() => {
                      setStep(stepEnum.pcd);
                    }}
                  >
                    <label className="text-sm">
                      {travelerPerfil.pcd == 0 ? "Não" : "Sim"}
                    </label>
                    <Pencil className="ml-10 w-5 h-5" />
                  </div>
                )}
              </div>

              <div className="">
                <p className="text-sm font-bold">Qual o periodo da viagem?</p>
                <div className="flex mt-1">
                  <input
                    placeholder="Data Inicial"
                    className="w-6/12 p-1 border border-[#780000] rounded-lg"
                    type="date"
                    onChange={(e) =>
                      setTravelerPerfil({
                        ...travelerPerfil,
                        dateInitial: e.target.value,
                      })
                    }
                  />
                  <input
                    placeholder="Data Final"
                    className="w-6/12 p-1 ml-4 border border-[#780000] rounded-lg"
                    type="date"
                    onChange={(e) =>
                      setTravelerPerfil({
                        ...travelerPerfil,
                        dateEnd: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    className="flex justify-end mt-4 py-2 px-6 rounded-md bg-[#780000] text-white text-xs font-semibold"
                    type="button"
                    onClick={() => searchAccommodation()}
                  >
                    Buscar
                  </button>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default TravelerPerfil;
