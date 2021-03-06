const importRules = {
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-restricted-paths': [
        'error',
        {
            zones: [
                {
                    target: './src',
                    from: '.',
                    except: ['./src', './node_modules']
                }
            ]
        }
    ],
    'import/no-absolute-path': [
        'error',
        { esmodule: true, commonjs: true, amd: true }
    ],
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': 'off', // This project allows internal modules imports.
    'import/no-webpack-loader-syntax': 'off', // This project does not use Webpack.
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': [
        'error',
        {
            noUselessIndex: true,
            commonjs: true
        }
    ],
    'import/no-relative-parent-imports': 'off', // This project allows relative parent imports.
    'import/no-unused-modules': [
        'error',
        {
            missingExports: true,
            unusedExports: true
        }
    ],
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'off', // This project does not use JSDoc or TomDoc.
    'import/no-extraneous-dependencies': [
        'error',
        {
            devDependencies: true,
            optionalDependencies: true,
            peerDependencies: false,
            bundledDependencies: true
        }
    ],
    'import/no-mutable-exports': 'error',
    'import/unambiguous': 'error',
    'import/no-commonjs': 'error',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'error',
    'import/first': 'error',
    'import/exports-last': 'error',
    'import/no-duplicates': ['error', { considerQueryString: true }],
    'import/no-namespace': 'error',
    'import/extensions': ['error', 'never'],
    'import/order': [
        'error',
        {
            groups: [
                'builtin',
                'external',
                'internal',
                'parent',
                'sibling',
                'index'
            ],
            'newlines-between': 'always',
            alphabetize: {
                order: 'asc',
                caseInsensitive: true
            }
        }
    ],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/prefer-default-export': 'off', // This project favors named exports.
    'import/max-dependencies': ['error', { max: 10 }],
    'import/no-unassigned-import': 'error',
    'import/no-named-default': 'error',
    'import/no-default-export': 'error',
    'import/no-named-export': 'off', // This project favors named exports.
    'import/no-anonymous-default-export': 'off', // This project favors named exports.
    'import/group-exports': 'error',
    'import/dynamic-import-chunkname': 'off' // This project does not use Webpack.
}

const importOverrides = [
    {
        files: ['./App.tsx'],
        rules: {
            'import/no-unused-modules': 'off', // Disabled because Expo will import and use it.
            'import/no-default-export': 'off' // Disabled because Expo requires a default export.
        }
    },
    {
        files: ['*.test.*'],
        rules: {
            'import/unambiguous': 'off', // Test files does not need this rule.
            'import/no-unused-modules': 'off' // Test files does not need this rule.
        }
    }
]

module.exports.importRules = importRules
module.exports.importOverrides = importOverrides
