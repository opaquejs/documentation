# Querying
You can access all query features through the `query` method of the model class.

```js
const all_tasks = Task.query().get()
```

## Basic Querying
To filter all models, you can make use of the `where` method.
```js
const completed = Task.query().where('done', '==', true).get()
```
::: tip
All available comparisons are `==`, `===`, `<`, `>` and `!=`.
:::

## Custom Queries
If you want to have more control over filtering your models, you can manually filter with `filter`.
```js
const tasks_with_m = Task.query()
                         .filter(({ title }) => title.includes('m'))
                         .get()
```

## Chaining
You can even chain multiple conditions together.
```js
const tasks_with_m = Task.query()
                         .filter(({ title }) => title.includes('m'))
                         .where('done', '==', true)
                         .get()
```

## Reactivity
All of the previously generated queries are **reactive** by default. This means, if you create another `Task` fulfilling your constraints, the generated query will automatically insert this `Task` in your results.

```js{4,9}
const completed = Task.query().where('done', '==', true).get()

console.log(completed)
// [ { title: 'Buy milk', done: true } ]

await Task.create({ title: 'Buy a new TV', done: true })

console.log(completed)
// [ { title: 'Buy milk', done: true }, { title: 'Buy a new TV', done: true } ]
```