import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pageTitle = 'home';
  isNotHome = false;

  loading : HTMLIonLoadingElement;

  constructor(private loadingCtrl:LoadingController) {}

  cargarLoading(message: string){
    this.presentLoanding(message);

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoanding(message: string){
    this.loading = await this.loadingCtrl.create({
      message,
    });

    await this.loading.present();
  }


  ngOnInit(){
    this.cargarLoading('Welcome to Lala World!!!');
    console.log('ngOnInit');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  ngOnDestroy(){
    this.cargarLoading('Goodbye cruel world!!!')
    console.log('ngOnDestroy');
  }




}
