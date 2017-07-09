# Collection
* **Tiny** Unminified filesize is ~450 bytes
* **Extensible** Its a small class that you can easily extend with ES6
* **Easy to use** Simply call add / remove for your models
* **Agnostic** Simply works with objects, doesn't have any dependency for any function from each model (You could mix & match models if you needed)

## Notice
Be aware, this project is only written for ES6+ clients at the moment.

For a list of supported browsers, check the [mdn browser compatability list](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Browser_compatibility) for ES6 classes

## API

### ES6
```js
// Import the dependency
import Collection from '@jakejarrett/collection'
import Model  from '@jakejarrett/model'

const MyModel = new Model({ username: 'jake', id: 0 })
const MyCollection = new Collection([MyModel.freeze()])

const models = MyCollection.freeze()
// models contains the Frozen version of MyModel

```

## Documentation

### add
The `add` function takes a **Object** parameter.

It has no return value.

```js
MyCollection.add({ username: 'jake' })
```

### remove

The `remove` value takes an object. It will do a shallow comparison & remove the first similar model / object

It has no return value.

```js
MyCollection.remove({ username: 'jake' })
```

### freeze
A simple function that returns a "frozen" version of the Array of models (If you add one, it will not mutate the return value of freeze())

```js
MyCollection.add({ username: 'jake' })

const divergePoint = MyCollection.freeze()

MyCollection.remove({ username: 'jake' })

// Will fail
divergePoint === MyCollection.freeze()

```