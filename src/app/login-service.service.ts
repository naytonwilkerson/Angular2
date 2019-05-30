import { Injectable, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {User} from './user';

@Injectable()
export class LoginServiceService {

  public showNavBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  private authenticated = false;


  constructor(private router: Router) {}

  signIn(user: User){
    if((user.email === 'user@gmail.com' || user.email === 'usuario@gmail.com') && user.password ==='123456'){
      this.authenticated = true;
      this.showNavBar(true);
      this.router.navigate(['/']);
    }else{
      this.authenticated = false;
    } 
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
