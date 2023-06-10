import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  contact!: Contact
  subscription!: Subscription

  ngOnInit(): void {
    // console.log(this.route.params,'this.route.params')
    
    this.subscription = this.route.params.subscribe(async ({ id }) => {
      this.contact = id
        ? await lastValueFrom(this.contactService.getContactById(id))
        : this.contactService.getEmptyContact() as Contact

    })
  }

  async onSaveContact() {
    // await lastValueFrom(this.petService.save(this.pet))

    await lastValueFrom(this.contactService.saveContact(this.contact)) 
    this.router.navigateByUrl('/contact')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
