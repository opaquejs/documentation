# Installation

All you need to do to get started is to install Opaque JS through npm or yarn
```sh
npm install @opaquejs/opaque
```

::: warning Please note
After this, you either have to write your own implementaion on how to store, retrieve and update you models, or you go with one of the defaults below.
:::

## Local models
Local models don't reflect any API state, they are only used as a temporalily storage. They are great for testing or just tinkering around, but be aware that the stored models are not persistent.

Basically, the local model only takes care of adding an automatically incrementing `id` field to every model and storing them in an array.

```sh
npm install @opaquejs/local
```