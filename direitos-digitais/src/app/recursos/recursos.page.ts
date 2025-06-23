import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, 
  IonLabel, IonButton, IonIcon, IonBackButton, IonButtons 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { documentTextOutline, globeOutline, bookOutline, schoolOutline } from 'ionicons/icons';

@Component({
  selector: 'app-recursos',
  templateUrl: 'recursos.page.html',
  styleUrls: ['recursos.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, 
    IonLabel, IonButton, IonIcon, IonBackButton, IonButtons
  ],
})
export class RecursosPage {
  constructor() {
    addIcons({ documentTextOutline, globeOutline, bookOutline, schoolOutline });
  }

  abrirLink(url: string) {
    window.open(url, '_blank');
  }
}