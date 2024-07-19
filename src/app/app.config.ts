import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { effects, reducer } from './state';
import { provideEffects } from '@ngrx/effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideStore( reducer ),
    provideEffects([...effects]), 
    provideStoreDevtools({ maxAge: 25, 
      traceLimit: 75,
      connectInZone: true,
    }), provideAnimationsAsync('animations'), 
    importProvidersFrom(ReactiveFormsModule, MatDialogModule,MatSnackBarModule)
  ]
};
