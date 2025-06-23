import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

// Adiciona declaração para navigator.app
declare global {
  interface Navigator {
    app?: {
      exitApp: () => void;
    };
  }
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(10, () => {
        // Fecha o app ao pressionar o botão voltar
        if (navigator.app && typeof navigator.app.exitApp === 'function') {
          navigator.app.exitApp();
        }
      });
    });
  }
}