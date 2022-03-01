---
layout: post
title: Tutorial de Git - Branches
date: 2022-03-01 18:29:40
categories: [ Git, GitHub ]
image: media/images/5.png
tags: [all-posts]
---

Até agora, vimos aqui como fazer os primeiros passos de um projeto no git. Nesta aula, vamos conhecer como funciona as branches, o fluxo e como atualizar o projeto para a sua linha principal.

Agora, ao iniciarmos nossa explicação sobre o `git flow`, vamos falar sobre as Branches. Mas o que é o git flow? Ele é um fluxo de atividades criado para que seu projeto possua incrementação de funcionalidades, de correções, sem prejudicar o projeto final.

Podemos imaginar ela como o mapa do Metrô de São Paulo, com inúmeras linhas, mas repare que a Linha 1 - Azul é a linha principal, a nossa `main`, e as estações com integrações são, em nosso projeto, as funcionalidades incrementadas através das Merge Requests (MRs).

[![Mapa do Metro SP 2021]({{site.baseurl}}/images/mapa_metro_sp_2021.jpg)]

Ou seja, posso chamar a minha branch principal de Linha_1/Azul? Pode, mas precisa seguir o comando `git config --global` para configurá-la. Assim, como você pode criar branches com os nomes das respectivas linhas e as MRs conterem os nomes das integrações.

Mas vamos voltar ao Git Flow e como aplicá-lo ao projeto. Iremos criar juntos uma funcionalidade, em uma nova branch, e fazer a MR dela a nossa linha principal.

### Obs. Isso é válido para todo projeto que você criar no Git e em qualquer linguágem de programação utilizada.

Seguindo a aula da Rafaella Ballerini, vamos criar um botão estilizado para nosso projeto. Para isso, faremos assim os seguintes passos:

- Criar uma branch chamada botão, através do comando `git checkout -b feature/botao`. Assim, eu informo para o git que eu estou migrando de branch, da linha principal para a linha de feature e ela se chama botão e, que, ela precisa ser criada (através do comando `-b`).

- Assim que checarmos no terminal que a branch foi criada e localizada, vamos criar um arquivo chamado `botao.md` e vamos seguir o código de exemplo:

<script src="https://gist.github.com/clcmo/dc32d912c84bf69113fb38a28af43f9c.js"></script>

- Após esse passo, vamos publicar esse botão de exemplo, através dos comandos `git commit -a -m "novo botão"`, mas atenção com o próximo passo, nós faremos com o comando `git push -u origin feature/botao`, para garantir que a atualização é em referência a feature e que ela precisa ser testada e avaliada antes de seguir pela linha principal.

Com isso, passamos a ter duas branches em nosso projeto, e, ao analizarmos a parábola do Metrô, é como se tivessemos informado que há uma segunda linha de metrô e ela possui uma integração na Estação Paraíso.

Só que se eu quero acessar a linha principal, por não ter concluído o desenvolvimento na main, eu posso voltar para ela acessando com o comando `git checkout main` e, vice-versa.

Mas caso eu queira fazer a MR, fazer a integração acontecer de fato e a linha principal tiver tanto o conteúdo de minha main como a da feature? Nós vamos explicar no próximo post.

### Obs. Antigamente, a branch principal nos projetos Git se chamava master, mas por questões de referência ao [período escravagista](https://www.bbc.com/news/technology-53050955), especialmente nos EUA, onde foi criada a tecnologia Git, aconteceu essa substituição do nome da branch principal.