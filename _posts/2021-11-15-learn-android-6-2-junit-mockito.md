---
layout: post
title: Utilização de JUnit e Mockito em Android
description: Teste Unitários
author: milla
image: media/images/2.png
categories: [ Android, tutorial ]
tags: [ junit, unit-tests ]
---

Testes unitáios servem para testar a implementação de um método e de seus componentes em uma aplicação Android. Eles nãp te garantem que o software funciona em todos os cenáios possíeis, mas te permitem assegurar que funcionam em cenários específicos definidos previamente. Instabilidades de rede e de serviços, respostas diferentes em requisições ao servidor, tudo isso dificulta muito a escrita dos testes. Existem algumas ferramentas que te ajudam a configurar esse ambiente controlado e previsível para que possamos validar os fluxos (SANTOS, 2018).

Existem duas formas para fazer estes testes unitáios: por meio do jUnit (automaticamente implementado quando se cria uma aplicação android e, através do Mockito, aonde podemos também testar as implementações de nossas classes e activities criadas no projeto.

---
## Implementando o JUnit

Em build.gradle(app)
<script src="https://gist.github.com/clcmoliveira/4b84f5f4492bdbaedc8ef992c4ee3218.js"></script>

### Testando o métodos

O exemplo a seguir mostra o teste do método de soma, tanto em Java como em Kotlin.
<script src="https://gist.github.com/clcmoliveira/e03ada074a9fc410cb55b2376b7aa2fe.js"></script>

---
## Implementando o Mockito

Em build.gradle(app)
<script src="https://gist.github.com/clcmoliveira/79b98e3adb5272769c122592bab7fa00.js"></script>

### Exemplo de Teste

Estamos criando, neste exemplo abaixo, uma aplica?o que vai medir o consumo do combustível (seja gasolina, etanol, gás veicular), a distância percorrida para determinado lugar e a autonomia (ou seja, a quilometragem) do veículo.
O exemplo conterá uma MVVM, logo, seu benefício será a lógica de negócio de cada tela fica no ViewModel uma classe que é responsável, por ligar a interface com os dados utilizados na aplicação, com o uso desse modelo fica mais fácil escrever testes unitários no projeto, já que dividimos as responsabilidades entre a interface (View), lógica de negócio (ViewModel) e a representação dos dados utilizados no seu projeto (Model).

-----
Importante: Exemplo a seguir será ilustrado em Kotlin, o exemplo em Java está na Bibliografia do post.
Arquivos criados: 
- Classe MainActivityViewModel.kt (criado em ou **caminhodoseuprojeto**)
- Layout main_activity_view_model.xml (criado em res/layouts)
- Classe MainActivityViewModelTest.kt (criado em **caminhodoseuprojeto**(test))

<script src="https://gist.github.com/clcmoliveira/9a9aca996b2ecf5663620baf71d377ce.js"></script>
-----

## O que isto significa?
Significa que minha activity já possui uma ViewModel, que está sendo implementada em minha classe da activity. Os valores dos inputs são utilizados por meio do DataBinding, que tem o objetivo de prover uma conexão entre a classe e o layout da activity, logo evitando o findViewById() e facilitando na utilização da função handleCalculateButtonClick diretamente da declaração do botão XML.

Caso precise de uma revisão de MVVM, este [artigo](https://medium.com/@soutoss/arquiteturas-em-android-mvvm-kotlin-retrofit-parte-1-2ac77c8a26) irá lhes ajudar.

---
# Bibliografia
- [tadeumx1](https://medium.com/@tadeumx1/introdu%C3%A7%C3%A3o-a-testes-unit%C3%A1rios-com-junit-e-mockito-no-android-67104232b878) no Medium
- [Diego Santos](https://dextra.com.br/pt/ambiente-controlado-para-testes-parte-1-mockito-e-injecao-de-dependencia/) no DExtra