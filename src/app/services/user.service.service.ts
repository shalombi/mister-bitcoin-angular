import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  private _usersDB = [

    {
      name: "Ochoa Hyde",
      coins: 100,
      moves: [1]
    },
    {
      name: "Shuki",
      coins: 200,
      moves: [1]
    }

  ]


  private _users$ = new BehaviorSubject <User[]> ([])
  public users$ = this._users$.asObservable()

  public query() {
    // const filterBy = this._petFilter$.value

    // const filterBy = { term: '' }

    // let user_  = this._usersDB.filter(({ name = '' }) => {
    //   return name.toLowerCase().includes(filterBy.term.toLowerCase())
    // })

    this._users$.next(this._usersDB)
  }


}

