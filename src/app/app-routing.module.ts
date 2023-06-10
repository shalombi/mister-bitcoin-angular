import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactEditComponent } from './cmp/contact-edit/contact-edit.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { ContactPageComponent } from './views/contact-page/contact-page.component';
import { UserIndexComponent } from './views/user-index/user-index.component';

const routes: Routes = [

  {
    path: '', component: UserIndexComponent,
  },
  {
    path: 'contact', component: ContactPageComponent,children: [
      { path: 'edit/:id', component: ContactEditComponent },
      { path: 'edit', component: ContactEditComponent }
    ]
  },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
  },

  // {
  //   path: '', component: PetIndexComponent, children: [
  //     { path: 'edit/:id', component: PetEditComponent, resolve: { pet: PetResolver } },
  //     { path: 'edit', component: PetEditComponent }
  //   ]
  // },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
