# Models In-Depth
In this article, you will get a deeper understanding of the inner workings of models, and how you can use them to write better code.
## How attributes are resolved
If you are accessing a property, for example `post.author` this call goes through a variety of methods.

### 1. Getters / Setters
If there is a getter defined for this property on the model, call the getter. This getter could look like this:
```js
class Post {
    get author() {
        return 'written by ' + this.attributes.author
    }
}
```

### 2. Live Attributes
If there is no getter or setter, redirect the call to the getter or setter of `post.attributes`.
`post.attributes` is an object, which has a getter and setter for each of your attributes.

### 3. Finally Getting the attribute
`post.attributes.post` is a getter, which calls `post.getAttribute('author')`.