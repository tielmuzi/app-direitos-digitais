import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonFooter } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, RouterLink, IonFooter],
})
export class HomePage {
  constructor() {}

  abrirLink() {
    window.open('https://www.kaspersky.com.br/resource-center/threats/what-is-cybercrime', '_blank');
  }

  abrirDenuncia() {
    window.open('https://www.gov.br/pf/pt-br/canais_atendimento/comunicacao-de-crimes', '_blank');
  }
}