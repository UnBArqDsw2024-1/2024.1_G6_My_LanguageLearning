import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.scss'
})
export class CadastrarComponent {

  form: FormGroup;
  hide = signal(true);

  constructor (
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private snackbar: MatSnackBar,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group ({
      nome: [''],
      email: [''],
      senha: ['']
    })
   }

   onSubmit () {
    console.log ("Salvando form");
    this.usersService.save (this.form.value)
    .subscribe ({
      next: (result) => this.onSucess (),
      error: () => this.onError(),
    })
   }

   onCancel () {
    this.location.back ();
   }

   onSucess () {
    this.router.navigate (['linguagem']);
    this.snackbar.open ("Cadastro realizado com sucesso.", '',  {duration: 5000});
   }

   onError () {
    this.snackbar.open ("Erro ao realizar o cadastro.", '',  {duration: 5000});
   }


  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

}
