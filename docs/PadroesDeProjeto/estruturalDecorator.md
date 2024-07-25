# Decorator

## Participantes

| Nome                                                        |
| ----------------------------------------------------------- |
| [Luis Henrique](https://github.com/luishenrrique)           |
| [Marina Márcia](https://github.com/The-Boss-Nina)           |
| [Laura Pinos](https://github.com/laurapinos)                |
| [Maria Eduarda Barbosa](https://github.com/Madu01)          |
| [Maria Eduarda Marques](https://github.com/EduardaSMarques) |
| [Pedro Augusto](https://github.com/PedroSiq)                |
| [Matheus Perillo](https://github.com/MatheusPerillo)        |
| [João Lucas](https://github.com/Jlmsousa)                   |
| [Júlia Souza](https://github.com/JuliaSSouza)               |
| [Carolina Barbosa](https://github.com/CarolinaBarb)         |
| [Felipe Direito](https://github.com/FelipeDireito)          |
| [Felipe Hansen](https://github.com/FHansen98)               |

## **Introdução**

<p align="justify">
&emsp;&emsp; O Decorator é um padrão de projeto estrutural focado em componentes concretos e componentes decoradores. É facilmente compreendido para um frontend onde temos uma página estática como componente concreto. Para adicionar funcionalidades ou elementos decorativos (como botões, etc.), podemos usar componentes decoradores que podem ser reutilizados.
</p>

## **Objetivo**

<p align="justify">
&emsp;&emsp; O objetivo do Decorator para o nosso projeto é modelar a estrutura visual da aplicação. Isto é feito com possibilidades de alteração de cores, contraste e tema, e incluem uma otimização para a acessibilidade de pessoas com alguma deficiencia visual.
</p>

## **Metodologia**

<p align="justify">
&emsp;&emsp;
</p>

## **UML Decorator**

<p align="justify">
&emsp;&emsp;
</p>

![decorator](./img/diag-estrutural-decorator.jpeg)


## **Código do UML Decorator**

<p align="justify">
&emsp;&emsp;
</p>

Componente:

```ruby
package src.component;

public interface Tela {
    public void modoVisualCor ();

    public String tipoTema();
}


```

Tela Base:

```ruby
package src.concreteComponent;
import src.component.Tela;

public class TelaBase implements Tela {

    private int brilho, cor;
    public TelaBase(int brilho, int cor){
        this.brilho = brilho;
        this.cor = cor;
    }
    @Override
    public void modoVisualCor(){
        System.out.println("Parâmetros Tela: brilho: " + brilho + ", cor: " + cor);
    }

    @Override
    public String tipoTema(){
        return "Tema Padrão";
    }
}
```


Decorator:
```ruby
package src.decorator;

import src.component.Tela;

import java.util.ArrayList;
import java.util.List;

public class DecoratorTela implements Tela {
    private List<Tela> temas = new ArrayList();

    public DecoratorTela(Tela tema) {
        this.addTela(tema);
    }

    public void addTela(Tela tema){
        this.temas.add(tema);
    }
    public void removeTela(Tela tema){
        this.temas.remove(tema);
    }

    @Override
    public void modoVisualCor() {
        for(Tela tema : this.temas){
            tema.modoVisualCor();
//            tema.tipoTema();
        }
    }
    @Override
    public String tipoTema() {
        for(Tela tema : this.temas){
            tema.tipoTema();
            return "Tema:";
        }
        return "";
    }
}

```

Decorator Tela:
```ruby
package src.concreteDecoratorTela;
import src.decorator.DecoratorTela;
import src.component.Tela;

public class TelaTemaEscuro extends DecoratorTela {
    private String tipoEscuro = "Escuro";

    public TelaTemaEscuro(Tela tema){
        super (tema);
    }

    @Override
    public void modoVisualCor() {
        super.modoVisualCor();
        System.out.println("Componente decorado (TelaTemaEscuro)");
    }

    @Override
    public String tipoTema() {
        super.tipoTema();
        return "Alterou o tema para " + this.tipoEscuro;
    }
}

```

```ruby
package src.concreteDecoratorTela;

import src.decorator.DecoratorTela;
import src.component.Tela;

public class TelaTemaContraste extends DecoratorTela {
    private String tipoContraste = "Contraste";

    public TelaTemaContraste(Tela tela){
        super(tela);
    }

    public void modoVisualCor() {
        super.modoVisualCor();
        System.out.println("Componente decorado (TelaTemaContraste)");
    }

    @Override
    public String tipoTema() {
        super.tipoTema();
        return "Alterou o tema para " + this.tipoContraste;
    }
}

```

Principal:
```ruby
package src.teste;
import src.component.Tela;
import src.concreteComponent.TelaBase;
import src.concreteDecoratorTela.TelaTemaEscuro;
import src.concreteDecoratorTela.TelaTemaContraste;

public class Teste {
    public static void main(String[] args) {

        TelaBase tema = new TelaBase(50, 54);
        Tela tema1 = (Tela) tema;
        Tela tema2 = new TelaTemaContraste(tema1);
        Tela tema3 = new TelaTemaContraste(tema2);
        Tela tema4 = new TelaTemaEscuro(tema3);

        tema4.modoVisualCor();
        System.out.println(tema3.tipoTema());
        System.out.println(tema4.tipoTema());
    }
}

```

Resposta:

![resposta](./img/resposta-codigo-decorator.jpeg)
<div>
    <h6 align="center"> Resposta do Código. Fonte: Intellij, 2024.
    </h6>
</div>

## **Bibliografia**

> 

## **Histórico de Versão**

| Versão | Data       | Descrição            | Autor(es)                                           | Revisor(es) |
| ------ | ---------- | -------------------- | --------------------------------------------------- | ----------- |
| `1.0`  | 22/07/2024 | Criação do documento e da estrutura | [Maria Eduarda Barbosa](https://github.com/Madu01) |    [Marina Márcia](https://github.com/The-Boss-Nina)       |
| `1.1`| 24/07/2024 | Adiciona UML, introdução e objetivo | [Felipe Direito](https://github.com/FelipeDireito)  |  [Felipe Hansen](https://github.com/FHansen98)  |
| `1.2`| 24/07/2024 | Adiciona começo do código | [Felipe Hansen](https://github.com/FHansen98)  |  [Felipe Direito](https://github.com/FelipeDireito)  |
| `1.3`| 25/07/2024 | Finalizando código | [Felipe Hansen](https://github.com/FHansen98)  |  [Luis Henrique Luz Costa ](https://github.com/luishenrrique)   |
