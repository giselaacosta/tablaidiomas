import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage  {

  constructor(private router:Router) { }


  async logOut()
  {
  
      console.log('Error al ingresar!!');
      this.router.navigateByUrl('/home');
    }


}
