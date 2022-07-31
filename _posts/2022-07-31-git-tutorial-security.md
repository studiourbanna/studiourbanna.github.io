---
layout: post
title: Segurança em seus projetos Git
author: milla
categories: [Git, GitHub, Segurança]
image: media/images/5.png
tags: [feature]
---

Segurança é primordial nas operações de Git. Portanto, baseado numa importante thread do [Bruno Pinheiro](https://twitter.com/brunocroh/status/1553784499858726915?s=20), resolvi fazer o passo a passo de configurar a chave GPG.

### O que é essa chave?

Segundo a documentação do [GitHub](https://docs.github.com/pt/authentication/managing-commit-signature-verification/about-commit-signature-verification), essa chave permite mostrar que seu commit foi verificado e autenticado.

"Você pode assinar commits e tags localmente para dar a outras pessoas confiança sobre a origem de uma alteração que você fez. Se um commit ou tag tiver uma assinatura GPG ou S/MIME que seja verificável criptograficamente, o GitHub marcará o commit ou a tag "Verificado" ou "Verificado parcialmente."

Então, quer dizer que meu projeto pode sofrer problemas se não adicionar essa chave? Sim, imagina que um hacker tenha acesso a sua conta e repositórios e, pior ainda, a empresa onde você trabalha possua brechas de segurança no Git. É chato, mas tem solução: mais fatores de segurança são essenciais para você alavancar seu projeto, sem pesadelos futuros.

1. Instale o [GPG](https://www.gnupg.org/download/) na sua máquina e abra o terminal
    1.1. A versão da GPG que instalei é acima de 2.1.17, então ela possui comandos mais simples para a instalação da chave.
2. Utilize o comando `gpg --full-generate-key` e selecione a opção RSA.
3. Mantenha as configurações padrão da GPG, apertando Enter (ou Return para o Mac) três vezes.
4. Insira seu id de usuário do GitHub válido (neste caso, é o e-mail)
5. Informe uma frase secreta segura
6. Com o comando `gpg --list-secret-keys --keyid-format=long`, veja a lista de chaves secretas e procure pelo id da sua chave GPG. Na linha sec, após `4096/`, existe um ID e é ela que você vai copiar para a próxima parte

``
    $ gpg --list-secret-keys --keyid-format=long
    /Users/hubot/.gnupg/secring.gpg
    ------------------------------------
    sec   4096R/ID_GPG 2016-03-10 [expires: 2017-03-10]
    uid                          Hubot 
    ssb   4096R/42B317FD4BA89E7A 2016-03-10
``

7. Cole o comando `gpg --armor --export ID_GPG`, substituindo ID_GPG para o código da sua chave gerada no terminal. Por fim, copie sua chave GPG, que inicia com `-----BEGIN PGP PUBLIC KEY BLOCK-----` e termina com `-----END PGP PUBLIC KEY BLOCK-----`
8. Agora, na sua conta GitHub, vá em Settings / SSH e GPG Key / New GPG Key e cole todo o conteúdo de sua chave.
9. Salve e informe a sua senha da conta, para finalizar o procedimento. 

Agora, sua conta e seus commits ganharam mais proteção e autenticação. Esperamos que tenha gostado dessa dica de segurança.