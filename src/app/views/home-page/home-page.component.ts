import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private userService: UserService) { }

  users$!: Observable<User[]>
  ngOnInit(): void {
    this.userService.query()
    this.users$ = this.userService.users$
    // console.log(this.users$)
  }
}
