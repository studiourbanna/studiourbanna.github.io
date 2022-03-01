---
layout: post
title: Tutorial de Git - Alterando Arquivos
author: milla
categories: [ Git, GitHub ]
image: media/images/5.png
tags: [all-posts]
---

Alterar arquivos sempre dão a chance de você corrigir algo que estava errado, ou até mesmo atualizar alguma versão de um pacote (isso veremos em breve). Mas quem nunca tentou salvar o arquivo e o computador acabou desligando, te impedindo de salvar? Para isso, o Git ajuda a resolver esse grande problema ao permitir que:

1. Você salva o arquivo localmente, através dos comandos `git stash save "descrição do que está salvando"` (que iremos explicar em breve) e `git commit`;
2. Você publica esses arquivos salvos, na branch de sua preferência, evitando riscos de perca de arquivos na hora de executar, por exemplo, um backup, através do comando `git push`.

### Aplicando os conceitos no Meu Primeiro Projeto

- Vamos abrir o arquivo `README.md` e vamos adicionar a frase que aparece na descrição abaixo;
- Em seguida, vamos criar um segundo arquivo, chamando ele de `PROJECT.md` e seguir com a seguinte descrição:

<script src="https://gist.github.com/clcmo/60c10c3b02170c925ecc7b4b60cbe432.js"></script>

- Agora vamos precisar subir essas alterações, pra isso seguiremos os passos:
- `git status`, para checarmos as alterações feitas
- `git add .` (para adicionarmos todos os arquivos);
- `git commit -m "Atualizando README e Criando PROJECT"`, para informarmos o que fizemos; e, por fim;
- `git push origin main`, para que a alteração vá para o nosso repositório do GitHub.

Ao atualizar a página de nosso projeto no Github, ele terá sido alterado, mostrando o nome do commit, o código, com data e hora, além de todas as alterações que foram feitas nele. O verde com `+` e o vermelho com `-` mostram os conteúdos que foram adicionados e editados dentro do código. Aqui nesse botão onde aparece o relógio, poderemos ver todos os commits já feitos anteriormente, seja em arquivos criados ou alterados e vermos o código como era.

E a segunda parte está feita, no próximo post, vamos aprender sobre Branches e o porquê que a principal delas se chama `main`. Se você gostou deste tutorial, compartilhe a seus amigos e, se puder, deixe sua contribuição no Ko-Fi.

<script type='text/javascript' src='https://storage.ko-fi.com/cdn/widget/Widget_2.js'></script><script type='text/javascript'>kofiwidget2.init('Support Me on Ko-fi', '#a628e0', 'X8X37459O');kofiwidget2.draw();</script>

#### Baseado nos tutoriais de [Willian Justen][Willian Justen] e [Rafaella Ballerini][Rafaella Ballerini]

[Willian Justen]: https://www.udemy.com/course/git-e-github-para-iniciantes/learn/lecture/5120608?start=0#overview
[Rafaella Ballerini]: https://youtube.com/playlist?list=PLhkO7OMKgT_rqwGYldqcFxyN4yjFgmDh8