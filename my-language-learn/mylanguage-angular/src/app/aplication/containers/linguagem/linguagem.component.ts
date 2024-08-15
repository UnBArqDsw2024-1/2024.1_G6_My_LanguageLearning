import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-linguagem',
  templateUrl: './linguagem.component.html',
  styleUrl: './linguagem.component.scss'
})
export class LinguagemComponent {

  constructor (
    private usersService: UsersService
  ) {}

  espanhol () {

  }

  ingles () {

  }

}
