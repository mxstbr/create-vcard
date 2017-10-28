# `create-vcard`

Create a vCard from an object. Simple wrapper around [`vcards-js`](https://npm.im/vcards-js).

## Installation

```sh
npm i create-vcard
```

## Usage

```js
import createVCard from 'create-vcard';

const card = createVCard({
  firstName: 'Max',
  lastName: 'Stoiber'
});

console.log(card.getFormattedString());
```

This will log the following:

```vcard
BEGIN:VCARD
VERSION:3.0
FN;CHARSET=UTF-8:Max Stoiber
N;CHARSET=UTF-8:Stoiber;Max;;;
REV=2017-10-28T15:26:54+02:00
END:VCARD
```

### Valid properties

See [`src/index.js`](./src/index.js) for a list of all the valid properties.

### Methods

See [`vcards-js`](https://npm.im/vcards-js) for documentation of how to use the returned vCard. (this module returns a `vcards-js` instance)

The most useful method is `card.getFormattedString()` as shown above.

## License

Licensed under the MIT License, Copyright ©️ 2017 Maximilian Stoiber. See [LICENSE.md](LICENSE.md) for more information.
