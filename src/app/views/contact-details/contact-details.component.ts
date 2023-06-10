import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  @Input() contactId!: string

  contact!: Contact | any

  subscription!: Subscription

  async ngOnInit(): Promise<void> {

    this.subscription = this.route.params.subscribe(async params => {
      const contactId = params['id']
      const contact = await lastValueFrom(this.contactService.getContactById(contactId))
      this.contact = contact
    })

  }

  onBack() {
    this.router.navigateByUrl('/contact')
  }


}
