---
layout: post
title: Aula 3 - Views no Android
description: Quem é quem nas Views?
author: milla
image: media/images/2.png
categories: [ Android, tutorial ]
tags: [ views ]
---

Uma View é um retângulo na tela, invisível, que mostra algum conteúdo. Ela pode ser uma imagem, um pedaço de texto, um botão ou qualquer outra coisa que o aplicativo pode exibir. E todas as Views juntas formam o layout da interface.

Tudo o que você vê e/ou interage em seu aplicativo é chamado de interface de usuário, ou UI (do inglês, User Interface). Existem diferentes tipos de Views, mas vamos enfatizar as três principais:

- Uma View que mostra algum texto é chamada de TextView;
- Uma View que mostra uma imagem é chamado de ImageView; e
- Uma View que mostra um botão é chamado, claro, de Button.

Internamente uma parte das Views são compostas por XML, ou seja, utilizamos a sintaxe dessa tecnologia para construir nossos componentes.
Mas o que é **sintaxe**? Sintaxe significa regras que definem alguma coisa, nesse caso, se o XML da View está correto ou não.

Em uma View | Em um Layout
--------------|-------------
Nós sempre temos que começar escrevendo nosso XML abrindo o elemento (tag) através da utilização de um (<), seguido do nome do componente. Este exemplo poderia ser uma ImageView, Button, ou qualquer outra View. Então nós temos uma lista de atributos, um por linha e no final temos (/>) fechando nossa tag. | Outra forma de fazer o fechamento da tag do elemento, é utilizar uma tag separada para o fechamento. Aqui está o exemplo de um LinearLayout onde isso pode ser utilizado.

Exemplo de ilustração sobre Views e Sintaxes.
<script src="https://gist.github.com/clcmoliveira/aa64bc7f6e60133e2c6166ef714b60ed.js"></script>

------
# Bibliografia
- AndroidPro - [Saiba como usar as Android Views da forma correta](https://www.androidpro.com.br/blog/desenvolvimento-android/android-views-intro/)
