import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

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
  uservalido:User=new User();

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
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
  AutocompletarAdmin()
  {
    this.loginForm = new FormGroup({
      email: new FormControl('admin@admin.com'),
      password: new FormControl('111111'),
     
    });
  this.user.email='admin@admin.com';
  this.user.password='111111';

  console.log( this.loginForm.value );  
}
AutocompletarInvitado()
{
  this.loginForm = new FormGroup({
    email: new FormControl('invitado@invitado.com'),
    password: new FormControl('222222'),

  });
  this.user.email='invitado@invitado.com';
  this.user.password='222222';
console.log( this.loginForm.value );  
}
  Autocompletar()
  {
    this.loginForm = new FormGroup({
      email: new FormControl('gise@gmail.com'),
      password: new FormControl('123456'),

    });

  console.log( this.loginForm.value );  
}


AutocompletarUsuario()
{
  this.loginForm = new FormGroup({
    email: new FormControl('usuario@usuario.com'),
    password: new FormControl('333333'),

  });
  this.user.email='usuario@usuario.com';
  this.user.password='333333';
console.log( this.loginForm.value );  

}

AutocompletarAnonimo()
{
  this.loginForm = new FormGroup({
    email: new FormControl('anonimo@anonimo.com'),
    password: new FormControl('444444'),

  });
  this.user.email='anonimo@anonimo.com';
  this.user.password='444444';
console.log( this.loginForm.value );  

}
AutocompletarTester()
{
  this.loginForm = new FormGroup({
    email: new FormControl('tester@tester.com'),
    password: new FormControl('555555'),

  });
  this.user.email='tester@tester.com';
  this.user.password='555555';
console.log( this.loginForm.value );  

}
  }


