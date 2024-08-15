import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrl: './questoes.component.scss'
})
export class QuestoesComponent {

  constructor(private http: HttpClient) {}
  
  onButtonClick() {
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
