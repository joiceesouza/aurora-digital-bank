import { Routes } from '@angular/router';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { OnboardingComponent } from './features/onboarding/onboarding.component';

export const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'onboarding', component: OnboardingComponent },
    { path: 'auth', loadChildren: () => import('./features/auth/auth.routes').then(m => m.routes) }
];
