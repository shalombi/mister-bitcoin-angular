import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  constructor(private contactService: ContactService) { }
  @Input() contactId!: string
  @Output() onBack = new EventEmitter<string>()

  contact!: Contact | any

  async ngOnInit(): Promise<void> {
    const contact = await lastValueFrom(this.contactService.getContactById(this.contactId))
    this.contact = contact
  }

  onBackPage() {
    this.onBack.emit()
  }
}
