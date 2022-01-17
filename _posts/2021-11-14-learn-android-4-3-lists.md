---
layout: post
title: Aula 4.3 - Listas no Android
description: Lists e Recycles - qual o melhor?
author: milla
image: media/images/2.png
categories: [ Android, tutorial ]
tags: [ lists, model ]
---

Toda lista é uma coleção ordenada (também conhecida como sequência). O usuário desta interface tem controle preciso sobre onde na lista cada elemento é inserido. O usuário pode acessar elementos pelo seu índice inteiro (posição na lista) e procurar elementos na lista.

Diferentemente dos conjuntos, as listas normalmente permitem elementos duplicados. Mais formalmente, as listas normalmente permitem pares de elementos e1 e e2, como e1.equals (e2), e geralmente permitem vários elementos nulos, se permitirem elementos nulos. Não é inconcebível que alguém queira implementar uma lista que proíba duplicatas, lançando exceções de tempo de execução quando o usuário tenta inseri-las, mas esperamos que esse uso seja raro.

Como um documento ou uma página web, uma lista pode ser feita de duas maneiras: Lista Simples ou Lista Reciclada
- **Lista Simples**: É uma lista a qual eu retrataria uma série limitada de itens, logo, sem a necessidade de chamar a memória RAM, por exemplo. No Android, uma lista simples é retratada pela **List View**
- **Lista Reciclada**: É uma lista a qual eu chamo, por exemplo, a memória RAM e um banco de dados, para acessar uma determinada série de itens. Esta série pode ser limitada ou não, mas é muito maior que uma lista simples. O Android conta com o **Recycler View**, onde você possui uma reciclágem dos componentes, com dados atualizados. Um bom exemplo de Lista Reciclada é uma lista de posts de um blog.

---

Exemplo de aplicação: [uChat](https://clcmoliveira.github.io/uchat) contém uma lista de contatos e, a partir dela, eu tenho um "link" para o Chat. O aplicativo exemplo foi do site [Let's Build That App](https://www.letsbuildthatapp.com/course_video?id=3492):
<iframe width="100%" height="315" src="https://www.youtube.com/embed/ihJGxFu2u9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Como são as listas no Android?

Agora, imagine que você esteja criando um ListView onde os itens personalizados que você deseja mostrar são bastante complicados. Você pode criar um layout para esses itens e usar esse layout dentro do seu Adapter. Depois, dentro do método getView(), você infla o layout do novo item e, em seguida, você faz referência a todas as Views usando os IDs fornecidos em seu XML para personalizar e adicionar alguma lógica de visualização. Uma vez terminado, você passa essa View para o ListView para ser desenhado na tela.

A verdade é que, juntas, as ListViews e as GridViews fazem apenas metade do trabalho de conseguir uma verdadeira eficiência de memória, pois, por mais que elas reciclam o layout do item, não mantêm referências aos filhos do layout, forçando-o a chamar findViewById() para cada filho do layout do item toda vez que você chamar getView().

Assim, todas essas chamadas podem se tornar muito intensivas no processador, especialmente para layouts complicados. Além disso, a situação pode fazer com que sua rolagem do ListView se torne irregular ou não responsiva, pois tenta freneticamente capturar referências às Views necessárias.

Inicialmente, os engenheiros Android do Google forneceram uma solução para esse problema de rolagem suave, por meio do padrão View Holder. A partir deste padrão, você cria uma classe que se torna uma referência na memória para todas as Views necessárias para preencher seu layout. 

Vantagens|Desvantagens
--|--
Você poder definir as referências uma vez e reutilizá-las, trabalhando efetivamente em torno do resultado de desempenho que vem repetidamente chamando findViewById(). | O View Holder é um padrão opcional para um ListView ou GridView. Se você não tem conhecimento desse detalhe, pode se perguntar por que seus preciosos ListViews e GridViews são tão lentos.

## Recycler View
Os engenheiros do Android logo pensaram: por quê não usar um Adapter para atuar como uma fonte de dados e deixar o usuário criar ViewHolders para manter referências na memória? Com essa junção de Adapter + View + ViewHolders + LayoutManager nascia o Recycler View: uma maneira a qual você poderá chamar esta lista determinada de itens.

Quando você precisa de uma nova View, ela cria um novo objeto ViewHolder para inflar o layout e manter essas referências ou reciclar uma da pilha existente. Graças à exigência deste ViewHolder, o RecyclerView sabe exatamente qual animação aplicar a qual item. O melhor de tudo, apenas faz conforme necessário. Você pode até criar suas próprias animações e aplicá-las conforme necessário.

O LayoutManager posiciona os itens do RecyclerView e informa quando reciclar itens que foram transferidos para fora da tela. Estes gerenciadores de layout vêm em três tipos padrão:

LinearLayoutManager | GridLayoutManager | StaggeredGridLayoutManager
--|--|--
Posiciona seus itens para se parecerem com um ListView padrão. | Posiciona seus itens em um formato de grade semelhante a um GridView. | Posiciona seus itens em um formato de grade escalonado.

É possível criar outros LayoutManagers? Sim, desde que seguindo as recomendações sobre sua customização.

---
Exemplo de Implementação:
Faremos, a seguir, uma implementação simples de lista reciclada com RecyclerView e CardView. A implementação se inicia na build.gradle do projeto e irá até a implementação do Recycler.
<script src="https://gist.github.com/clcmoliveira/c19277e2c133a361023ff97a61aa6460.js"></script>
Aviso importante: Código em Kotlin, o exemplo em Java está no guia de desenvolvimento Android.

---
# Biblioteca
- Android - [Guia de Desenvolvimento - RecyclerView](https://developer.android.com/guide/topics/ui/layout/recyclerview)
- Android - [Guia de Desenvolvimento - CardView](https://developer.android.com/guide/topics/ui/layout/cardview.html)
- Android - [Guia de Desenvolvimento - List](https://developer.android.com/reference/java/util/List)
- AndroidPro - [RecyclerView & CardView: Listando Dados de Forma Eficiente](https://www.androidpro.com.br/blog/design-layout/recyclerview-cardview/)
- Let's Build That App - [Kotlin Firebase Messenger](https://www.letsbuildthatapp.com/course_video?id=3492)