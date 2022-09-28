import { CategorieClient } from "./CategorieClient";
import { ESubscription } from "./ESubscription";
import { Role } from "./Role";

export class User {
    idSub: number;
    dateDebut: Date;
    dateFin: Date;
    typeSub: ESubscription;
    Userr: User;

    get idS(): number {    return this.idSub;   }

  

}