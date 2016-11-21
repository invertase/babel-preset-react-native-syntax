# babel-preset-react-native-syntax

This preset includes the syntax plugins from `babel-preset-react-native`.

This is useful for react-native libraries that want to use Babel plugins that may not be supported by React Native's default preset.

Previously, you'd have to either:

  1. Require your users to use ALL of the Babel plugins that you use in your lib in THEIR .babelrc
  2. Transpile your code down to ES5

Option 1) is super unforuntate, and resulted in creating a catch-all preset like `babel-preset-react-native-stage-0` that includes everything. There is a high chance that your library will break for people.

Option 2), though the same as what the rest of the Node community does, makes it more difficult to view and edit library source from within node_modules (useful for debugging).

In the future, the React Native packager may go down the route of https://github.com/facebook/react-native/issues/10966. At that point, a package author may still utilize this preset to help them compile their code to something akin to "sources.react-native-v1" (but the author would still transpile all the way down to ES5 for the "main" package entry point).

For now though, this is a solution that allows authors to transpile their code to "ES-React Native" (I just made that up just now...it's not a real thing).

It can be used like this:

```
{
  "presets": ["react-native-syntax"],
  "plugins": [
    ...any non-react-native plugins here, such as transform-decorators-legacy...
  ],
}
```
