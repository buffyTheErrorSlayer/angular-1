import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Page404Component } from './page404/page404.component';
import { TodolistComponent } from './todolist/todolist.component';
import { RecapComponent } from './recap/recap.component';


export const routes: Routes = [
    {path: "accueil", component: AccueilComponent},
    {path: "connexion", component: ConnexionComponent},
    {path: "", redirectTo: "accueil", pathMatch: 'full' },
    {path: "to-do", component: TodolistComponent},
    {path: "recap", component:RecapComponent},
    {path: "**", component: Page404Component}
];
