---
layout: post
title: Aula 4 - Model e Arquiteturas no Android
description: Arquiteturas de uma aplicação
author: milla
image: media/images/2.png
categories: [ Android, tutorial ]
tags: [ model ]
---

O Model é responsável pelo gerenciamento de dados de uma aplicação. Seu código lembra a criação de uma tabela de banco de dados, onde temos os atributos e o tipo de valores a ser preenchidos para eles. Exemplo:

---

| Atributo do Usuário | Tipo |
| --- | ---|
| id | Int |
| nome | String |

---

Sua aplicação em um projeto de Android varia de arquitetura para arquitetura. Mas o que são elas?

## Arquiteturas

Arquiteturas são formas as quais tratamos a conexão de uma Activity ou Fragment com os componentes, tais como o Modelo juntamente ao Controller, Presenter ou View Model (o mais utilizado e recomendado pelo guia de desenvolvimento Android). Vamos ver cada um deles:

- **MVC**: Esta abordagem separa sua aplicação em um nível macro com 3 conjuntos de responsabilidades, ilustradas na imagem abaixo:

![MVC Example](https://miro.medium.com/max/386/1*1qspMILbe0d48nq4sEhKLQ.png) 

Model | View | Controller
---|---|---
Irá conter Data (Dados) + State (Estado) + Business Logic (Lógica de Negócio), de forma não técnica. Podemos usar como exemplo lógica comercial, acesso a dados e regra de negócios, que não está ligado a View ou Controller e com isto se torna muito reutilizável.  | Irá representar o Model, sendo a UI (Interface para Usuário) e faz a comunicação com a Controller sempre que ocorre uma interação do usuário. O ideal é que quanto menos eles souberem do que deve ser feito com a interação, mais flexíveis serão para mudar. | É o responsável pelo que acontece no aplicativo. Quando a View diz para o Controller que um usuário clicou em um botão, ele decide como interagir. Se ocorrer modificação de dados no Model, o Controller pode decidir atualizar o estado de exibição, quase sempre representado por uma activity ou fragment. Há quem diga que ele é o coordenador entre a View e o Model.

- **Vantagens**: O Model pode ser facilmente testado, porque não está vinculado a nada e a View não tem muito para testar em um nível de teste unitário.
- **Desvantagens**:
  - **Testabilidade**: O controlador está tão ligado às APIs do Android que é difícil testar a unidade.
  - **Modularidade e flexibilidade**: Os Controllers estão bem acoplados às Views, sendo até mesmo uma extensão da View. Se mudarmos a View, devemos voltar e mudar o Controller.
  - **Manutenção**: Ao longo do tempo, particularmente em aplicações com modelos anêmicos, cada vez mais o código começa a ser transferido para os Controllers, tornando-os cheios, complexos e com grande facilidade de crashs.
  
Exemplo de Controller:

<script src="https://gist.github.com/ksdrof500/209cdc6ea031bea36bb60f375840c9b5.js"></script>

-------

- **MVP**: Esta arquitetura quebra o Controller de modo que o acoplamento de View/Activity pode ocorrer sem amarrá-lo ao restante das responsabilidades do “Controller”. Logo:

![MVP Example](https://miro.medium.com/max/351/1*x4TaHwbvuLKmm29gUWLwPg.png)

Model | View | Presenter
---|---|---
Igual ao MVC / Nenhuma mudança | Neste caso, a Activity/Fragment agora é considerada parte da View. A boa prática é ter uma Activity implementando uma interface de exibição para que o Presenter tenha uma interface para codificar. Com isto é eliminado o acoplamento e permite testes unitários. | Idêntico ao Controller do MVC, exceto por ele não estar vinculado ao View, apenas a uma interface, com isto ele não mais gerencia o tráfego de solicitações recebidas, como é feito no Controller. Assim aborda as preocupações de testabilidade, modularidade e flexibilidade que apresentam com o MVC.

- **Vantagens**: Ao invés de dizer a View como exibir algo, ele apenas delega o que exibir. Assim podemos testar com facilidade a lógica do Presenter, pois não está acoplada a View ou API específica do Android.
- **Desvantagens**:
  - **Manutenção**: Os Presenters, assim como os Controllers, são propensos a colecionar lógica comercial adicional, espalhados com o tempo.
  - **Eventualmente**, os desenvolvedores deparam-se com grandes Presenters difíceis de separar.

Exemplo de MVP:

<script src="https://gist.github.com/ksdrof500/866a9a6be09e234a3cf85a2a4bbdc7d7.js"></script>

---------

- **MVVM**: junto com o Data Binding, esta arquitetura tem como benefícios testes mais fáceis e modularidade, ao mesmo tempo que reduz a quantidade de código que temos que escrever para conectar o Model com a View. Também suporta ligação bidirecional entre View e ViewModel, com isto nos permite ter propagação automática de mudanças.

![MVVM Example](https://miro.medium.com/max/1600/1*OhQpbcOawuzHutdgKGjl7A.png)

Model | View | ViewModel
---|---|---
Igual ao MVC e MVP / Nenhuma mudança | A View liga-se a variáveis ​Observable ​​e ações expostas pelo ViewModel de forma flexível. | O ViewModel é responsável por expor métodos, comandos e propriedades que mantém o estado da View, assim como manipular a Model com resultados de ações da View e preparar dados Observable necessários para a exibição. Ele também fornece ganchos para que a View passe eventos para o Model. No entanto o ViewModel não está vinculado à View. Existe uma relação de muitos-para-um entre a View e ViewModel, o que significa que uma ViewModel pode mapear muitas Views.

- **Vantagens**: Os testes unitários se tornam ainda mais fáceis, porque você realmente não tem dependência na View. Ao testar, você só precisa verificar se as variáveis Observable ​​são definidas adequadamente quando o Model muda.
- **Desvantagens**: As Views podem se ligar (bind) a ambas as variáveis ​​e expressões, adicionando código efetivamente ao nosso XML. Para evitar isso, sempre obtenha valores diretamente do ViewModel em vez de tentar calcular utilizando Lambda no XML, como no último exemplo para trabalhar com VISIBLE ou GONE.

Exemplo de MVVM:

<script src="https://gist.github.com/ksdrof500/9953dffcb905512d06a3a10f1ebaf6ea.js"></script>

---

# Bibliografia

@ksdrof500 - [Android MVC x MVP x MVVM qual Pattern utilizar](https://medium.com/@FilipeFNunes/android-mvc-x-mvp-x-mvvm-qual-pattern-utilizar-parte-1-3defc5c89afd)
- Android - [Guia de Desenvolvimento: Arquiteturas](https://developer.android.com/jetpack/docs/guide?hl=pt-br)
- Android - [Guia de Desenvolvimento: Arquiteturas](https://github.com/android/architecture-samples)
