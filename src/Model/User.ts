import { CategorieClient } from "./CategorieClient";
import { Role } from "./Role";

export class User {
    iduser: number;
    solde: number;
    status :boolean;
    nom: string;
    prenom: string;
    username: string;
    dateNaissance: Date;
    email: string;
    password: string;
    categorieClient: CategorieClient;
    roles: Role[];
    requestlist: string;    
    friendlist: string; 

    get id(): number {  return this.iduser;  }

    
    

}