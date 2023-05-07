interface Props {
  title?: string;
  // titleButtonCorfirm?: string;
  children: React.ReactNode;
  // open: boolean;
  // buttonYesNo?: boolean;
  // onClose: void;
  // onConfirm: void;
  // styleConfirm?: string;
  // styleModal?: string;
}


const style = {
  alertIcon: 'box-content p-2 ml-auto border-none rounded-none',
  buttonNo: 'mt-8 w-full bg-blue-200 drop-shadow-xl uppercase py-2 h-10 text-sm rounded-full font-body font-semibold text-blue-500 transition-colors disabled:opacity-50 hover:text-white hover:bg-blue-500 px-10',
  buttonYes: 'mt-8 w-full bg-blue-500 drop-shadow-xl uppercase py-2 h-10 text-sm rounded-full font-body font-semibold text-white transition-colors disabled:opacity-50 text-white hover:text-blue-500 hover:bg-blue-200 px-10',
  //buttonNo: `px-4 mt-4 bg-blue-500 uppercase py-2 h-30 text-sm rounded-full font-body font-semibold transition-colors disabled:opacity-50 text-white hover:bg-blue-100`,
  //buttonYes: `px-4 mt-4 bg-red-500 uppercase py-2 h-30 text-sm rounded-full font-body font-semibold transition-colors disabled:opacity-50 text-white hover:bg-red-100`,
  modal: 'bg-white ml-[20px] mr-[20px]'
};

function Dialog(props: Props) {

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center"></div>
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden flex flex-col items-center justify-start ">
        <div className={`relative p-4 w-[328px] h-[352px] ${style.modal} m-auto flex-col flex rounded-3xl bg-white`}>
          <h2 className="text-center text-blue-50 font-body font-semibold text-sm">{props.title != undefined ? props.title : ''}</h2>
          {props.children}
        </div>
      </div>
    </>
  );
}

export default Dialog;

