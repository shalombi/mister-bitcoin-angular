import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ChildActivationEnd } from '@angular/router';
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
  constructor(private userService: UserService, private contactService: ContactService) { }

  contacts$!: Observable<Contact[]> | any
  contactSelectedId !: string | null

  ngOnInit(): void {
    this.contactService.loadContacts({ term: '' })
    console.log(this.contactService.contacts$)
    this.contacts$ = this.contactService.contacts$
  }

  onSelectUser(selectId: string) {
    this.contactSelectedId = selectId
  }

  onBack() {
    this.contactSelectedId = null
  }

}
