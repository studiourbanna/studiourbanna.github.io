---
layout: post
title: Tutorial de Git - Criando um Repositório
date: 2022-01-01 17:29:40
categories: [ Git, GitHub ]
image: media/images/5.png
tags: [all-posts]
---


O Git hoje é uma ferramenta que nos permite fazer edições, versões de arquivos e não apenas para programas. Sites, e-books, e outras tantas coisas são realizadas e versionadas graças a ferramenta que faz com que evitemos usar várias e várias pastas zipadas para instalação. Para isso, vamos com este passo a passo onde você poderá realizar a instalação.

### Como instalar o Git?

Para isso, perguntamos em que sistema você está utilizando?
- Estou no Windows: Você vai precisar fazer a instalação a partir do link de download do [Git][Git_URL].
- Estou no Linux ou Mac: Talvez você não precisa instalar a partir do link de [download][Git_URL], dependendo da versão da plataforma, pois o Git já aparece de maneira nativa.

### Meu primeiro Projeto Git

Para isso, você vai precisar de uma pasta criada aonde você deseja colocar seus projetos do Git. Como, por exemplo, `Aprendendo Git com a Studio Urbanna`.
Depois, abra essa pasta criada no seu editor de código instalado - existem vários e posso citar como exemplos:
- Notepad++
- Sublime Text
- PHPStorm (IntelliJ)
- VSCode (IDE Padrão do Editor Online do GitHub)

Nela, você fará as seguintes instruções:
- Use o comando `git init` no Terminal de Comando (seja em seu editor ou pelo Git Bash);
- Após isso, vamos mudar para a branch padrão do projeto para `main` (vamos explicar nos próximos posts o motivo) com o seguinte comando `git checkout -b main`;
- No editor, crie o arquivo `README.md`, com a seguinte descrição:

<script src="https://gist.github.com/clcmo/efea062b46ccc34fb03ff6810f15bd1b.js"></script>

- Salve o arquivo (alguns editores já o realizam automaticamente);
- Volte ao terminal e insira os comandos:
 - `git add README.md` para adicionar o arquivo;
 - `git commit -m "add README.md"` para informar que foi adicionado o arquivo e ele está salvo nesta branch que vamos publicar ainda.

#### Criando o Repositório no GitHub
Agora vamos criar o repositório onde vai ficar armazenado todo o seu projeto. Se você não tem uma conta no GitHub, cadastra, realize seu primeiro login e, em seguida vá ao passo `Criar Novo Repositório` e preencha as informações como no exemplo:
![][Image_Create_Git]

Na página seguinte, aparecerão os comandos de como você pode importar o código de seu repositório local (no caso, a pasta que criamos) para o GitHub. Preste atençào no segundo conjunto de instruções na imagem abaixo, é nela que vamos dar andamento a publicação (especificamente `…or push an existing repository from the command line`
![][Image_Create_Git_1]

O que isso quer dizer?
- em `git remote add origin`, estamos informando que vamos adicionar o repositório virtual e ele se chama `origin`, seguido do link do repositório.
- em `git push -u origin main`, estamos pedindo a publicação do `commit` realizado na branch principal do projeto no GitHub.

Oba, a primeira parte está feita, no próximo post, vamos aprender a alterar arquivos no próprio repositório que criamos. Se você gostou deste tutorial, compartilhe a seus amigos e, se puder, deixe sua contribuição no Ko-Fi.

<script type='text/javascript' src='https://storage.ko-fi.com/cdn/widget/Widget_2.js'></script><script type='text/javascript'>kofiwidget2.init('Support Me on Ko-fi', '#a628e0', 'X8X37459O');kofiwidget2.draw();</script>

#### Baseado nos tutoriais de [Willian Justen][Willian Justen] e [Rafaella Ballerini][Rafaella Ballerini]


[Git_URL]: https://git-scm.com/downloads
[Image_Create_Git]: https://github.com/studiourbanna/studiourbanna.github.io/blob/main/media/images/Captura_Git_New_Repo.png?raw=true
[Image_Create_Git_1]: https://github.com/studiourbanna/studiourbanna.github.io/blob/main/media/images/Captura_Git_New_Repo_1.png?raw=true
[Willian Justen]: https://www.udemy.com/course/git-e-github-para-iniciantes/learn/lecture/5120608?start=0#overview
[Rafaella Ballerini]: https://youtube.com/playlist?list=PLhkO7OMKgT_rqwGYldqcFxyN4yjFgmDh8
