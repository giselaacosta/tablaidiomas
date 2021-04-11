import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

import { ErrorsHandler } from '../services/error-handler.service';
import { FotosService } from '../services/fotos.service';
import { SpinnerHandlerService } from '../services/spinner-handler.service';
import { AuthService } from '../services/auth.service';
import { timer } from 'rxjs/internal/observable/timer';
@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage  {
   public image: string = null;
   private spinner:any=null;
  constructor(private router:Router,private navCtrl: NavController,
     public errorHand: ErrorsHandler,
     private fotoService: FotosService,
     private spinnerHand:SpinnerHandlerService,
     private alertCtrl:AlertController,
    private authService:AuthService) { }


  async LogOut()
   {
  
       console.log('Error al ingresar!!');
 //this.router.navigateByUrl('/login');

    const alert = await this.alertCtrl.create({
       cssClass: 'avisoAlert',
       header:'¿Desea cerrar sesión?',
       buttons:[{
         text: 'Cancelar',
         role: 'cancel',
         handler: () => {
           console.log('Confirm Cancel');
         }
       },
     {
       text:'Ok',
       handler: async () => {
         this.spinner = await this.spinnerHand.GetAllPageSpinner('Cerrando sesión.');
         this.spinner.present();

         timer(2000).subscribe(()=>{
           this.authService.onLogout().then(() => {
           this.navCtrl.navigateRoot('login', { replaceUrl: true });
           }).catch(error => {
             this.errorHand.mostrarError(error);
           }).finally(() => {
             //timer(2000).subscribe(()=>this.spinner.dismiss());
            
           });
         });
       }
     }]
     });
     await alert.present(); 
     }

     public async cosasLindasClick() {
      // this.ObtenerFoto('linda');
       this.navCtrl.navigateRoot('/cosas-lindas');
   }
  //   public hacerClick()
  //   {
  //     console.log("Click cosas lindas");
  //   }
  
     public cosasFeasClick() {
       console.log("Click cosas feas");
       this.navCtrl.navigateRoot('/cosas-feas');
      // this.ObtenerFoto('fea');
     }

  //   public async ObtenerFoto(tipo: string) {
  //     this.spinner = await this.spinnerHand.GetAllPageSpinner('Procesando...');
  //     this.spinner.present();
  
  //     const camOptions: CameraOptions = {
  //       quality: 50,
  //       destinationType: this.camera.DestinationType.DATA_URL,
  //       sourceType: this.camera.PictureSourceType.CAMERA,
  //       allowEdit: false,
  //       encodingType: this.camera.EncodingType.JPEG,
  //       targetWidth: 500,
  //       targetHeight: 500,
  //       saveToPhotoAlbum: true,
  //       correctOrientation: true,
  //     };
  
  //     this.camera.getPicture(camOptions).then(async (pictureAux) => {
  //       // Send the picture to Firebase Storage
  //       this.fotoService.UploadToFirebase(pictureAux, tipo);
  //       this.spinner.dismiss();
  //     }, error => {
  //       // console.log(error);
  //       if (error === 'No Image Selected') {
  //         this.errorHand.mostrarError('Cancelado.');
  //       } else {
  //         this.errorHand.mostrarError('Error al tomar la foto ' + error);
  //       }
  //       // console.log(error);
  //       this.spinner.dismiss();
  //     }).catch(err => {
  //       // console.log(err);
  //       this.spinner.dismiss();
  //     });
  //   }
}
