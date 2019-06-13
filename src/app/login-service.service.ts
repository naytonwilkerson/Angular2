import { Injectable, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {User} from './user';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class LoginServiceService {

  private url: string = 'http://localhost:8080/senha';

  public showNavBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  private authenticated = false;


  constructor(private router: Router, private http: Http) {}

  getAll(): Observable<User[]>{
    return this.http.get(this.url)
            .map(res => res.json())
            .catch(this.handleError);
  }

  private handleError(error: any){
    let erro = error.message || 'Server error';
    console.error('Ocorreu um erro',error);
    return Observable.throw(erro);
  }

  signIn(user: User){
     
    /*return this.http.post(this.url,JSON.stringify(user),
    {headers: this.getHeaders()}).do(data =>{

      this.authenticated = true;
      this.showNavBar(true);
      this.router.navigate(['/']);
   
    })
    .catch(this.handleError)  
  */  
  
  if((user.email === 'user@gmail.com' || user.email === 'usuario@gmail.com') && user.password ==='123456'){
      this.authenticated = true;
      this.showNavBar(true);
      this.router.navigate(['/']);
    }else{
      this.authenticated = false;
    } 

  } 
  
    private getHeaders() {
      let headers = new Headers();
      headers.append('Content-Type','aplication/json');
      return headers;
    }

  logout(){
    this.authenticated = false;
    this.showNavBar(false);
    this.router.navigate(['/signin']);
  }

  isAuthenticated(){
    return this.authenticated;
  }

  private showNavBar(ifShow: boolean){
    this.showNavBarEmitter.emit(ifShow);
  }
}
