import { Component } from '@angular/core';
import { Client } from './models/client';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nom: string = '';
  prenom: string = '';
  age: number = null;

  ville: string = '';

  client: Client;
  constructor() {}
  ngOnInit() {
    this.client = new Client();
  }
  name = 'Angular';

  send() {
    this.client.nom = this.nom;
    this.client.prenom = this.prenom;
    this.client.age = this.age;
  }

  villeChange(event) {
    this.ville = event;
  }
}
