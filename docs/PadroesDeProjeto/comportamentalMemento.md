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
&emsp;&emsp;Abaixo, na figura 1, foi desenvolvido pelos participantes o UML do Memento. 

&emsp;&emsp;O UML do GoF comportamental de Memento foi inspirado utilizando como base dois UMLs, um do site Guru <a href="https://Link_da_fonte">[1]</a> e outro de um exemplo mostrado pela professora dessa disciplina. Ambos podem ser visualizados pelos links referentes na bibliografia.

&emsp;&emsp;Explicando o UML, ele possui três classes: a `Originadora`, o `Memento` e a `Cuidadora`. A `Originadora` tem um atributo privado e dois métodos públicos: um que salva o memento, criando-o com a pontuação atual, e outro que restaura a pontuação anterior. Na classe `Memento`, ele tem dois métodos: um que retorna a pontuação e outro que armazena essa pontuação. Na `Cuidadora`, que possui dois atributos (um do tipo array), há o método `desfazer` que reverte a pontuação atual para a anterior, e o método que adiciona no array os estados de pontuação do nível.

&emsp;&emsp;A ideia principal do UML é que a `Originadora` salva e restaura as pontuações, o `Memento` armazena os estados anteriores ao atual e a `Cuidadora` mantém esse histórico de mementos, podendo desfazer para as pontuações anteriores.
</p>

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
&emsp;&emsp;Esse código, desenvolvido na linguagem java, segue o UML da Figura 1, o main presente serve para dar o início para a compilação.
</p>


`Cuidadora:`

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

`Memento:`

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

`Originadora:`

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

`Main:`

```ruby
package memento;

public class Main {
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

### Saída

&emsp;&emsp;A saída do código está na Figura 2, que mostra o resultado no terminal e demonstra o código funcionando conforme esperado. Ele exibiu a pontuação atual e, ao realizar a operação de desfazer, foi possível observar que a pontuação realmente retornou aos estados anteriores.

&emsp;&emsp;Esta saída é apenas um teste, uma forma de mostrar que o sistema está funcionando. No resultado final, não será assim, será utilizado para quando o usuário precisar voltar a níveis (fases) em que já havia feito questões, e a pontuação é fundamental nesse contexto. Por isso, foi implementado especificamente para a pontuação. Quando o usuário retorna a um nível (fase) para refazê-lo, a pontuação atual é desfeita e será somada ao número resultante do desfazer para o estado anterior. Porque, ele tentará realizar as questões e receberá uma nova pontuação.
 
</p>

<h6 align="center">Figura 2: Saída do código do GoF de Memento.</h6>
<div align="center">

![saidaComposite](img/saidaMemento.jpeg)

</div>
<h6 align="center">Fonte: Autoria própria, 2024</a>.



## **Bibliografia**

> REFACTORING GURU. Design Patterns: Memento. Disponível em: <https://refactoring.guru/design-patterns/memento>. Acesso em: 17 jul. 2024.


## **Histórico de Versão**

| Versão | Data       | Descrição            | Autor(es)                                           | Revisor(es) |
| ------ | ---------- | -------------------- | --------------------------------------------------- | ----------- |
| `1.0`  | 22/07/2024 | Criação do documento e da estrutura | [Maria Eduarda Barbosa](https://github.com/Madu01) |    [Marina Márcia](https://github.com/The-Boss-Nina)       |
| `1.1`  | 22/07/2024 | Finalização do UML |   [Luis Henrique](https://github.com/luishenrrique), [Marina Márcia](https://github.com/The-Boss-Nina), [Laura Pinos](https://github.com/laurapinos), [Maria Eduarda Barbosa](https://github.com/Madu01), [Maria Eduarda Marques](https://github.com/EduardaSMarques), [Carolina Barbosa](https://github.com/CarolinaBarb), [Felipe Direito](https://github.com/FelipeDireito) e [Felipe Hansen](https://github.com/FHansen98) | [Luis Henrique](https://github.com/luishenrrique), [Marina Márcia](https://github.com/The-Boss-Nina) e [Maria Eduarda Barbosa](https://github.com/Madu01)  |
| `1.2`  | 24/07/2024 | Adição do quadro de participantes | [Marina Márcia](https://github.com/The-Boss-Nina)   |   [João Lucas](https://github.com/Jlmsousa)                   |
| `1.3`  | 24/07/2024 | Adição do código do memento |  [João Lucas](https://github.com/Jlmsousa)                   | [Marina Márcia](https://github.com/The-Boss-Nina)   |
| `1.X`  | 25/07/2024 | Adição de conteúdo nos tópicos de desenvolvimento: UML Composite, Código do UML Composite e saída  | [Maria Eduarda Barbosa](https://github.com/Madu01) |  [Maria Eduarda Marques](https://github.com/EduardaSMarques)      |

