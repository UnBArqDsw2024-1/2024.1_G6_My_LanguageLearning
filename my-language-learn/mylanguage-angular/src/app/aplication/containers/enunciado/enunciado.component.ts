import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enunciado',
  standalone: true,
  imports: [],
  templateUrl: './enunciado.component.html',
  styleUrls: ['./enunciado.component.scss']
})
export class EnunciadoComponent {
  constructor(private router: Router) {}

  confereR1(nomeCampo: string, respostaCorreta: string): void {
    const elementos = document.getElementsByName(nomeCampo) as NodeListOf<HTMLInputElement>;
    let selecionado = '';

    // Convertendo para array
    const elementosArray = Array.from(elementos);

    for (const elemento of elementosArray) {
      if (elemento.checked) {
        selecionado = elemento.value;
        break;
      }
    }

    const mensagem = document.getElementById(`mensagem-${nomeCampo}`) as HTMLElement;
    if (selecionado === respostaCorreta) {
      mensagem.textContent = 'Resposta Correta! +5xp';
      mensagem.setAttribute('status', 'correta');
    } else {
      mensagem.textContent = 'Resposta Errada! +0xp';
      mensagem.setAttribute('status', 'errada');
    }
    mensagem.style.display = 'block';
  }

  confereR2(nomeCampo: string, respostaCorreta: string): void {
    const elementos = document.getElementsByName(nomeCampo) as NodeListOf<HTMLInputElement>;
    let selecionado = '';

    // Convertendo para array
    const elementosArray = Array.from(elementos);

    for (const elemento of elementosArray) {
      if (elemento.checked) {
        selecionado = elemento.value;
        break;
      }
    }

    const mensagem = document.getElementById(`mensagem-${nomeCampo}`) as HTMLElement;
    if (selecionado === respostaCorreta) {
      mensagem.textContent = 'Resposta Correta! +10xp';
      mensagem.setAttribute('status', 'correta');
    } else {
      mensagem.textContent = 'Resposta Errada! +0xp';
      mensagem.setAttribute('status', 'errada');
    }
    mensagem.style.display = 'block';
  }

  confereAbertaN1(): void {
    const mensagem = document.querySelector('#mensagem-aberta') as HTMLElement;
    const entrada = document.querySelector('#resposta-aberta') as HTMLInputElement;
    const respostaCorreta = 'vet'; 

    const entradaUsuario = entrada.value.trim().toLowerCase();

    if (entradaUsuario === respostaCorreta) {
      mensagem.textContent = 'Resposta Correta! +15xp';
      mensagem.setAttribute('status', 'correta');
    } else {
      mensagem.textContent = 'Resposta Errada! +0xp';
      mensagem.setAttribute('status', 'errada');
    }
    mensagem.style.display = 'block';
  }

  confereAbertaN2(): void {
    const mensagem = document.querySelector('#mensagem-aberta') as HTMLElement;
    const entrada = document.querySelector('#resposta-aberta') as HTMLInputElement;
    const respostaCorreta = 'resposta'; 

    const entradaUsuario = entrada.value.trim().toLowerCase();

    if (entradaUsuario === respostaCorreta) {
      mensagem.textContent = 'Resposta Correta! +15xp';
      mensagem.setAttribute('status', 'correta');
    } else {
      mensagem.textContent = 'Resposta Errada! +0xp';
      mensagem.setAttribute('status', 'errada');
    }
    mensagem.style.display = 'block';
  }

  confereAbertaN3(): void {
    const mensagem = document.querySelector('#mensagem-aberta') as HTMLElement;
    const entrada = document.querySelector('#resposta-aberta') as HTMLInputElement;
    const respostaCorreta = 'resposta'; 

    const entradaUsuario = entrada.value.trim().toLowerCase();

    if (entradaUsuario === respostaCorreta) {
      mensagem.textContent = 'Resposta Correta! +15xp';
      mensagem.setAttribute('status', 'correta');
    } else {
      mensagem.textContent = 'Resposta Errada! +0xp';
      mensagem.setAttribute('status', 'errada');
    }
    mensagem.style.display = 'block';
  }

  retornarHome(): void {
    this.router.navigate(['/home'])
  }
}
