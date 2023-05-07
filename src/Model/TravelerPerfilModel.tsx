
import AccommodationEnum from "../enum/accommodationEnum";
import PcdEnum from "../enum/pdcsEnum";
import TypePerfilEnum from "../enum/typePerfilEnum";

interface ITravelerPerfilModel{
    location:string,
    typePerfil?: TypePerfilEnum,
    accommodation?:AccommodationEnum,
    pcd:number,
    typePcd:Array<PcdEnum>,
    dateInitial:string,
    dateEnd:string
}

export default ITravelerPerfilModel;