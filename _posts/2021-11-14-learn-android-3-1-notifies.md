---
layout: post
title: Aula 3.1 - Notificações no Android
description: Chamando a atenção do usuário
author: milla
image: media/images/2.png
categories: [ Android, tutorial ]
tags: [ notifies, views ]
---

As notificações fornecem informações curtas e oportunas sobre eventos no seu aplicativo enquanto ele não está em uso. Para tanto, vamos criar uma aplicação voltada apenas para gerar notificações ao usuário em três passos: 

1 - Crie a UI da Activity Principal e de Notificação
2 - Crie uma classe em Java que irá interagir com o botão de criação de notificações. Use o NotificationManager.
3 - Crie uma classe em Java que irá interagir com o *resultado* deste botão.
<script src="https://gist.github.com/clcmoliveira/55f6cd10ac658c4bada87d2e7c358cca.js"></script>

## O que aconteceu?
Para criar notificações, usamos a classe **NotificationManager** que pode ser recebida do **contexto**, por exemplo uma atividade ou um serviço, através do método getSystemService().

O Notification.Builder fornece uma interface do construtor para criar um objeto de notificação. Você usa um **PendingIntent** para especificar a ação que deve ser executada depois que o usuário selecionar a notificação. Gerado pela nossa classe, o **Notification.Builder** permite adicionar até três botões com ações definíveis à notificação.

---
# Bibliografia
- Technxt - [FAB](http://technxt.net/how-to-create-a-floating-action-button-in-android-app/) **Adicional**
- Android - [Guia de Desenvolvimento - Criar Notificação](https://developer.android.com/training/notify-user/build-notification)
- Vogella - [https://www.vogella.com/tutorials/AndroidNotifications/article.html](https://www.vogella.com/tutorials/AndroidNotifications/article.html)