# Reactive Vue Models

The `vue` extension makes your models reactive, so that vue can watch for changes.

## Install
```sh
npm install @opaquejs/vue
```

## Usage
This Extension exports a `makeReactive` mixin, which you can apply to your models.
```js
import { Model } from '@opaquejs/opaque'
import { makeReactive } from '@opaquejs/vue'

export default class Base extends makeReactive(Model) {

}
```

Then, we need to tell vue to use your models as reactive objects. Put this piece of code to the place where you are initializing Vue. In a default Vue Project, this is `src/main.js`.

```js{4}
import Vue from 'vue'
import Base from './models/Base'

Vue.use(Base)

const app = new Vue(
    // ...
)
```
::: warning
If you are not using a **Base Model** how it is described in [Managing Models](/getting-started/managing-models), you will have to call `Vue.use(...)` on **every** Model.
:::

## Manually Making Queries Reactive
::: tip HINT
This step is only required, if you are changing the static `$query` property after applying `makeReactive`.
:::
By default, the `makeReactive` mixin also applies another mixin exported as `makeReactiveQuery` to the static `$query` property of the mixed model. If you are changing the query afterwards in your model, make sure to apply `makeReactiveQuery` to this query, to make it reactive. 
```js
import { Model } from '@opaquejs/opaque'
import { makeReactive, makeReactiveQuery } from '@opaquejs/vue'
import YourCustomQuery from './Query'

export default class ReactiveModel extends makeReactive(Model) {

}

CustomModel.$query = makeReactiveQuery(YourCustomQuery)
```