---
layout: post
title: AsyncTask Methods
description: Métodos com parâmetros e retorno.
author: milla
image: media/images/2.png
categories: [ Android, tutorial ]
tags: [ async-task, unit-tests ]
---

Os métodos [AsyncTask](https://developer.android.com/reference/android/os/AsyncTask?hl=en) recebem três parâmetros, que podem ter seu retorno em Void. Estes parâmetros são:

  1. Progress Bar, 
  2. Tipo de Método,
  3. Resultado
  
  Estes métodos são:
- On Pre Excecute: executado antes da Thread ser iniciada, com uma mensagem dentro da mesma activity;
- Do In Background: *obrigatória*, é a responsável pelos processamentos prévios de **On Post Execute** em outra thread e, depois, devolve os valores obtidos;
- On Post Excute: *obrigatória*, recebe o retorno de **Do In Background**; e
- On Progress Update: informa o carregamento, através de um Loop.

Ela é executada através do .Execute

### Exemplo:
<script src="https://gist.github.com/clcmoliveira/642a0e0ea384e7adbba21635b986ebe8.js"></script>

-------
# Bibliografia
- Guia de Desenvolvimento Android - [AsyncTask](https://developer.android.com/reference/android/os/AsyncTask?hl=en)