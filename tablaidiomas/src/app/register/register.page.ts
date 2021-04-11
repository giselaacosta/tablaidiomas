import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../clases/user.class';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  user:User=new User();
  constructor(private authSvc:AuthService,private router:Router) { }

 

  async onRegister()
  {
    const user =await this.authSvc.onRegister(this.user);
    console.log(this.user);

    if(user)
    {

      console.log('Succesfully created user');
      
      this.router.navigateByUrl('/bienvenido');


    }
    else{
      console.log('Ocurrio un error!!');
      this.router.navigateByUrl('/error');
    }
  }

  async onHome()
  {
   
      
      this.router.navigateByUrl('/login');

    
  }
}
