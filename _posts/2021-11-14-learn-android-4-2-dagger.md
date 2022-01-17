---
layout: post
title: Aula 4.2 - Dagger 2
description: Injeção de dependência
author: milla
image: media/images/2.png
categories: [ Android, tutorial ]
tags: [ dagger, model ]
---

## Principio da Inversão de Dependência
O princípio da inversão de dependência trata-se de uma maneira específica para desacoplar as dependências entre os objetos. O objetivo deste princípio é a redução do acoplamento entre os componentes através de uma camada de abstração. Esta inversão de dependência é um princípio da SOLID. 

---
### O que é SOLID?

S | O | L | I | D
---|---|---|---|---
Single Responsability Principle | Open/Closed | Liskov Susbtitution Principle | Interface Segregation | Dependency Inversion Principle

---

Em sua definição, temos:
- Componentes de mais alto nível não devem depender de componentes de níveis mais baixos, mas ambos devem depender de abstrações.
- Abstrações não devem depender de implementações, mas as implementações devem depender de abstrações.
Logo, passar a dependência pelo construtor é uma forma de remover da nossa classe a responsabilidade de instanciar um objeto. Essa é uma forma de fazer a injeção de dependência, que é uma forma de implementar a inversão de dependência.

Exemplo de implementação:

<script src="https://gist.github.com/jcaiqueoliveira/31016b89515182943c8cd00b9e902147.js"></script>
---
## Como funciona o Dagger?
O Dagger 2 é uma forma fornecer as dependências utilizadas em nossa classe através de códigos gerados automaticamente. Ele baseia-se na JSR 330 que define um conjunto de anotações para usar em classes injetáveis buscando maximizar a reusabilidade, testabilidade e manutenibilidade de um código. Dentre essas anotações temos:
- @Inject: Anotação utilizada quando se necessita pedir alguma dependência.
- @Module: Anotação utilizada em classes que fornecem dependências.
- @Provides: Anotação utilizadas em métodos que proveem dependências, os métodos provedores são encontrados nas classes com a anotação @Module.
 -@Component: São basicamente injetores, uma ponte entre módulos e provides, neles definimos quem pode utilizar nossos módulos e quais módulos são utilizados.
 
Logo, o Dagger 2 facilita o trabalho de evitar acoplamento e organizar todas as dependências do nosso projeto.

[Exemplo de Aplicação com Dagger](https://github.com/jcaiqueoliveira/introDagger2/tree/master/introDagger)

---

 # Bibliografia
 - [InfoQ](https://www.infoq.com/br/presentations/principios-solid/)
 - @jcaiqueoliveira - [Introdução ao Dagger 2](https://medium.com/android-dev-br/introdução-ao-dagger-2-56d193118a6c)