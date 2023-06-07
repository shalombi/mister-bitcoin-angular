import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact!: Contact | null
  @Output() onSelect = new EventEmitter<string>()

  ngOnInit(): void {
  }

  onSelectUser() {
    console.log(this.contact?._id)

    this.onSelect.emit(this.contact?._id)

  }



}
