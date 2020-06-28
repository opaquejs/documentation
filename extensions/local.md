# Local Models

Local models don't reflect any API state, they are only used as a temporalily storage. They are great for testing or just tinkering around, but be aware that the stored models are not persistent.

Basically, the local model only takes care of adding an automatically incrementing `id` field to every model and storing them in an array.

## Install
```sh
npm install @opaquejs/local
```