import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  form: FormGroup;
  hide = signal(true);

  constructor (
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
  }

}
