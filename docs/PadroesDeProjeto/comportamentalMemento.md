# Memento

## Participantes

| Nome                                                        |
| ----------------------------------------------------------- |
| [Luis Henrique](https://github.com/luishenrrique)           |
| [Marina Márcia](https://github.com/The-Boss-Nina)           |
| [Laura Pinos](https://github.com/laurapinos)                |
| [Maria Eduarda Barbosa](https://github.com/Madu01)          |
| [Maria Eduarda Marques](https://github.com/EduardaSMarques) |
| [João Lucas](https://github.com/Jlmsousa)                   |
| [Júlia Souza](https://github.com/JuliaSSouza)               |
| [Carolina Barbosa](https://github.com/CarolinaBarb)         |
| [Felipe Direito](https://github.com/FelipeDireito)          |
| [Felipe Hansen](https://github.com/FHansen98)               |



## **Introdução**

<p align="justify">
&emsp;&emsp;texto
</p>

## **Objetivo**

<p align="justify">
&emsp;&emsp;
</p>

## **Metodologia**

<p align="justify">
&emsp;&emsp;
</p>

## **UML Memento**

<p align="justify">
&emsp;&emsp; Abaixo, na figura 1, foi desenvolvido pelos participantes o UML do Memento.

<h6 align="center">Figura 1: UML Memento.</h6>
<!-- <div align="center"> -->

![memento](./img/diag-comportamental-memento.png)

<div>
    <h6 align="center">Fonte: 
        <a href="https://github.com/luishenrrique">COSTA</a>, 
        <a href="https://github.com/The-Boss-Nina">SOUZA</a>, 
        <a href="https://github.com/laurapinos">PINOS</a>, 
        <a href="https://github.com/Madu01">BARBOSA</a>, 
        <a href="https://github.com/EduardaSMarques">MARQUES</a>, 
        <a href="https://github.com/Jlmsousa">SOUSA</a>, 
        <a href="https://github.com/CarolinaBarb">BRITO</a>,
        <a href="https://github.com/JuliaSSouza">SANT'ANA</a>,
        <a href="https://github.com/FelipeDireito">DIREITO</a>,
        <a href="https://github.com/FHansen98">HANSEN</a>.
        2024.
    </h6>
</div>

</p>

## **Código do UML Memento**

<p align="justify">
&emsp;&emsp;
</p>


Cuidadora:

```ruby
package memento;

import java.util.ArrayList;
import java.util.List;

public class Cuidadora {
    private Originadora originadora;
    private List<Memento> historico;

    public Cuidadora(Originadora originadora) {
        this.originadora = originadora;
        this.historico = new ArrayList<>();
    }

    public void desfaz() {
        if (!historico.isEmpty()) {
            Memento memento = historico.remove(historico.size() - 1);
            originadora.restauraNivel(memento);
        }
    }

    public void addHistorico() {
        historico.add(originadora.salvaNivel());
    }
}
```

Memento:

```ruby
package memento;

public class Memento {
    private final int pontuacao;

    public Memento(int pontuacao) {
        this.pontuacao = pontuacao;
    }

    public int getPontuacao() {
        return pontuacao;
    }
}
```

Originadora:

```ruby
package memento;

public class Originadora {
    private int pontuacao;

    public void setPontuacao(int pontuacao) {
        this.pontuacao = pontuacao;
    }

    public int getPontuacao() {
        return pontuacao;
    }

    public Memento salvaNivel() {
        return new Memento(pontuacao);
    }

    public void restauraNivel(Memento lembranca) {
        this.pontuacao = lembranca.getPontuacao();
    }
}
```

MementoPatterDemo:

```ruby
package memento;

public class MementoPatternDemo {
    public static void main(String[] args) {
        Originadora originadora = new Originadora();
        Cuidadora cuidadora = new Cuidadora(originadora);

        originadora.setPontuacao(10);
        cuidadora.addHistorico();

        originadora.setPontuacao(20);
        cuidadora.addHistorico();

        originadora.setPontuacao(30);
        System.out.println("Pontuação atual ( " + originadora.getPontuacao() + " ).");

        cuidadora.desfaz();
        System.out.println("Operação desfazer: Pontuação atual ( " + originadora.getPontuacao() + " ).");

        cuidadora.desfaz();
        System.out.println("Operação desfazer: Pontuação atual ( " + originadora.getPontuacao() + " ).");
    }
}
```

## **Bibliografia**

> Prototype,Refactoring Guru. Acesso em: 22 jul. 2024 (colocar link)

## **Histórico de Versão**

| Versão | Data       | Descrição            | Autor(es)                                           | Revisor(es) |
| ------ | ---------- | -------------------- | --------------------------------------------------- | ----------- |
| `1.0`  | 22/07/2024 | Criação do documento e da estrutura | [Maria Eduarda Barbosa](https://github.com/Madu01) |    [Marina Márcia](https://github.com/The-Boss-Nina)       |
| `1.1`  | 22/07/2024 | Finalização do UML |   [Luis Henrique](https://github.com/luishenrrique), [Marina Márcia](https://github.com/The-Boss-Nina), [Laura Pinos](https://github.com/laurapinos), [João Lucas](https://github.com/Jlmsousa), [Julia Souza](https://github.com/JuliaSSouza), [Maria Eduarda Barbosa](https://github.com/Madu01), [Maria Eduarda Marques](https://github.com/EduardaSMarques), [Carolina Barbosa](https://github.com/CarolinaBarb), [Felipe Direito](https://github.com/FelipeDireito) e [Felipe Hansen](https://github.com/FHansen98) | [Luis Henrique](https://github.com/luishenrrique), [Marina Márcia](https://github.com/The-Boss-Nina) e [Maria Eduarda Barbosa](https://github.com/Madu01)  |
| `1.2`  | 24/07/2024 | Adição do quadro de participantes | [Marina Márcia](https://github.com/The-Boss-Nina)   |   [João Lucas](https://github.com/Jlmsousa)                   |
| `1.3`  | 24/07/2024 | Adição do código do memento |  [João Lucas](https://github.com/Jlmsousa)                   | [Marina Márcia](https://github.com/The-Boss-Nina)   |
