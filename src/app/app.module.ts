import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserIndexComponent } from './views/user-index/user-index.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ListUsersComponent } from './cmp/list-users/list-users.component';
import { PreviewUserComponent } from './cmp/preview-user/preview-user.component';
import { ContactPageComponent } from './views/contact-page/contact-page.component';
import { ContactListComponent } from './cmp/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmp/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { ContactFilterComponent } from './cmp/contact-filter/contact-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    UserIndexComponent,
    HomePageComponent,
    ListUsersComponent,
    PreviewUserComponent,
    ContactPageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
