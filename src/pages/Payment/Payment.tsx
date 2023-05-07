import { useEffect } from "react";
import Header from "../../Components/Header/Header";
import hotelmini from "../../assets/hotelmini.svg";
import { Plus } from "phosphor-react";
import { Link as RouterLink } from "react-router-dom";

function Payment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App overflow-hidden font-body">
      <Header />

      <div className="ml-3 grid grid-cols-12">
        <div className="col-start-1 col-span-11">
          <div className="text-left p-2 py-3 mt-4 -mb-6 ml-2 bg-[#800000] border border-gray-200 rounded-sm w-full rounded-t-md ">
            <label className="text-sm font-bold tracking-tight text-white">
              Resumo de Compra
            </label>
          </div>
          <div className="ml-2 mt-5 tblock max-w-sm p-2 bg-white border border-[#C3CBCD] rounded-sm w-full rounded-b-md">
            <div className="grid grid-cols-6">
              <div className="col-start-1">
                <img src={hotelmini} />
              </div>
              <div className="text-left col-start-2 col-span-5 row-span-full">
                <div>
                  <label className="ml-2 text-xs font-bold">
                    Hotel Estância
                  </label>
                </div>
                <div className="-mt-2">
                  <label className="ml-2 text-xs">
                    Check-in: 05 Setembro às 14:00 horas -{" "}
                  </label>
                </div>
                <div className="-mt-2">
                  <label className="ml-2 text-xs">Quarto vista Mata</label>
                </div>
                <div className="-mt-2">
                  <label className="ml-2 text-xs">
                    Check-out: 08 de Setembro às 12:00 horas.
                  </label>
                </div>
                <div className="-mt-2">
                  <label className="ml-2 text-xs font-bold">
                    Preço: R$ 750,00
                  </label>
                </div>
              </div>
              <div className="text-left col-start-2 col-span-4 row-start-2"></div>
            </div>
            <hr className="h-px my-1 bg-[#C3CBCD] border-0 mt-5" />
            <div>
              <label className="flex text-left ml-2 text-xs font-bold">
                Upgrade de Mobilidade:
              </label>
            </div>
            <div className="mt-2">
              <label className="flex text-left ml-2 text-xs">
                Esse recurso é possivel agendar um motorista
              </label>
            </div>
            <div>
              <label className="flex text-left ml-2 text-xs">
                para auxiliá-lo durante sua viagem.{" "}
              </label>
            </div>
            <div className="bg-[#708D81] rounded-2xl mt-4 p-2">
              <div>
                <label className="flex text-left ml-2 text-xs font-semibold text-white">
                  Agendamento
                </label>
              </div>
              <div className="mt-2">
                <label className="flex text-left ml-2 text-xs text-white">
                  Detalhes da corrida:
                </label>
              </div>

              <div className="mt-2">
                <label className="flex text-left ml-2 text-xs text-white">
                  Inicio: 375, Rua Marginal Praia do Sape - Ubatuba.
                </label>
              </div>

              <div className="">
                <label className="flex text-left ml-2 text-xs text-white">
                  Fim: 2683, Rua Lagoinha - Ubatuba.
                </label>
              </div>

              <div className="mt-2">
                <label className="flex text-left ml-2 text-xs text-white">
                  Data e hora:
                </label>
              </div>

              <div className="mt-2">
                <label className="flex ml-2 text-xs text-white">
                  Início da viagem: 13:30
                </label>
              </div>

              <div className="">
                <label className="flex text-left ml-2 text-xs text-white">
                  Data: 06 de Setembro de 2023.
                </label>
              </div>

              <div className="mt-2">
                <label className="flex ml-2 text-xs text-white font-semibold">
                  Preço R$ 25,57
                </label>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="w-44 bg-[#780000] hover:bg-grey text-grey-darkest font-bold py-1 px-4 inline-flex items-center rounded-3xl text-xs text-white">
                <Plus className="w-6 h-6 text-white mr-2" />
                <span>Agendar Motorista</span>
              </button>
            </div>

            <hr className="h-px my-1 bg-[#C3CBCD] border-0 mt-5" />

            <div>
              <label className="flex justify-center ml-2 text-xs font-bold">
                Valor total de R$ 775,57
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <RouterLink
              to={"/end-payment"}
              className="justify-center w-44 bg-[#780000] hover:bg-grey text-grey-darkest font-bold py-4 px-4 inline-flex items-center rounded-2xl text-xs text-white"
            >
              <span>FINALIZAR COMPRA</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payment;
