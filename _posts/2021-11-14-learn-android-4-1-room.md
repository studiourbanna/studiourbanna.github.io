---
layout: post
title: Aula 4.1 - Room e SQLite
description: Banco de Dados e como é utilizado
author: milla
image: media/images/2.png
categories: [ Android, tutorial ]
tags: [ model, room, sqlite ]
---

O Room é uma das bibliotecas existentes dentro do conjunto “Android JetPack” apresentado durante o Google I/O de 2018, com o intuíto de auxiliar os desenvolvedores criando uma abstração das camadas de banco de dados (SQLite). Estas camadas são representadas por três componentes:
- **Entity**: são entidades responsáveis por mapear as tabelas.
<script src="https://gist.github.com/sp4wna1/dffda7d32b5f6058426661847b0348b9.js"></script>
- **Data Access Object (DAO)**: são as interfaces utilizadas para acessar os dados armazenados no banco.
<script src="https://gist.github.com/sp4wna1/04f04cff6a1030f6c3617a365de0cd56.js"></script>
- **Database**: é a representação da classe abstrata do Banco de Dados, responsável por fazer o seu controle.
<script src="https://gist.github.com/sp4wna1/9b25320c74d5b8a31493f6e0ceca0628.js"></script>

Diversos autores recomendam a utilização do Dagger 2 ou Koin para a injeção de Dependências. Por estarmos ainda em desenvolvimento, vamos falar de Dagger no próximo post. Logo em breve, falaremos de Koin e suas diferenças com o Dagger.

---
# Biblioteca
@sp4wna1 - [Introdução - Room Database Android](https://medium.com/android-dev-br/utilizando-room-database-no-android-fd76c2e6ccee)