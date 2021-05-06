import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.page.html',
  styleUrls: ['./contactenos.page.scss'],
})
export class ContactenosPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  facebook(){
    // this.facebook_url.show();
    window.open('https://www.facebook.com/colombiataxis');
  }

  instagram(){
    // this.instagram_url.show();
    window.open('https://www.instagram.com/colombiataxis/');
  }

  whatsapp(){
    // this.whatsapp_url.show();
    window.open('https://api.whatsapp.com/send?phone=+573504117000&text=Hola quiero conocer más acerca de ustedes');
  }

}
