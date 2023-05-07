import { Outlet } from "react-router-dom";
import MenuBottom from "../../Components/MenuBottom/MenuBottom";
import Footer from "../../Components/Footer/Footer";
import VLibras from "@djpfs/react-vlibras";


function PageBase(){
    return (
        <>
        <VLibras forceOnload={true} />
          <div className="flex bg-gray-10">
            <div className="w-full bg-gray-10">
              <div className="sm:ml-64">
                <Outlet />
              </div>
            </div>
            <MenuBottom />
          </div>
          <Footer />
        </>
      );
}

export default PageBase;