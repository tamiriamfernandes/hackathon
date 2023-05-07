import { Wheelchair } from "phosphor-react";
import Header from "../../Components/Header/Header";
import near2 from "../../assets/Icone.png";

function FinshPayment() {
  return (
    <div className="App overflow-hidden font-body">
      <Header />

      <p className=" ml-4 text-[#800000]  text-sm font-bold">
        Sua compra foi realizada com Sucesso.
      </p>
      <p className=" ml-4 text-[#800000]  text-sm font-bold">Parabéns !</p>
      <div className="ml-4 mt-4 grid grid-flow-row auto-rows-max">
        <div className="max-w-sm bg-white border border-[#C3CBCD] rounded-sm  w-[328px] h-full">
          <div className="bg-[#800000] rounded-sm w-[327px] h-[42px]">
            <p className=" ml- p-3  text-xs text-white">
              Informações da sua compra
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div className="ml-2">
              <ul className="mt-2">
                <li className="text-xs font-medium">Id da compra:</li>
                <li className="text-xs font-normal mt-1">RDN5J6F9</li>
              </ul>
              <ul className="mt-4">
                <li className="text-xs font-medium">Data do pedido:</li>
                <li className="text-xs font-normal mt-1">07/05/2023</li>
              </ul>
            </div>
            <div>
              <ul className="mt-2">
                <li className="text-xs font-medium">Email:</li>
                <li className="text-xs font-normal mt-1">
                  exemplo@exemplo.com
                </li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <div className=" ml-2 mt-6 p-1 w-[58px] h-[58px]">
              <img src={near2} className="  rounded-md" alt="banner" />
            </div>
            <div className="ml-2 mt-6">
              <ul className="">
                <li className="text-xs font-medium">Hotel Estância</li>
                <li className="text-[10px] font-normal mt-">
                  Check-in: 05 Setembro às 14:00 horas -
                </li>
                <li className="text-[10px] font-normal mt-">
                  Quarto vista Mata
                </li>
                <li className="text-[10px] font-normal mt-">
                  Check-out: 08 Setembro às 12:00 horas.
                </li>
              </ul>
            </div>
          </div>

          <hr className="h-px my-1 bg-[#C3CBCD] border-0 mt-5" />
          <div>
            <label className="flex text-left ml-2 text-xs font-bold">
              Upgrade de Mobilidade:
            </label>
          </div>
          <div className="px-2 mb-4">
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
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button className=" mt-5 w-[156px] h-[44px] py-2 rounded-2xl bg-[#780000] text-white text-xs font-semibold">
            Minhas Reservas
          </button>
        </div>
      </div>
    </div>
  );
}

export default FinshPayment;
