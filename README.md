# varops
![Travis (.com)](https://img.shields.io/travis/com/nothingrandom/varops)
> Object for parsing javascript operators from variables

## Install

``` bash
$ yarn add varops
$ npm install varops
```

## Usage (ES6 imports)
``` js
import varops from 'varops';

const plus = '+';
const maths = varops[plus](1, 10);

console.log(maths); // 11
```

## Support for these operators;
`+` `-` `*` `/` `**` `%`

## License
MIT © [Benjamin Grant](https://nothingrandom.com)