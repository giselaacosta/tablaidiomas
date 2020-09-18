import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { AuthService } from '../services/auth.service';
import { User } from '../clases/user.class';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  user:User=new User();
  constructor(private authSvc:AuthService,private router:Router) { }

  ngOnInit() {}
  async onLogin()
  {
    const user =await this.authSvc.onLogin(this.user);
    if(user)
    {
      console.log('Succesfully login in!!');
      this.router.navigateByUrl('/bienvenido');
    }
    else{
      console.log('Ocurrio un error!!');
      this.router.navigateByUrl('/error');
    }
  }

   onRegisterLogin()
  {
   
    {
      console.log('Vuelvo a register');
      this.router.navigateByUrl('/register');
    }
  }

}
