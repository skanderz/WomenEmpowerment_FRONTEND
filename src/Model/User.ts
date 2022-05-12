import { CategorieClient } from "./CategorieClient";
import { Role } from "./Role";

export class User {
    idClient: number;
    nom: string;
    prenom: string;
    username: string;
    dateNaissance: Date;
    email: string;
    password: string;
    categorieClient: CategorieClient;
    roles: Role[];

    get id(): number {
        return this.idClient;
    }

    
    

}