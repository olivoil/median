
# median

  median value utility

## Installation

    $ component install olivoil/median

## API

### median(array)

  Return the median value in `array`:

```js
median([1,5,6,1,2,0])
```

### median(array, fn)

  median value in `array` with callback `fn(val, i)`:

```js
var age = median(users, function(u){ return u.age })
```

### median(array, string)

  median value in `array` with the given property `string`:

```js
var age = median(users, 'age')
```

# License

  MIT
