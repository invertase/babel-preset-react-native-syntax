# babel-preset-react-native-syntax

This preset includes the syntax plugins from `babel-preset-react-native`.

This is useful for react-native libraries that want to use Babel plugins that may not be supported by react-native's default preset.

Previously, you'd have to either:

a) require your users to use ALL of the Babel plugins that you use in your lib in THEIR .babelrc
b) transpile your code down to es5

Option a) is super unforuntate, and resulted in creating a catch-all preset like `babel-preset-react-native-stage-0` that includes everything.

Option b), though the same as what the rest of the Node community does, makes it more difficult to view and edit library source from within node_modules (useful for debugging).

In the future, the React Native packager may go down the route of https://github.com/facebook/react-native/issues/10966. At that point, a package author may still utiliize this preset to help them compile their code to "sources.react-native-v1" (but the author would still transpile all the way down to es5).

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
