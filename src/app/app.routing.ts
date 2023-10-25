import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { NikeDettComponent } from './pages/nike-dett/nike-dett.component';
import { NikeComponent } from './pages/nike/nike.component';

export enum AppRoute {
  SHOES_NIKE = 'shoes-nike',
  SHOES_NIKE_DETT = 'shoes-nike-dett',
  UPLOAD = 'upload',
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoute.SHOES_NIKE,
  },
  {
    path: AppRoute.SHOES_NIKE,
    component: NikeComponent,
  },
  {
    path: `${AppRoute.SHOES_NIKE_DETT}/:slug`,
    component: NikeDettComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
