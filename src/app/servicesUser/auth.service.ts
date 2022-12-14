import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const AUTH_API = 'http://localhost:8089/SpringMVC/api/auth/';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
@Injectable({ providedIn: 'root' })


export class AuthService {
  constructor(private http: HttpClient){}

  login(username: string, password: string): Observable<any> {  
  return this.http.post(AUTH_API + 'signin', {  username,  password  }, httpOptions); }


  register(username: string, email: string, password: string,nom: string, prenom: string , dateNaissance: string , categorieClient: string ,solde:number ,FriendList:string ,FriendRequest:string ): Observable<any> {                        
  return this.http.post(AUTH_API + 'signup', {  username,  email,  password,  nom,  prenom,  dateNaissance, categorieClient ,solde ,FriendList ,FriendRequest}, httpOptions); }                             


} 



