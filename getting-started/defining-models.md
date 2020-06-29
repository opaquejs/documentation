# Defining Models

A model typially lives inside its own file, named after the model class. Since Opaque JS is framework-agnostic, you can place your model where you want it to place. There is no recommended way, because every framework you might work with is different.

Opaque JS only provides a basic Model implementation at `@opaquejs/opaque`, which can be extended to implement your specific use case. Let's start with a local, non-permanent array representation of all your models. In this case, we can use the `@opaquejs/local` implementation. [Read more about the local model here](/documentation/extensions/local).

```js
import { LocalModel } from '@opaquejs/local'

class Task extends LocalModel {

    static get schema() {
        return {
            title: null,
            done: false
        }
    }

}
```

## The Schema
In the schema of a `Task`, you define all attributes a `Task` can have and give some default values with them. New `Tasks` will have all of these attributes by default.

### Typescript Support
For typescript projects, you can make use of the `attribute` decorator. It will automatically build a schema for your models, based on what attributes you are decorating with it.

This way, you are also getting type hints your your attributes.

```ts
import { LocalModel } from '@opaquejs/local'
import { attribute } from '@opaquejs/opaque'

class Task extends LocalModel {

    @attribute()
    public title: string | null = null

    @attribute()
    public done: boolean = false

}
```
