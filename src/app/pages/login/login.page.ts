import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pageTitle='Iniciar Sesión';
  isNotHome=false;

  //modelo
  user : any = {
    username:'',
    password: ''
  }

  field : string = 'datos validos';

  constructor(private toastController: ToastController, private router:Router) { }

  ngOnInit() {
  }

  login(){
    if(this.validarModelo(this.user)){
      this.presentToast('Bienvenido ' + this.user.username);
      this.router.navigate(['/home']);
    }
    else{
      this.presentToast("Debes ingresar  " + this.field);
    }
  }

  validarModelo(model:any){
    for(var[user,admin]  of Object.entries(model)){
      user = 'User';
      admin = 'Admin';
      if(this.user.username == user){
        for(var[pass]  of Object.entries(model)){
          pass = 'Ab123456'
          if(this.user.password == pass)
            return true;
          else;
            return false;
        }
        return false;
      }
      if(this.user.username == admin){
        for(var[pass]  of Object.entries(model)){
          pass = 'Ab123456'
          if(this.user.password == pass)
            return true;
          else;
            return false;
        }
        return false;
      }
    }
    return false;
  }

  async presentToast(message: string, duration?:number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration?duration:2000,
      position: 'bottom'
    });
    await toast.present();
  }

}
