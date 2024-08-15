import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrl: './questoes.component.scss'
})
export class QuestoesComponent {

  constructor(private http: HttpClient, private router: Router) {}
  
  onButtonClick() {
    this.router.navigate(['/enunciado'])

    this.http.get('http://localhost:8080/api/questoes/1')
    .subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log('Errou!')
      }
    )
  }
}
