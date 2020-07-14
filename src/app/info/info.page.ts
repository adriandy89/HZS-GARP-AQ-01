import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  info = ''
  name = ''
  phone = ''
  email = ''

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let lang = params['lang'];    
      console.log(`${lang}`);
      if (lang == 'ES') {
        this.info = 'Información'
        this.name = 'Nombre'
        this.phone = 'Teléfono'
        this.email = 'Correo'
      } else {
        this.info = 'Information'
        this.name = 'Name'
        this.phone = 'Phone'
        this.email = 'Email'
      }
      });
  }

  

}
