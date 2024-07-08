# ***Diagrama de Estados***

## **Introdução**
<p align="justify">
&emsp;&emsp;Diagrama de estados é uma ferramenta essencial na modelagem dos aspectos dinâmicos de sistemas. Elas são utilizadas para especificar as sequências de estados que um objeto atravessa durante sua vida em resposta a eventos, bem como as respostas desses objetos a esses eventos. Um estado representa uma condição ou situação durante a vida de um objeto na qual ele satisfaz determinadas condições, realiza atividades ou espera por eventos. Eventos são ocorrências significativas que podem desencadear transições de estado, enquanto transições são relações entre estados que indicam mudanças específicas quando eventos ocorrem e condições são satisfeitas. Diagrama de estados, que representam graficamente esses conceitos, são fundamentais para entender e documentar o comportamento de objetos dentro de um sistema <a href="">[5]</a> .
</p>

## **Objetivo**
<p align="justify">
&emsp;&emsp;O objetivo deste documento é complementar a descrição das classes, documentando os estados possíveis que os objetos de uma certa classe podem assumir e os eventos do sistema que geram tais mudanças. Este documento busca especificar a dinâmica do sistema através de diagrama de estados, reunindo o comportamento completo de uma classe em todos os casos de uso relevantes. Assim, o diagrama de estados oferece uma visão global do comportamento dos objetos de uma classe, permitindo prever todos os comportamentos possíveis de um objeto de acordo com os eventos que ele possa sofrer. Além disso, o documento visa esclarecer quando e como utilizar diagramas de estado, destacando suas notações e a importância de analisar a mudança de estados para capturar o ciclo de vida dos objetos, subsistemas e sistemas.
</p>

## **Metodologia**
<p align="justify">
&emsp;&emsp;A metodologia adotada para o desenvolvimento do diagrama envolveu a realização de duas reuniões. Na primeira reunião, os responsáveis apresentaram suas ideias e com base em conteúdos e exemplos relacionados ao diagrama de estados, colaboraram na criação de um esboço inicial. Durante essa fase, a equipe avaliou diferentes exemplos para determinar as melhores práticas a serem aplicadas no desenvolvimento do diagrama, identificando elementos e estados que seriam mais adequados para o projeto, mas ainda surgiu dúvidas se estava correto. Antes da segunda reunião, os responsáveis mostraram o diagrama para a professora com o intuito de retirar dúvidas e aplicar melhorias.

&emsp;&emsp;Na segunda reunião, o foco foi a finalização do diagrama e a organização das responsabilidades para a elaboração do artefato do diagrama de estados, no caso este documento. Nesse encontro, os membros da equipe trabalharam em conjunto para melhorar o esboço inicial, com correções a respeito do que foi percebido que havia de errado e pelas dicas da professora. 

</p>

## **Diagramas de Estado**

## **Legenda**

<h6 align="center">Figura/Tabela n: Nome da figura/tabela.</h6>
<div align="center">
  
(Coloque a Figura/Tabela aqui, lembrando que tem que haver um espaço acima e embaixo da Figura/Tabela para não quebrar a tabela no .md)

</div>
<h6 align="center">Fonte: <a href="https://github.com/fulanodetal">SOBRENOME, Nome</a>; <a href="https://github.com/fulanodetal">SOBRENOME, Nome</a>. 2024.</h6>


<p align="justify">
&emsp;&emsp;Texto .... (Desenvolva o artefato por aqui)
</p>

#### **Estado composto Cadastrando**

<h6 align="center">Figura 4: estado composto cadastrando.</h6>
<div align="center">

![estadoCadastro](../img/diag-estado-cadastrando.jpg)

</div>
<h6 align="center">Fonte: <a href="https://github.com/EduardaSMarques">MARQUES, Maria eduarda</a>. 2024.</h6>

<br>
<p align="justify">
&emsp;&emsp;A <b>Figura 4</b>, representa o estado composto cadastrando, iniciando-se pelo estado simples, <b>Entrando dados cadastrais </b>, onde irá ocorrer a entrada de dados do usuário para o cadastramento dele no sistema. Logo após o cadastramento,irá ocorrer uma mudança de evento, que estará sendo representado pelo símbolo de escolha, onde levará a dois caminhos, o primeiro sendo o de <b>Invalidado</b>, que ocorrerá quando o usuário entrar com algum dado incorreto, fazendo que ocorra o estado simples <b>Enviando identificação de erro
</b>, que criará um pop-up para o usuário fazer as correções e logo após retornar novamente para a tela de cadastro. Por fim, quando o usuário adicionar os dados corretamentes, o segundo caminho será o de <b>Validado</b> que acontece quando o usuário finaliza o cadastro e faz com que ocorra um novo evento para ir para o próximo estado composto.

</p>


## **Conclusão**
<p align="justify">
&emsp;&emsp;Texto .... (explique a conclusão que se teve a respeito do desenvolvimento do artefato)
</p>


## **Links**
<p align="justify">
<a href="link de referência">nome a ser referenciado</a>
</p>

## **Bibliografia**
> <a href="https://Link_da_fonte">[1]</a> Fonte 1

> <a href="https://Link_da_fonte">[5]</a> BOOCH, G. et al. The Unified Modeling Language User Guide Medeiros, E. Desenvolvendo Software com UML 2.0: Definitivo, Makron Books, 2006.

## **Histórico de Versão**
<p align="justify">
&emsp;&emsp;A tabela n representa o histórico de versão do documento.
</p>  

<h6 align="center">Figura/Tabela n: Histórico de Versão.</h6>
<div align="center">

| Versão | Data      | Descrição                                   | Autor(es) | Revisor(es) |
| ------ | --------- | ------------------------------------------- | --------- | ---------- |
| `1.0`  | 20/04/2024| Criação do arquivo e adição de conteúdo na metodologia  | Maria eduarda Barbosa     |       |
| `1.1`  | 20/04/2024| Atualização da metodologia  | Maria eduarda Barbosa     |       |
| `1.2`  | 20/04/2024| Adição da introdução e dos objetivos | Maria eduarda Marques    |   Felipe Direito    |
| `1.3`  | 20/04/2024| Adição do tópico Estado composto Cadastrando, da imagem e da referência  | Maria eduarda Marques    |   Felipe Direito    |

</div>
<h6 align="center">Fonte: <a href="https://github.com/Madu01">BARBOSA, Maria eduarda</a>. 2024.</h6>
