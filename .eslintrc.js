module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['unused-imports', 'vue'],
  rules: {
    'vue/script-setup-uses-vars': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
