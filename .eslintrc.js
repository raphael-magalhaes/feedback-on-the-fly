const { importOverrides, importRules } = require('./eslint/import')
const { reactRules } = require('./eslint/react')
const { reactHooksRules } = require('./eslint/reactHooks')

module.exports = {
    ignorePatterns: [
        'coverage',
        'node_modules',
        'reports',
        'web-build',
        'babel.config.js',
        'jest.config.js',
        'stryker.conf.js',
        'eslint'
    ],
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:import/typescript'
    ],
    overrides: [...importOverrides],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'import', 'react-hooks'],
    rules: {
        ...importRules,
        ...reactRules,
        ...reactHooksRules
    }
}
