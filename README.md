<p align="center">
  <a href="https://invertase.io">
    <img src="https://static.invertase.io/assets/invertase-logo-small.png"><br/>
  </a>
  <h2 align="center">Babel Preset React Native Syntax</h2>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@invertase/babel-preset-react-native-syntax"><img src="https://img.shields.io/npm/dm/@invertase/babel-preset-react-native-syntax.svg?style=flat-square" alt="NPM downloads"></a>
  <a href="https://www.npmjs.com/package/@invertase/babel-preset-react-native-syntax"><img src="https://img.shields.io/npm/v/@invertase/babel-preset-react-native-syntax.svg?style=flat-square" alt="NPM version"></a>
  <a href="/LICENSE"><img src="https://img.shields.io/npm/l/@invertase/babel-preset-react-native-syntax.svg?style=flat-square" alt="License"></a>
  <a href="https://discord.gg/C9aK28N"><img src="https://img.shields.io/discord/295953187817521152.svg?logo=discord&style=flat-square&colorA=7289da&label=discord" alt="Chat"></a>
  <a href="https://twitter.com/invertaseio"><img src="https://img.shields.io/twitter/follow/invertaseio.svg?style=social&label=Follow" alt="Follow on Twitter"></a>
</p>

This preset includes the latest syntax plugins as specified in `babel-preset-react-native`.

> Latest supported React Native version: **^0.56.0**

> Latest supported Metro version: **^0.45.0**

> Latest supported Babel version: **^7.0.0**

----

> `npm i @invertase/babel-preset-react-native-syntax`

----

This is useful for React Native libraries that want to use Babel plugins that may not be supported by React Native's default preset.
 
Additionally this allows editing/viewing library source from within `node_modules` (useful for debugging) as there's no transformation of library code (unless you add any additional transform plugins).

### Example Usage

```json
{
  "presets": ["@invertase/react-native-syntax"],
  "plugins": [
    "transform-decorators-legacy"
  ]
}
```

### Options

#### `flow -> 'strip' | 'comment'`

**Optional**: Whether to transform flow syntax by striping it out entirely or comment it out 
but preserve the /* @flow */ directive and still be able to use flow.

 - `strip` -> `@babel/plugin-transform-flow-strip-types`
 - `comment` -> `@babel/plugin-transform-flow-comments`
 - `undefined` -> do nothing - flow syntax remains untouched

#### Example
```json
{
  "presets": [
    "@invertase/react-native-syntax",
    {
      "flow": "comment"
    }
  ],
  "plugins": [
    "transform-decorators-legacy"
  ]
}
```

----

#### Credits

- [Skevy](https://github.com/skevy) for his original repo: https://github.com/skevy/babel-preset-react-native-syntax

