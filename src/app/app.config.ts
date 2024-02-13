import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

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
    // Importar todo los providers que usualmente importariamos como un módulo a nivel global
    importProvidersFrom(
      HttpClientModule,
    )
  ],
};
