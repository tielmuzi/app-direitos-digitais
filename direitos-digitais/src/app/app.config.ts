import { provideRouter } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app.routes';

export const appConfig = {
  providers: [provideIonicAngular(), provideRouter(routes)]
};