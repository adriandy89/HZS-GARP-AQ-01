import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  
  
  @ViewChild('iframe') iframe: ElementRef
  lang="ES"

  mensaje= 'Conectando...'

  constructor(public loadingController: LoadingController) {}

  ngOnInit(){
    this.presentLoading()
  }

  ngAfterViewInit() {
    this.iframe.nativeElement.setAttribute('src', "https://thingsboard.uclv.cu/dashboard/6d2c8760-b721-11ea-a0ce-e527f67127c3?publicId=64abda20-b5df-11ea-a0ce-e527f67127c3");
   }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: this.mensaje,
      duration: 10000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  // Hide the loader if already created otherwise return error
  hideLoader() {
    this.loadingController.dismiss().then((res) => {
      console.log('Loading dismissed!', res);
    }).catch((error) => {
      console.log('error', error);
    });
  }

  onClick(){
    if (this.lang=="ES") {
      this.presentLoading()
      this.lang= "EN"
      this.mensaje= 'Conecting...'
      this.iframe.nativeElement.setAttribute('src', "https://thingsboard.uclv.cu/dashboard/6001c0e0-c091-11ea-bdd4-35ac0afed238?publicId=64abda20-b5df-11ea-a0ce-e527f67127c3");
      } 
      else {
      this.presentLoading()
      this.lang= "ES"
      this.mensaje= 'Conectando...'
      this.iframe.nativeElement.setAttribute('src', "https://thingsboard.uclv.cu/dashboard/6d2c8760-b721-11ea-a0ce-e527f67127c3?publicId=64abda20-b5df-11ea-a0ce-e527f67127c3");
    }    
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
    if (this.lang=="EN") {
      this.presentLoading()
      this.iframe.nativeElement.setAttribute('src', "https://thingsboard.uclv.cu/dashboard/6001c0e0-c091-11ea-bdd4-35ac0afed238?publicId=64abda20-b5df-11ea-a0ce-e527f67127c3");
      } 
      else {
      this.presentLoading()
      this.iframe.nativeElement.setAttribute('src', "https://thingsboard.uclv.cu/dashboard/6d2c8760-b721-11ea-a0ce-e527f67127c3?publicId=64abda20-b5df-11ea-a0ce-e527f67127c3");
    }
  }

}