---
layout: post
title: Aula 1 - Ciclo de Vida de uma Activity
description: Tópico inicial da revisão de Android
author: milla
image: media/images/2.png
categories: [ Android, tutorial ]
tags: [ lifecycle ]
---

Os sete passos do ciclo de vida de uma activity de um aplicativo android são:
- onCreate: quando o app é criado pela primeira vez;
- onStart: quando o app está para ser visualizado pelo usuário;
- onResume: chamado quando existe uma interação com o usuário (ex. abrir a galeria para importar uma foto);
- onPause: chamado quando a activity é pausada, logo, deixa de ser visível ao usuário;
- onStop: chamado quando a activity deixa de ser visível ao usuário;
- onRestart: quando paramos, para depois reinicializar a activity; e
- onDestroy: chamado quando a activity é destruída, finalizada.

![Image of Activity Lifecycle](https://static.javatpoint.com/images/androidimages/Android-Activity-Lifecycle.png)

----
No [JavaTPoint](https://www.javatpoint.com/android-life-cycle-of-activity), faça um app que retrate o ciclo de vida de uma activity. 
Confira os logs no Debug.