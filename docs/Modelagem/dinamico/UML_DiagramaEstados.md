# ***Diagrama de estados***

## **Introdução**
<p align="justify">
&emsp;&emsp;Texto ....(introduz ao que se trata o artefato)
</p>

## **Objetivo**
<p align="justify">
&emsp;&emsp;Texto .... (coloque os objetivos)
</p>

## **Metodologia**
<p align="justify">
&emsp;&emsp;A metodologia adotada para o desenvolvimento do diagrama envolveu a realização de duas reuniões, a primeira para fazer a versão inicial de diagramas e em seguida mostrar para a professora milene da disciplina em que este projeto pertence, para ter certeza se estavam no caminho certo e a segunda reunião seria para concretizar as possíveis correções e decidir sobre como seria distribuido os responsáveis na criação deste documento. 

&emsp;&emsp;Na primeira reunião os responsáveis apresentaram suas ideias e com base em conteúdos e exemplos relacionados ao diagrama de estados, colaboraram na criação de um esboço inicial. Os Conteúdos utilizados foram a do UML DIAGRAMS <a href="">[1]</a> o vídeo aula da professora Milene <a href="">[2]</a> e o site <a href="">[4]</a> Lucid Chart além dos ensinamentos da aula presencial. Foi fundamental a leitura desses conteúdos, porém os exemplos observados durante essa fase ajudou ainda mais para que tivessem ideias de como fariam, a equipe avaliou diferentes exemplos para determinar as melhores práticas a serem aplicadas no desenvolvimento do diagrama, identificando elementos e estados que seriam mais adequados para o projeto, mas ainda surgiu dúvidas se estava correto o que já haviam realizado, houve muitas dificuldades em como desenvolve-lo. 

&emsp;&emsp;Antes da segunda reunião, os responsáveis mostraram o diagrama para a professora com o intuito de retirar dúvidas e aplicar melhorias, foi percebido pela professora que os nossos diagramas tendiam mais para um diagrama de atividades em vez de estados. Na segunda reunião, o foco foi a finalização do diagrama e a organização das responsabilidades para a elaboração do artefato do diagrama de estados, no caso este documento. Nesse encontro, os membros da equipe trabalharam em conjunto para melhorar a criação inicial, com correções a respeito do que foi percebido que havia de errado e pelas dicas da professora. 

&emsp;&emsp;Vale ressaltar que o diagrama foi criado no software diagrams.net, o qual possui seu próprio tipo de modelo mas segue as regras da linguagem-padrão UML, o modelo dele pode ser observado na <b>Figura 1</b>. Além disso, os diagramas deste documento representam os estados, mas com base nas dicas da professora milene, a equipe decidiu utilizar o BPMN como um representante que auxilia o leitor a obter mais detalhes do fluxo do usuário no nosso sistema. Esse documento pode ser encontrado em [BPMN_Do_Projeto](https://unbarqdsw2024-1.github.io/2024.1_G6_My_LanguageLearning/#/Base/1.2.ProcessosMetodologiasAbordagens). 

</p>

## **Diagramas de Estado**

<p>
&emsp;&emsp;Para um melhor acompanhamento na leitura dos diagramas de estado foi disponibilizado uma legenda que pode ser observada na <b>Figura 1</b> e explicada na <b>Tabela 1</b>.
</p>

### **Legenda**

<h6 align="center">Figura 1: legenda do diagrama de estados.</h6>
<div align="center">

![legendaEstado](../img/diag-estados-legenda.jpg)

</div>
<h6 align="center">Fonte: <a href="https://github.com/fulanodetal">BARBOSA, maria eduarda</a>.

<h6 align="center">Tabela 1: Descrição da legenda.</h6>
<div align="center">

| Nome | Descrição | 
| ---- | --------- |
| Escolha | Mostra a ramificação de estados como opções com base nos eventos anteriores, é uma decisão dinâmica de quais opções podem serem utilizadas. |
| Ponto de entrada | Indica qual é o primeiro estado ou estado composto a ser iniciado . |
| Ponto de saída | Indica o término de um estado ou estado composto ou da máquina de estados. |
| Estado simples | Representa o estado atual e não possui subestados dentro dele. |
| Transição | É uma seta que mostra o fluxo dos estados, indicando as mudanças de estados. |
| Estado composto | É um estado que tem subestados dentro dele. |

</div>
<h6 align="center">Fonte: <a href="https://github.com/Madu01">BARBOSA, Maria eduarda</a>. 2024.</h6>

### **Diagrama**

#### **Diagrama geral**

<h6 align="center">Figura 2: estado geral.</h6>
<div align="center">

![estadoGeral](../img/diagrama-estados-geral.jpg)

</div>
<h6 align="center">Fonte: <a href="">Todos responsáveis pela elaboração</a>.</h6>

<br>
<p align="justify">
&emsp;&emsp;A <b>Figura 2</b> demonstra de forma geral o resultado final do diagrama de estados. Os estados compostos posteriores é uma vizualização mais focada.
</p>

#### **Estado composto Logando**

<h6 align="center">Figura 3: estado composto logando.</h6>
<div align="center">

![estadoGeral](../img/diag-estados-logando.jpg)

</div>
<h6 align="center">Fonte: <a href="https://github.com/Madu01">BARBOSA, Maria eduarda</a>. 2024.</h6>

<br>
<p align="justify">
&emsp;&emsp;Na <b>Figura 3</b> que representa o estado composto logando, inicia com o subestado <b>"entrando dados de credenciais"</b> esse estado seria o preenchimento do usuário nos campos de login, a mudança de estado ocorre logo em seguida, com a presença de uma Escolha representado pelo simbolo observado na <b>Figura 1</b> e explicado na <b>Tabela 1</b>, nele ha duas escolhas a que o resultado deu validado, esse sendo a primeira saída dos subestados, e o resultado de invalidado, que representa quando os dados do usuário não são compatíveis aos que estão cadastrado no banco de dados, neste o caminho é diferente do validado, indo para o subestado <b>"entrando dados de recuperação"</b>, representando o estado em que o usuário insere dados para a recuperação de senha, em seguida vem o <b>"enviando instruções de recuperação"</b>, o qual o sistema enviará por email do usuário a redefinição de senha, no estado posterior <b>"recuperando senha"</b> é o estado em que o usuário estará seguindo as instruções do sistema pelo email e assim que concluir irá retorna para o primeiro estado <b>"entrando dados de credenciais"</b> para acessar o sistema. 

&emsp;&emsp;E por fim, a outra saída é quando o estado composto de logando muda e vai para outros que aparecem quando o usuário esta logado no sistema, o símbolo de Escolha é utilizado para representar essa ideia de escolha para os outros estados compostos. 

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

> <a href="https://Link_da_fonte">[1]</a> UML DIAGRAMS. State Machine Diagrams. 2023. Disponível em: <https://www.uml-diagrams.org/state-machine-diagrams.html>. Acesso em: 4 jul. 2024.

> <a href="https://Link_da_fonte">[2]</a> SERRANO, milene. 06d - VideoAula - DSW-Modelagem - Estados. [Vídeo]. 2020. Stream. Disponível em: <https://unbbr-my.sharepoint.com/personal/mileneserrano_unb_br/_layouts/15/stream.aspx?id=%2Fpersonal%2Fmileneserrano%5Funb%5Fbr%2FDocuments%2FArqDSW%20%2D%20V%C3%ADdeosOriginais%2F06d%20%2D%20VideoAula%20%2D%20DSW%2DModelagem%20%2D%20Estados%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E44d12a9d%2Db41e%2D4015%2Da3ef%2D490962423f81>. Acesso em: 4 jul. 2024.

> <a href="https://Link_da_fonte">[3]</a> Diagrama de estados. [imagem]. 2024. Aprender 3. Disponível em: <https://aprender3.unb.br/pluginfile.php/2790248/mod_label/intro/State%20Diagram%20Example.png>. Acesso em: 4 jul. 2024.

> <a href="https://Link_da_fonte">[4]</a> LUCIDCHART. O que é diagrama de máquina de estados UML. Disponível em: <https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-maquina-de-estados-uml>. Acesso em: 4 jul. 2024.

## **Histórico de Versão**
<p align="justify">
&emsp;&emsp;A tabela n representa o histórico de versão do documento.
</p>

<h6 align="center">Figura/Tabela n: Histórico de Versão.</h6>
<div align="center">

| Versão | Data      | Descrição                                   | Autor(es) | Revisor(es) |
| ------ | --------- | ------------------------------------------- | --------- | ---------- |
| `1.0`  | 06/07/2024| Criação do arquivo e do conteúdo na metodologia  | Maria eduarda Barbosa     |       |
| `1.1`  | 06/07/2024| Atualização da metodologia e adição do conteúdo da legenda, do diagrama geral, e do estado composto de logando | Maria eduarda Barbosa     |       |

</div>
<h6 align="center">Fonte: <a href="https://github.com/Madu01">BARBOSA, Maria eduarda</a>. 2024.</h6>


