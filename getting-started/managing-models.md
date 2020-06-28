# Managing Models

## Problem
In a normal project, you will have multiple models. Because Opaque JS does not ship a default backend implementation, you will always have to use a mixin with a specific implementation like so:

```js
import { Model } from '@opaquejs/opaque'
import { useSocketIO } from '@opaquejs/socketio'

export default class Post extends useSocketIO(Model) {
    // ...
}
```

## Solution
If you would have to apply every mixin to every Model seperately, managing all you mixins and models would be a mess. This is why you should use a base model, which you apply all mixins to, and import that everywhere. Your folder structure could look like this:

```
project/
    models/
        Base.js
        Post.js
        Comment.js
        User.js
```

Where *models/Base.js* applies all mixins.
```js
import { Model } from '@opaquejs/opaque'
import { useSocketIO } from '@opaquejs/socketio'
import { makeReactive } from '@opaquejs/vue'

export default class Base extends makeReactive(useSocketIO(Model)) {
    // ...
}
```

For example in *models/Task.js*, you import the base model.
```js
import Base from './Base'

export default class Post extends Base {
    // ...
}
```