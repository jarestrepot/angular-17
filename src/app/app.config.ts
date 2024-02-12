import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      // View transitions ✅
      withViewTransitions(
        {
          skipInitialTransition: true,
          
          // onViewTransitionCreated(transitionInfo) {
          //   console.log({ transitionInfo }) // Valores de la ruta
          // }
        }
      )//✅✅✅
    ),

  ]
};
