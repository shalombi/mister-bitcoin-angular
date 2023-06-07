import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'preview-user',
  templateUrl: './preview-user.component.html',
  styleUrls: ['./preview-user.component.scss']
})
export class PreviewUserComponent implements OnInit {
  constructor(private bitcoinService: BitcoinService) { }
  @Input() user!: User

  userBTCamount!: number | any


  ngOnInit(): void {

    this.userBTCamount = this.bitcoinService.getRate(8)
  }


}
