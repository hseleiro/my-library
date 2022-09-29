import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'private', loadChildren:()=>import('./private/private.module').then(module => module.PrivateModule)},
  {path: 'public', loadChildren:()=>import('./public/public.module').then(module => module.PublicModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
