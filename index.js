module.exports = function preset() {
  return {
    plugins: [
      "@babel/syntax-jsx",
      "@babel/syntax-flow",
      "@babel/syntax-typescript",
      "@babel/syntax-class-properties",
      "@babel/syntax-async-generators",
      "@babel/syntax-optional-chaining",
      "@babel/syntax-object-rest-spread",
      "@babel/syntax-optional-catch-binding",
      "@babel/syntax-nullish-coalescing-operator"
    ]
  }
};
