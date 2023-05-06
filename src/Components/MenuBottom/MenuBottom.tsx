import { House, User,  Bed } from "phosphor-react";

function MenuBottom() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-14   bg-[#800000] border-t border-gray-200 rounded-t-xl">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <House size={18} className="text-white" />
          <span className="text-xs text-white group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Home
          </span>
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
         <Bed size={18} className="text-white" />
          <span className="text-xs text-white group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Minhas Hospedagens
          </span>
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <User size={18} className="text-white" />
          <span className="text-xs text-white group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Perfil
          </span>
        </button>
      </div>
    </div>
  );
}

export default MenuBottom;
