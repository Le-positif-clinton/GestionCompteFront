import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./pages/gest/clients/clients.module').then( m => m.ClientsPageModule)
  },
  {
    path: 'new-client',
    loadChildren: () => import('./pages/gest/new-client/new-client.module').then( m => m.NewClientPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./pages/banque/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'new-compte',
    loadChildren: () => import('./pages/gest/new-compte/new-compte.module').then( m => m.NewComptePageModule)
  },
  {
    path: 'comptes',
    loadChildren: () => import('./pages/gest/comptes/comptes.module').then( m => m.ComptesPageModule)
  },
  {
    path: 'gestionnaires',
    loadChildren: () => import('./pages/gest/gestionnaires/gestionnaires.module').then( m => m.GestionnairesPageModule)
  },
  {
    path: 'new-gestionnaire',
    loadChildren: () => import('./pages/gest/new-gestionnaire/new-gestionnaire.module').then( m => m.NewGestionnairePageModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('./pages/banque/transactions/transactions.module').then( m => m.TransactionsPageModule)
  },
  {
    path: 'retrait',
    loadChildren: () => import('./banque/retrait/retrait.module').then( m => m.RetraitPageModule)
  },
  {
    path: 'depot',
    loadChildren: () => import('./banque/depot/depot.module').then( m => m.DepotPageModule)
  },
  {
    path: 'virement',
    loadChildren: () => import('./banque/virement/virement.module').then( m => m.VirementPageModule)
  },
  {
    path: 'bon-entre',
    loadChildren: () => import('./pages/bon-entre/bon-entre.module').then( m => m.BonEntrePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
