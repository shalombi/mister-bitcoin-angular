import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent implements OnInit {
  constructor(private bitcoinService: BitcoinService, private userService: UserService) { }
  // constructor(private userService: UserService) { }

  users$!: Observable<User[]>
  rate!: number | any

  ngOnInit(): void {
    // this.userService.query()
    // this.users$ = this.userService.users$
    // console.log(this.users$)
  }
}
