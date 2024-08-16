import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-linguagem',
  templateUrl: './linguagem.component.html',
  styleUrl: './linguagem.component.scss'
})
export class LinguagemComponent {

  constructor (
    private usersService: UsersService,
    private router: Router
  ) {}

  goToHome() {
    this.router.navigate(['/home'])
  }

  espanhol () {

  }

  ingles () {

  }

}
