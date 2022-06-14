const prettierOptions = require('./.prettierrc.js');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      classes: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    'nestjs',
    'prettier',
    '@typescript-eslint/eslint-plugin',
  ],
  extends: [
    'eslint:recommended',
    'plugin:nestjs/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: [
    '.eslintrc.js',
    'ormconfig.ts'
  ],
  rules: {
    'prettier/prettier': ['warn', prettierOptions],
    'max-len': ['warn', { code: 120 }],

    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error', {
        'args': 'all',
        'argsIgnorePattern': '^_',
      },
    ],
    'keyword-spacing': 'error',
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    'no-mixed-spaces-and-tabs': [
      'error',
    ],
    'no-multi-spaces': [
      'error',
    ],
    'space-infix-ops': 'error',
    'linebreak-style': [
      'error',
      'windows',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'eqeqeq': [
      'warn',
      'always',
    ],
    'no-unused-vars': [
      'error', {
        'args': 'all',
        'argsIgnorePattern': '^_',
      },
    ],
    'no-trailing-spaces': ['error', { 'skipBlankLines': true, 'ignoreComments': true }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'no-undef': 2,
    'space-before-blocks': 'error',
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline',
    }],
    'no-console': 'error',
    'arrow-spacing': 'error',
    'curly': ['error', 'multi-line'],
  },
  env: {
    node: true,
    jest: true,
  },
};