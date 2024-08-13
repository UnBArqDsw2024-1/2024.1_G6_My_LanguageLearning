import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  constructor (
    private router: Router,
    private route: ActivatedRoute
  ) {}

  logar () {
    console.log("Logar");
    this.router.navigate (['login'], {relativeTo: this.route});
  }

  cadastrar () {
    console.log ("Cadastrar.");
    this.router.navigate (['cadastrar'], {relativeTo: this.route});
  }
}
