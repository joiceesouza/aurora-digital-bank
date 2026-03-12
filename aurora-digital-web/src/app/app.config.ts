import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LucideAngularModule, ArrowLeft, User, Lock } from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(
    LucideAngularModule.pick({
      ArrowLeft,
      User,
      Lock
    })
  )]
};
