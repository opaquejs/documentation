# Working with Models

::: warning
*Making a model persistent* can have different meanings, depending on your implementation. In our [local](/getting-started/installation.md#local-models) example, it will push this model to a local array, containing all *persistent* models.
:::

## Creating Models
To create a new model, you can simply create a new instance of your model class.
```js
const task = new Task()
```

### Setting Attributes
Now let's change some attributes.
```js
const task = new Task()
task.title = 'Buy milk'
// or
const task = Task.make({ title: 'Buy milk' })
```

### Making it persistent
Until now, our task is not persistent, it can not be accessed anywhere else in our application. Let's change this.
```js
const task = new Task()
task.title = 'Buy milk'
await task.save()
// or
const task = await Task.create({ title: 'Buy milk' })
```

## Updating Models
To update a Model, you can reuse the `save` method.

```js
const task = await Task.create({ title: 'Buy milk' })

task.done = true
await task.save()
```

## Removing Models
Deleting models is as easy as creating them.

```js
const task = await Task.create({ title: 'Buy milk' })

await task.remove()
```