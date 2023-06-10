import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ChildActivationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  constructor(
    private userService: UserService,
    private contactService: ContactService,
    private router: Router,
  ) { }

  contacts$!: Observable<Contact[]> | any

  ngOnInit(): void {
    this.contactService.loadContacts({ term: '' })
    console.log(this.contactService.contacts$)
    this.contacts$ = this.contactService.contacts$
  }


  onAddContact() {
    console.log('add contact')
    this.router.navigateByUrl('/contact/edit')

  }

  onRemoveContact(contactId: string) {
    this.contactService.deleteContact(contactId)
  }

}
