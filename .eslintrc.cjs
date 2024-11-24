module.exports = {
  env: { browser: true, es2020: true },
  parserOptions: {
    sourceType: 'module',
  },
  root: true,
  extends: ['eslint:recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  settings: {},
  rules: {
    'arrow-parens': ['warn', 'as-needed'],
    'comma-dangle': ['warn', 'always-multiline'],
    indent: ['error', 2],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'object-curly-newline': [
      'warn',
      {
        ObjectExpression: { consistent: true, multiline: true },
        ObjectPattern: { consistent: true, multiline: true },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true, minProperties: 4 },
      },
    ],
    'object-curly-spacing': ['warn', 'always'],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: ['return', 'export'] },
    ],
    'prefer-const': 2,
  },
};
