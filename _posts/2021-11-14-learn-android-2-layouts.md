---
layout: post
title: Aula 2 - Layouts no Android
description: Os modelos de XML de uma activity
author: milla
image: media/images/2.png
categories: [ Android, tutorial ]
tags: [ layouts ]
---

Existem diversos tipos de layout para fazer a visualização de uma activity ou fragment no Android. No entanto, vamos focar nas que mais serão utilizadas nos projetos.
 - Constraint
 - Linear
 - Grid
 - Relative

## Constraint Layout
Segundo o [guia de desenvolvimento android](https://developer.android.com/training/constraint-layout/index.html), o Constraint Layout opera de uma maneira idêntica ao RelativeLayout, assim,
todo o alinhamento é feito de relações entre as Views. A única diferença é que somos capazes de indicar o posicionamento que queremos manter as Views por meio dos seus eixos.
Os eixos são definidos como X e Y, sendo X o eixo de ínicio (esquerdo) e fim (direito) e o Y o de topo (cima) e inferior (baixo).

Um bom exemplo de como você pode posicionar um [componente](/posts/2019-11-14-components-in-android) no Constraint Layout:

Exemplo Visual | Exemplo de aplicação 
------------ | -------------
<img src="https://miro.medium.com/max/429/1*3jIUT0p0bf0-2baw_K68QQ.png" alt="Image of Constraint Alignment" width="100" height="100"/> | <script src="https://gist.github.com/clcmoliveira/f89d5ed420f9749f06caf4e2e726b14f.js"></script>

------

## Linear Layout
O Linear Layout é um ViewGroup que pode posicionar as Views em uma única coluna vertical ou horizontal, atribuídas através do **orientation**.

Um exemplo é quando você quer que uma mensagem seja mostrada ao usuário, como este abaixo:
<script src="https://gist.github.com/clcmoliveira/aa64bc7f6e60133e2c6166ef714b60ed.js"></script>

Um outro importante atribuuto do LinearLayout é o layout_weight, responsável por definir o peso que cada View tem referente a distribuição dentro dela. Quando não utilizadas, 
as Views não ocupam totalmente o espaço disponível existente no layout, deixando o design da nossa interface muito mal feito.
Um outro [exemplo](https://gist.github.com/clcmoliveira/aa64bc7f6e60133e2c6166ef714b60ed#file-act_linear_layout_example_2-xml) é quando você atribui os pesos de cada componente (View) para layout.

------

## Grid Layout
O Grid Layout tem como objetivo permitir posicionar as Views em uma disposição de grade. Basicamente consiste em um número de linhas de horizontais e verticais que servem para dividir a visualização do layout em forma de “matriz”, com cada linha e coluna formando uma célula que pode, por sua vez, conter uma ou mais Views. As linhas e colunas são definidas utilizando os atributos columnCount e rowCount.

Cada linha da grade é referenciada por índices, numeradas a partir de 0 contando de baixo para cima. Cada cédula também tem numeração, começando em 0 a partir da célula no canto superior esquerdo da grade. Também é possível definir em qual linha e coluna que cada View vai ficar utilizando os atributos layout_column e layout_row, onde podemos dizer ao GridLayout a posição exata de cada componente dentro da grade.

Exemplo Visual | Exemplo de aplicação 
------------ | -------------
<img src="https://www.androidpro.com.br/wp-content/uploads/2016/07/gridlayout-exemplo.png" alt="Grid Layout Example" width="100" /> | <script src="https://gist.github.com/clcmoliveira/4b47c5e7c9805811eeacc8e7267603a2.js"></script>

----

## Relative Layout
Com o RelativeLayout, você pode posicionar as Views Filhas em relação ao Pai, como por exemplo posicionar a View no topo ou no fim do layout. A outra opção, é posicionar as Views em relação a outras Views dentro do mesmo RelativeLayout.

Em relação ao Layout Pai | Em relação a outras views
------------ | -------------
As Views Filhas dentro do RelativeLayout Pai podem ser posicionadas as bordas esquerda do Pai, superior, direita ou inferior. | Ao posicionar as Views Filhas em relação a outras Views, você pode adicionar restrições a sua posição. Por exemplo, um TextView deve estar acima de outra TextView, ou um ImageView deve ser a a esquerda de uma outra TextView.
<img src="https://www.androidpro.com.br/wp-content/uploads/2016/07/relativelayout-relativo-pai.png" alt="Relative Layout First Example" width="100" /> | <img src="https://www.androidpro.com.br/wp-content/uploads/2016/07/relativelayout-relativo-outras-views-exemplo.png" alt="Relative Layout Second Example" width="100"/>

---------
# Bibliografia
- @alexfelipe - [Implementando telas no Android com Constraint Layout](https://medium.com/collabcode/implementando-telas-no-android-com-constraint-layout-13a90e44622f)
- AndroidPro - [Como dominar os Android Layouts em 07 passos](https://www.androidpro.com.br/blog/desenvolvimento-android/android-layouts-viewgroups-intro/#LinearLayout_Horizontal_e_Vertical)