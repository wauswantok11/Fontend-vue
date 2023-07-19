module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential"], //, "eslint:recommended" 
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    // 'nuxt/no-cjs-in-config': 'off',
    // 'vue/comment-directive': 'off',
    // "unicorn/no-array-for-each": "off",
    "vue/multi-word-component-names": 0,
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
