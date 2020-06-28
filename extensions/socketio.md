# Socket IO


## Install
```sh
npm install @opaquejs/socketio
```

## Usage
This Extension exports a `useSocketio` mixin, which you can apply to your models.
```js
import { Model } from '@opaquejs/opaque'
import { useSocketio } from '@opaquejs/socketio'

export default class Base extends useSocketio(Model) {

}
```

## Configuration
### Resource Names
Typically, your model refers to a specific resource type on a server. With the static `resource_name` property on your models, you are specifying which resource your model is refering on the server. This value is later used in [Event Names](#event-names). By default, it is defined as:
```js{3}
export default class Base extends useSocketio(Model) {
    static get resource_name() {
        return this.name.toLowerCase() + 's'
    }
}
```

### Event Names
You can change the static `$events` property on a model implementing `useSocketio`. By default, they are defined as:
```js{4,5,6,7,8}
export default class Base extends useSocketio(Model) {
    static get $events() {
        return {
            create: `${this.resource_name}:create`,
            update: `${this.resource_name}:update`,
            patch: `${this.resource_name}:patch`,
            remove: `${this.resource_name}:remove`,
            fetch: `${this.resource_name}:find`,
        }
    }
}
```

### More Granular Control
If you want more granular control over how your resources are fetched from the server, you can overwrite all methods that are defined in `useSocketio`. In case that you just want to overwrite the communication with the server, you can overwrite the `saveRemote`, `createRemote`, `removeRemote` and `fetchRemote` methods.

If you want to control by hand, overwrite the `save`, `remove` and `fetch` methods. To know what method does what, have a look in the source code.