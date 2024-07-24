# Decorator

## Participantes

| Nome                                                        |
| ----------------------------------------------------------- |
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
package src.decorator.component;

public interface ComponentTela {
    public void modoVisualCor ();
}

```

Folhas:

```ruby
package src.decorator.component;
import src.decorator.component.ComponentTela;

public class ConcreteTelaBase implements ComponentTela {

    public void ConcreteTelaBase(){

    }
}
```

```ruby
package src.decorator.component;
import src.decorator.component.DecoratorTela;

public class TelaTemaEscuro implements DecoratorTela {
    private boolean tipoEscuro;

    @Override
    public void modoVisualCor() {
        super.modoVisualCor();
    }

    @Override
    public void tipoTema() {
        super.tipoTema();
    }
}
```

```ruby
package src.decorator.component;

public class TelaTemaContraste implements DecoratorTela {
    private boolean tipoContraste;

    @Override
    public void modoVisualCor() {
        super.modoVisualCor();
    }

    @Override
    public void tipoTema() {
        super.tipoTema();
    }
}
```

```ruby
package src.decorator.component;

public class DecoratorTela implements ComponentTela {
    @Override
    public void modoVisualCor() {

    }
    public void tipoTema() {

    }
}
```
Decorator:

Principal:


## **Bibliografia**

> 

## **Histórico de Versão**

| Versão | Data       | Descrição            | Autor(es)                                           | Revisor(es) |
| ------ | ---------- | -------------------- | --------------------------------------------------- | ----------- |
| `1.0`  | 22/07/2024 | Criação do documento e da estrutura | [Maria Eduarda Barbosa](https://github.com/Madu01) |    [Marina Márcia](https://github.com/The-Boss-Nina)       |
| `1.1`| 24/07/2024 | Adiciona UML | [Felipe Direito](https://github.com/FelipeDireito)  |  [Felipe Hansen](https://github.com/FHansen98)  |
| `1.2`| 24/07/2024 | Adiciona Começo do Código | [Felipe Hansen](https://github.com/FHansen98)  |  [Felipe Direito](https://github.com/FelipeDireito)  |