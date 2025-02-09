module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'github',
    'implicit-dependencies',
    'import',
    'prettier',
    'simple-import-sort',
    'ethereumjs',
  ],
  env: {
    es2020: true,
    node: true,
  },
  ignorePatterns: [
    '.eslintrc.cjs',
    '.eslintrc.js',
    'benchmarks',
    'coverage',
    'dist',
    'examples',
    'node_modules',
    'prettier.config.js',
    'recipes',
    'scripts',
    'typedoc.js',
    'webpack.config.js',
    'vitest.config.ts',
    'vitest.config.browser.ts',
    'vitest.config.unit.ts'
  ],
  extends: [
    'typestrict',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  rules: {
    'no-restricted-imports': ['error', 'ethereum-cryptography/utils.js'],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase', 'camelCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/strict-boolean-expressions': ['error'],
    eqeqeq: 'error',
    'github/array-foreach': 'error',
    'implicit-dependencies/no-implicit': ['error', { peer: true, dev: true, optional: true }],
    'import/default': 'error',
    'import/export': 'error',
    'import/exports-last': 'off', // TODO: set to `warn` for fixing and then `error`
    'import/extensions': ['error','ignorePackages'],
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-cycle': 'off', // TODO: set to `warn` for fixing and then `error`
    'import/no-default-export': ['error'],
    'import/no-deprecated': 'off', // TODO: set to `warn` for fixing and then `error`
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-namespace': 'off',
    'import/no-self-import': 'error',
    'import/no-unresolved': 'off',
    'import/no-unused-modules': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: ['object', ['builtin', 'external'], 'parent', 'sibling', 'index', 'type'],
        'newlines-between': 'always',
      },
    ],
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-dupe-class-members': 'off',
    'no-extra-semi': 'off',
    'no-redeclare': 'off',
    'no-unused-vars': 'off',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prettier/prettier': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'ethereumjs/noBuffer': 'error',
  },
  parserOptions: {
    extraFileExtensions: ['.json'],
    sourceType: 'module',
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['test/**/*.ts', 'tests/**/*.ts'],
      rules: {
        'implicit-dependencies/no-implicit': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
}
