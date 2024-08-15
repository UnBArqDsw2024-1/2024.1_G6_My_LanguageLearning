import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly API = "/api/users";

  constructor(
    private httpCliente: HttpClient
  ) { }

  save (record: Partial <User>) {
    console.log (record);
    return this.httpCliente.post <User>(this.API, record).pipe (first ());
  }
}
