import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact!: Contact
  @Output() onSelect = new EventEmitter<string>()
  @Output() onRemove = new EventEmitter<string>()

  ngOnInit(): void {
  }


  onRemoveContact() {
    this.onRemove.emit(this.contact._id)
    console.log(this.contact._id)
  }



}
