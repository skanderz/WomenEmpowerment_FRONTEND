import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/Model/User';

const API_URL = 'http://localhost:8089/SpringMVC/api/test/';
const REAL_URL = 'http://localhost:8089/SpringMVC/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  ngOnInit() {

    }
  //body ={ 'id':8} ;




  assignAdmin(id: number): any {
    console.log("service called with id : "+ id)
     return this.http.put('http://localhost:8089/SpringMVC/user/assign-admin/',id , { responseType: 'text' } ).subscribe( 
      data => console.log(data) );
  }
  withholdAdmin(id: number): any {
    console.log("service called with id : "+ id)
     return this.http.put('http://localhost:8089/SpringMVC/user/withhold-admin/',id , { responseType: 'text' } ).subscribe( 
      data => console.log(data) );
  }

  
  getHistoriqueClient(id: any): Observable<any> {
    console.log(id);
    return this.http.get<any>('http://localhost:8089/SpringMVC/user/getHistorique/'+ id);
  }

  modifier(user: User): Observable<any> {
    console.log(user);
    return this.http.put<User>('http://localhost:8089/SpringMVC/user/modify-client/',user);
  }

  getUser(id: any): Observable<any> {
    return this.http.get('http://localhost:8089/SpringMVC/user/retrieve-user/'+id);
  }

  getAll(params: any): Observable<any> {
    console.log(params);
    return this.http.get<any>('http://localhost:8089/SpringMVC/user/paginate/users', { params });
  }
  getClientsStats(): Observable<any>{
    return this.http.get<any>('http://localhost:8089/SpringMVC/user/getNotesByCategorieClient/');
    }


  listUsers(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8089/SpringMVC/user/retrieve-all-user');
    }






  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
