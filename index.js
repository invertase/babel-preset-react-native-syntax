module.exports = function preset(api, options) {
  return {
    plugins: [
      "@babel/syntax-jsx",
      "@babel/syntax-flow",
      ...(!!options.flow && options.flow === 'strip' ? ['@babel/transform-flow-strip-types'] : []),
      ...(!!options.flow && options.flow === 'comment' ? ['@babel/transform-flow-comments'] : []),
      "@babel/syntax-class-properties",
      "@babel/syntax-async-generators",
      "@babel/syntax-optional-chaining",
      "@babel/syntax-object-rest-spread",
      "@babel/syntax-optional-catch-binding",
      "@babel/syntax-nullish-coalescing-operator"
    ],
    overrides: [
      {
        test: $ => !!$ && ($.endsWith('.ts') || $.endsWith('.tsx')),
        plugins: [
          ['@babel/syntax-typescript', { isTSX: true }],
        ],
      },
    ],
  }
};
