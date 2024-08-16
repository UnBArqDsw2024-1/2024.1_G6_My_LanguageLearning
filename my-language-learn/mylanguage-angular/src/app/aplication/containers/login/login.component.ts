import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  form: FormGroup;
  hide = signal(true);

  constructor (
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group ({
      nome: [''],
      senha: ['']
    })
  }


  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  onSubmit () {
    console.log ("Logar");
    console.log (this.form.value)
    this.router.navigate(['/home'])
  }

}
