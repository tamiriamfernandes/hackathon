import PcdEnum from "../enum/pcdEnum";
import TypePerfilEnum from "../enum/typePerfilEnum";

interface ITravelerPerfilModel{
    location:string,
    typePerfil?: TypePerfilEnum,
    pcd?:PcdEnum
}

export default ITravelerPerfilModel;