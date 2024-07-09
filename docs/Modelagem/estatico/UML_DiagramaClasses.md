# ***Diagrama de classes***

## Participantes

| Nome                    |
|-------------------------|
| [Carolina Barbosa](https://github.com/CarolinaBarb)           |
| [Gabriela Lemos](https://github.com/heylisten64)               |
| [João Lucas](https://github.com/Jlmsousa)                     |
| [Júlia Souza](https://github.com/JuliaSSouza)                 |
| [Laura Pinos](https://github.com/laurapinos)                  |   
| [Maria Eduarda Marques](https://github.com/EduardaSMarques)   |


## **Introdução**
<p align="justify">
&emsp;&emsp;O Diagrama de Classe é um diagrama estático da UML (Unified Modeling Language) que fornece uma linguagem visual elementar da estrutura do sistema de software. Nele é possível visualizar as classes, os atributos, os métodos e os relacionamentos entre objetos. Esses elementos, apresentados na notação UML, auxiliam no desenvolvimento da estrutura interna do sistema e tornam o projeto compreensível tanto para a equipe de desenvolvimento quanto para os usuários das áreas de negócio. 

&emsp;&emsp;Na notação as classes são representadas por retângulos dividido em três partes - nome, atributos e métodos - e possuem relacionamentos entre si que podem ser de associação, generalização, dependência, agregação, composição e realização. Os atributos são propriedades da classe, enquanto os métodos são as operações que a classe pode executar. 

&emsp;&emsp;Os Diagramas de Classe são geralmente utilizados nas fases de análise e design do ciclo de vida do desenvolvimento do sistema e são eles que comunicam a base da estrutura interna do sistema aos desenvolvedores afim de trazer maior organização, eficiência e clareza para o desenvolvimento do software.
</p>

## **Objetivo**
<p align="justify">
&emsp;&emsp;Texto .... (coloque os objetivos)
</p>

## **Metodologia**
<p align="justify">
&emsp;&emsp;Para iniciar o desenvolvimento do diagrama, foi utilizado a metodologia de identificar primeiro os responsáveis por sua criação e estabelecer os dias e horários das reuniões, visando contornar os problemas de disponibilidade de todos os participantes. 

&emsp;&emsp;Na primeira reunião, foi realizado um esboço inicial do diagrama, durante o qual os participantes presentes dedicaram-se a estudar o tema em questão, buscando referências em outros repositórios e sites para embasar sua elaboração. Surgiram diversas dúvidas e obstáculos no processo de desenvolvimento, o que sugere que o diagrama presente neste artefato ainda pode passar por modificações em futuras versões. A segunda reunião foi dedicada à conclusão do diagrama e também o artefato sobre ele.



</p>

## **Diagrama**

<h6 align="center">Figura 1: Diagrama de classes.</h6>
<div align="center">

![estadoCadastro](../img/diag-classes.jpg)

</div>
<h6 align="center">Fonte: <a href="https://github.com/EduardaSMarqus">Autoria própria </a>. 2024.</h6>

<br>
<p align="justify">
&emsp;&emsp;A <b>Figura 2</b>, mostra quais serão as classes desenvolvidas neste projeto. No contexto deste projeto, temos as seguintes classes principais: Agendamento, Usuário, Curso, Ranking, Lição e Pontuação. Cada uma dessas classes possui atributos e métodos específicos que definem seu comportamento e funcionalidade dentro do sistema.

&emsp;&emsp; A classe <b>Usuário</b> é central nesse sistema, ela está relacionada a várias outras classes, indicando as diferentes interações que um usuário pode ter dentro do sistema.

&emsp;&emsp;A classe <b>Agendamento</b> está diretamente relacionada à classe Usuário,a relação indica que um usuário pode criar múltiplos agendamentos e cada agendamento está associado a um único usuário.

&emsp;&emsp; A classe <b>Curso</b>, está relacionada com Usuário e a classe <b>Lição</b>, a cardianalidade com o usuário sendo, nenhum ou muitos usuários só podem está matriculados em um curso e um curso pode pertencer a muitos usuários, e a relação entre Curso e Lição, mostra que um curso pode ter várias lições, mas cada lição pertence a um único curso.

&emsp;&emsp;Já na classe <b>Ranking</b>, mostra que um usuário pode ter uma posição em um ranking e o rank pode ter muitos usuário, e o rank pode ter muitas pontuações, entretanto essas pontuações só podem pertencer a um ranking.

&emsp;&emsp;E por último temos a classe <b>Pontuação</b>, que além do que já foi dito acima, ela também pode pertencer ao usuário, indicando que um usuário pode possuir muitos pontos, mas uma pontuação só pode pertencer a um usuário.




</p>


## **Conclusão**
<p align="justify">
&emsp;&emsp;Um diagrama estático de classes é uma representação visual que mostra as classes de um sistema de software, junto com seus atributos, métodos e os relacionamentos entre essas classes. Ele ajuda a entender a estrutura estática do sistema, ou seja, como as partes do sistema estão organizadas e interagem entre si. Ele mostra como as principais entidades do sistema, como Usuário, Curso, Lição, Pontuação, Ranking e Agendamento, se inter-relacionam para proporcionar uma experiência de aprendizagem eficiente e personalizada.
</p>

## **Legenda**

<h6 align="center">Figura 2: legenda do diagrama de classes.</h6>
<div align="center">

![Legenda](https://raw.githubusercontent.com/UnBArqDsw2024-1/2024.1_G6_My_LanguageLearning/main/docs/img/Legenda%20Diagrama.png)
  
</div>
<p align="center">
Fonte: <a href="https://github.com/JuliaSSouza">SOUZA, Julia</a>.2024. </p>

## **Links**
<p align="justify">
<a href="link de referência">nome a ser referenciado</a>
</p>

## **Bibliografia**
> <a href="https://Link_da_fonte">[1]</a> Fonte 1

> <a href="https://Link_da_fonte">[2]</a> Fonte 2

## **Histórico de Versão**
<p align="justify">
&emsp;&emsp;A tabela n representa o histórico de versão do documento.
</p>

<h6 align="center">Figura/Tabela n: Histórico de Versão.</h6>
<div align="center">

| Versão | Data      | Descrição                                   | Autor(es) | Revisor(es) |
| ------ | --------- | ------------------------------------------- | --------- | ---------- |
| `1.0`  | 21/04/2024| Criação do arquivo  | Felipe Hansen    |    Maria Eduarda Barbosa   |
| `1.1`  | 08/07/2024| Adicionando o diagrama de classes e as explicação das relações de cada classe | Maria eduarda Marques    |   Maria Eduarda Barbosa  |
| `1.2`  | 08/07/2024| Adicionando introdução do artefato e realizando pequeno ajuste na tabela de participação | Gabriela Lemos    |     |
| `1.3`  | 08/07/2024| Adicionando a conclusão do artefato | João Lucas    |  Marina Márcia   |
| `1.4`  | 08/07/2024| Adicao da legenda | [Julia Souza](https://github.com/JuliaSSouza)              |         [Felipe Aguiar Hansen](https://github.com/fhansen98)                                        |


</div>
<h6 align="center">Fonte: <a href="https://github.com/Mad01">Autoria Própria</a>. 2024.</h6>
