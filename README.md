# shopping-cart

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Vuex for Everyone
In this course you'll learn all there is to know about Vuex by creating a shopping cart from scratch.

We will start off by creating a shopping cart with Vue and then progressively dive into Vuex features as we need them. Piece by piece we'll replace parts of our application with mutations, getters, and actions.

You'll also learn how to break your Vuex store into modules.

After this course, you will know when and how to use getters, mutations, actions and, how to split your Store with modules.

## Introduction

### Meet Vuex

Vuex is a state management library for Vue applications. In Vue.js is quite simple to work with components and share data among them, using events and props, especially in small to medium projects. Immagine that we're building a booking system for a Movie Theater. 

![](file:///home/dmytro/Immagini/node/vue2/Vuex/intro-1.png)

When a user buys a movie ticket, we will emit a BuyTicket event to the parent MovieRoom component, wich again will emit an event to the parent Movie component.

The Movie component now knows which movie, room and seat the user wants, and decreases the amount of available tickets, using props. In the same time it might emit an event to App.vue component. 

![](file:///home/dmytro/Immagini/node/vue2/Vuex/intro-2.png)

The App component then adds the ticket to the cart, also using props, and then the ShoppingCart component passes the item, which is the actual ticket to the ShoppingCartItem. 

This structure is fine for a small or medium application, but when an application grows, emitting and listening to events among dozens of components, might become tedious and overwhelming.

This is where Vuex comes to our rescue. 

![](file:///home/dmytro/Immagini/node/vue2/Vuex/intro-3.png)

Vuex is state management, serves as a centralized data store for all components in an application. In addition, it renforces rules to ensure that we interact with the state in a predictable fashion. This way we can rely on our components telling Vuex to update the state, instead of changing data directly. 

If you for inctance ad a tiket to the cart, the cart total will be calculated and at the same time, the available tickets will be reduced.

Vuex is debuggble. Every time Vuex change the state, the change is tracked and can be presented in history log.

## Install and use Vuex

Vuex.Store have 5 options, State, Mutations, getters, actions and modules.