import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as AOS from 'aos'; // Import the AOS library


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

AOS.init();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
