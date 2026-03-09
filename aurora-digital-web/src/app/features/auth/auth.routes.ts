import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


export const routes: Routes = [

    // grupo de rotas de autenticação
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    },

    // rota coringa (caso não encontre)
    {
        path: '**',
        redirectTo: 'auth/login'
    }

];