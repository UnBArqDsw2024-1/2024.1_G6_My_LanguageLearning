function confereR1(nomeCampo, respostCorreta) {
    const elementos = document.getElementsByName(nomeCampo);
    let selecionado = '';

    for (const elemento of elementos) {
        if (elemento.checked) {
            selecionado = elemento.value;
            break;
        }
    }

    const mensagem = document.getElementById(`mensagem-${nomeCampo}`);
    if (selecionado === respostCorreta) {
        mensagem.textContent = 'Resposta Correta! +5xp';
        mensagem.style.color = 'green';
    } else {
        mensagem.textContent = 'Resposta Errada! +0xp';
        mensagem.style.color = 'red';
    }
    mensagem.style.display = 'block';
}

function confereR2(nomeCampo, respostCorreta) {
    const elementos = document.getElementsByName(nomeCampo);
    let selecionado = '';

    for (const elemento of elementos) {
        if (elemento.checked) {
            selecionado = elemento.value;
            break;
        }
    }

    const mensagem = document.getElementById(`mensagem-${nomeCampo}`);
    if (selecionado === respostCorreta) {
        mensagem.textContent = 'Resposta Correta! +10xp';
        mensagem.setAttribute('status', 'correta');
    } else {
        mensagem.textContent = 'Resposta Errada! +0xp';
        mensagem.setAttribute('status', 'errada');
    }
    mensagem.style.display = 'block';
}

function confereAbertaN1() {
    const mensagem = document.querySelector('#mensagem-aberta');
    const entrada = document.querySelector('#resposta-aberta');
    const respostCorreta = 'vet'; 

    const entradaUsuario = entrada.value.trim().toLowerCase();

    if (entradaUsuario === respostCorreta) {
        mensagem.textContent = 'Resposta Correta! +15xp';
        mensagem.setAttribute('status', 'correta');
    } else {
        mensagem.textContent = 'Resposta Errada! +0xp';
        mensagem.setAttribute('status', 'errada');
    }
    mensagem.style.display = 'block';
}

function confereAbertaN2() {
    const mensagem = document.querySelector('#mensagem-aberta');
    const entrada = document.querySelector('#resposta-aberta');
    const respostCorreta = 'resposta'; 

    const entradaUsuario = entrada.value.trim().toLowerCase();

    if (entradaUsuario === respostCorreta) {
        mensagem.textContent = 'Resposta Correta! +15xp';
        mensagem.setAttribute('status', 'correta');
    } else {
        mensagem.textContent = 'Resposta Errada! +0xp';
        mensagem.setAttribute('status', 'errada');
    }
    mensagem.style.display = 'block';
}

function confereAbertaN3() {
    const mensagem = document.querySelector('#mensagem-aberta');
    const entrada = document.querySelector('#resposta-aberta');
    const respostCorreta = 'resposta'; 

    const entradaUsuario = entrada.value.trim().toLowerCase();

    if (entradaUsuario === respostCorreta) {
        mensagem.textContent = 'Resposta Correta! +15xp';
        mensagem.setAttribute('status', 'correta');
    } else {
        mensagem.textContent = 'Resposta Errada! +0xp';
        mensagem.setAttribute('status', 'errada');
    }
    mensagem.style.display = 'block';
}
