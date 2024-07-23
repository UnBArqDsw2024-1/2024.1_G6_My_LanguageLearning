# Composite

## Participantes

| Nome |
| ---- |
|      |

## **Introdução**

<p align="justify">
&emsp;&emsp;O padrão Composite é um padrão de projeto estrutural e é usado para tratar objetos individuais e composições de objetos de maneira uniforme. 
</p>

## **Objetivo**

<p align="justify">
&emsp;&emsp; O objetivo deste padrão de projeto estrutural permite tratar objetos individuais e coleções de objetos de forma consistente. Isso é útil para quando se tem uma estrutura hierárquica, como uma árvore, onde se deseja tratar folhas e nós internos da mesma maneira.
</p>

## **Metodologia**

<p align="justify">
&emsp;&emsp;
</p>

## **UML Composite**

<p align="justify">
&emsp;&emsp; Abaixo, na figura 1, foi desenvolvido pelos participantes o UML do Composite.

<h6 align="center">Figura 1: UML Composite.</h6>
<div align="center">

![composite](./img/diag-estrutural-composite.png)

</div>
<h6 align="center">Fonte: Autoria própria. 2024.</h6>
</p>

## **Código do UML Composite**

<p align="justify">
&emsp;&emsp;
</p>

Componente:

```ruby
package compositenosso.componente;

public interface QuestaoNivel {

    public void exibeQuestao ();
}
```

Folhas:

```ruby package compositenosso.leaf;

import compositenosso.componente.QuestaoNivel;

public class QuestaoLacuna implements QuestaoNivel {
    private int nivel;
    private String pergunta;
    private String respostaCorreta;

    public QuestaoLacuna () {

    }

    public QuestaoLacuna(String pergunta, String respostaCorreta, int nivel) {
        this.respostaCorreta = respostaCorreta;
        this.pergunta = pergunta;
        this.nivel = nivel;
    }

    public void pergunta() {
        System.out.println("--------------------------------------------------------------");
        System.out.println("Preencha a Lacuna a seguir com a resposta correta:");
        System.out.println(pergunta);
    }

    public boolean resposta(String resposta) {
        return this.respostaCorreta.equals(resposta);
    }

    public int nivelAtual() {
        return this.nivel;
    }

    @Override
    public void exibeQuestao() {
        pergunta();
        System.out.println("Nível da questão: " + nivelAtual());
        System.out.println("Sua resposta: Adapter");
        System.out.println(resposta("Adapter") ? "Acertou a resposta!!!\n" : "Errou, tente novamente :(\n");
    }
}
```

```ruby package compositenosso.leaf;

import compositenosso.componente.QuestaoNivel;

public class QuestaoMultipla implements QuestaoNivel {
    private int nivel;
    private String pergunta;
    private String respostaCorreta;

    public QuestaoMultipla(String pergunta, String respostaCorreta, int nivel) {
        this.respostaCorreta = respostaCorreta;
        this.pergunta = pergunta;
        this.nivel = nivel;
    }


    public void pergunta() {
        System.out.println("--------------------------------------------------------------");
        System.out.println("Escolha uma das opções a seguir:");
        System.out.println(pergunta);
        System.out.println("[ ] Template");
        System.out.println("[ ] Abstract Factory");
        System.out.println("[ ] Composite");
        System.out.println("[ ] Memento");
    }


    public boolean resposta(String resposta) {
        return this.respostaCorreta.equals(resposta);
    }


    public int nivelAtual() {
        return this.nivel;
    }

    @Override
    public void exibeQuestao() {
        pergunta();
        System.out.println("Nível da questão: " + nivelAtual());
        System.out.println("Sua resposta: Composite");
        System.out.println(resposta("Composite") ? "Acertou a resposta!!!\n" : "Errou, tente novamente :(\n");
    }
}

```

```ruby package compositenosso.leaf;

import compositenosso.componente.QuestaoNivel;

public class QuestaoVF implements QuestaoNivel {

    private int nivel;
    private String pergunta;
    private String respostaCorreta;

    public QuestaoVF () {}

    public QuestaoVF(String respostaCorreta, int nivel) {
        this.respostaCorreta = respostaCorreta;
        this.nivel = nivel;
    }

    public QuestaoVF (String pergunta, String respostaCorreta, int nivel) {
        this.pergunta = pergunta;
        this.respostaCorreta = respostaCorreta;
        this.nivel = nivel;
    }


    public void pergunta() {
        System.out.println("--------------------------------------------------------------");
        System.out.println("Julgue a seguite afirmação em verdadeiro ou falso:");
        System.out.println(pergunta);
        System.out.println("( ) Verdadeiro   ( ) Falso");
    }


    public boolean resposta(String resposta) {
        return this.respostaCorreta.equals(resposta);
    }


    public int nivelAtual() {
        return this.nivel;
    }


    @Override
    public void exibeQuestao() {
        pergunta();
        System.out.println("Nível da questão: " + nivelAtual());
        System.out.println("Sua resposta: V");
        System.out.println(resposta("V") ? "Acertou a resposta!!!\n" : "Errou, tente novamente :(\n");
    }
}
```

Composite:

```ruby package compositenosso.composite;

import compositenosso.componente.QuestaoNivel;

import java.util.ArrayList;
import java.util.List;

public class QuadroDeQuestao implements QuestaoNivel {
    private List<QuestaoNivel> questoes = new ArrayList<QuestaoNivel>();

    public void adicionarQuestao (QuestaoNivel q) {
        this.questoes.add(q);
    }

    public void removerQuestao (QuestaoNivel q) {
        this.questoes.remove(q);
    }

    @Override
    public void exibeQuestao() {
        System.out.println("======================\nQUADRO DE QUESTÕES:\n======================");
        for (QuestaoNivel q : questoes) {
            q.exibeQuestao();
        }
        System.out.println();
    }
}
```

Principal (main):

```ruby package compositenosso.teste;

import compositenosso.componente.QuestaoNivel;
import compositenosso.composite.QuadroDeQuestao;
import compositenosso.leaf.QuestaoLacuna;
import compositenosso.leaf.QuestaoMultipla;
import compositenosso.leaf.QuestaoVF;

public class Main {
    public static void main(String[] args) {
        QuestaoNivel qvf = new QuestaoVF("Polimorfismo permite acessar atributos.", "V", 2);
        QuestaoNivel qvf1 = new QuestaoVF("Encapsulamento permite herdar métodos.", "F", 1);
        QuestaoNivel lac = new QuestaoLacuna("O conceito de ____________ permite sobrescrever métodos.", "Polimorfismo", 3);
        QuestaoNivel lac1 = new QuestaoLacuna("O padrão de projeto ___________ lembra uma utilização de adaptadores de tomada.", "Adapter", 3);
        QuestaoNivel mul = new QuestaoMultipla("Escolha um padrão de projeto GoF Estrutural", "Composite", 3);
        QuestaoNivel mul1 = new QuestaoMultipla("Escolha um padrão de projeto GoF Criacional", "Abstract Factory", 3);


        QuadroDeQuestao lista = new QuadroDeQuestao();
        lista.adicionarQuestao(qvf);
        lista.adicionarQuestao(lac);
        lista.adicionarQuestao(qvf1);
        lista.adicionarQuestao(lac1);
        lista.adicionarQuestao(mul);
        lista.adicionarQuestao(mul1);
        lista.exibeQuestao();


        QuadroDeQuestao lista1 = new QuadroDeQuestao();
        lista1.adicionarQuestao(mul1);
        lista1.adicionarQuestao(lac);
        lista1.adicionarQuestao(qvf);
        lista1.adicionarQuestao(lac1);
        lista1.adicionarQuestao(qvf1);
        lista1.adicionarQuestao(mul);
        lista1.exibeQuestao();

    }
}
```

## **Bibliografia**

>

## **Histórico de Versão**

| Versão | Data       | Descrição                                      | Autor(es)                                            | Revisor(es)                                        |
| ------ | ---------- | ---------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------- |
| `1.0`  | 22/07/2024 | Criação do documento e da estrutura            | [Maria Eduarda Barbosa](https://github.com/Madu01)   | [Marina Márcia](https://github.com/The-Boss-Nina)  |
| `1.1`  | 22/07/2024 | adicionando código realizado pelo grupo        | [Maria Eduarda Barbosa](https://github.com/Madu01)   | [Marina Márcia](https://github.com/The-Boss-Nina)  |
| `1.2`  | 23/07/2024 | Adicionando introdução, objetivos e figura UML | [Matheus Perillo](https://github.com/MatheusPerillo) | [Maria Eduarda Barbosa](https://github.com/Madu01) |
