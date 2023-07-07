import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeViewComponent} from "./views/home-view/home-view.component";

const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent
  },
  {
    path: 'about-us',
    loadChildren: () => import('./modules/about-us-view/about-us-view.module').then(m => m.AboutUsViewModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./modules/contact-view/contact-view.module').then(m => m.ContactViewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
