import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { ContactPageComponent } from './views/contact-page/contact-page.component';
import { UserIndexComponent } from './views/user-index/user-index.component';

const routes: Routes = [
  
  {
    path: '', component: UserIndexComponent,
  },
  {
    path: 'contact', component: ContactPageComponent,
  },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    // resolve: {pet: PetResolver},
    // canActivate: [AuthGuard],
},
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
