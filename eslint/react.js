const reactRules = {
    'react/boolean-prop-naming': 'off', // This project does not use propTypes.
    'react/button-has-type': 'off', // This project does not use DOM elements.
    'react/default-props-match-prop-types': 'off', // This project does not use defaultProps or propTypes.
    'react/destructuring-assignment': [
        'error',
        'always',
        { ignoreClassFields: false }
    ],
    'react/display-name': ['off', { ignoreTranspilerName: false }], // It is not possible to enable this rule only for anonymous function components.
    'react/forbid-component-props': [
        'error',
        {
            forbid: [
                {
                    propName: 'className',
                    allowedFor: ['View', 'Text']
                },
                {
                    propName: 'style',
                    allowedFor: ['View', 'Text']
                }
            ]
        }
    ],
    'react/forbid-dom-props': 'off', // This project does not use DOM elements.
    'react/forbid-elements': 'off', // This project does not use DOM elements.
    'react/forbid-foreign-prop-types': 'off', // This project does not use propTypes.
    'react/forbid-prop-types': 'off', // This project does not use propTypes.
    'react/function-component-definition': [
        'error',
        {
            namedComponents: 'arrow-function',
            unamedComponents: 'arrow-function'
        }
    ],
    'react/no-access-state-in-setstate': 'error',
    'react/no-adjacent-inline-elements': 'off', // This project does not use DOM elements.
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'off', // This project does not use DOM elements.
    'react/no-danger-with-children': 'off', // This project does not use DOM elements.
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'off', // This project does not use DOM elements.
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: false }],
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off', // This project may allow the use of setState().
    'react/no-string-refs': ['error', { noTemplateLiterals: true }],
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': ['error', { forbid: ['>', '"', "'", '}'] }],
    'react/no-unknown-property': 'off', // This project does not use DOM elements.
    'react/no-unsafe': ['error', { checkAliases: true }],
    'react/no-unused-prop-types': 'off', // This project does not use propTypes.
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-read-only-props': 'off', // This project does not use Flow.
    'react/prefer-stateless-function': [
        'error',
        { ignorePureComponents: false }
    ],
    'react/prop-types': 'off', // This project does not use propTypes.
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'off', // This project does not use defaultProps.
    'react/require-optimization': 'off', // This project aims to avoid class components.
    'react/require-render-return': 'error',
    'react/self-closing-comp': [
        'error',
        {
            component: true,
            html: false // This project does not use DOM elements.
        }
    ],
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'off', // This project does not use propTypes.
    'react/state-in-constructor': ['error', 'always'],
    'react/static-property-placement': 'off',
    'react/style-prop-object': [
        'error',
        {
            allow: []
        }
    ],
    'react/void-dom-elements-no-children': 'off', // This project does not use DOM elements.
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-child-element-spacing': 'off', // This project does not use DOM elements.
    'react/jsx-closing-bracket-location': 'off', // This rule is unnecessary or might conflict with Prettier.

    'react/jsx-closing-tag-location': 'off', // This rule is unnecessary or might conflict with Prettier.
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-curly-newline': 'off', // This rule is unnecessary or might conflict with Prettier.

    'react/jsx-curly-spacing': 'off', // This rule is unnecessary or might conflict with Prettier.
    'react/jsx-equals-spacing': 'off', // This rule is unnecessary or might conflict with Prettier.
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-first-prop-new-line': 'off', // This rule is unnecessary or might conflict with Prettier.
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-indent': 'off', // This rule is unnecessary or might conflict with Prettier.

    'react/jsx-indent-props': 'off', // This rule is unnecessary or might conflict with Prettier.
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    'react/jsx-max-depth': ['error', { max: 5 }],
    'react/jsx-max-props-per-line': 'off', // This rule is unnecessary or might conflict with Prettier.

    'react/jsx-no-bind': [
        'error',
        {
            ignoreDOMComponents: true, // This project does not use DOM elements.
            ignoreRefs: false,
            allowArrowFunctions: false,
            allowFunctions: false,
            allowBind: false
        }
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-no-literals': ['error', { noStrings: true, allowedStrings: [] }],
    'react/jsx-no-script-url': 'off', // It is not clear how this rule could be configured for react-native-web.
    'react/jsx-no-target-blank': 'off', // It is not clear how this rule could be configured for react-native-web.
    'react/jsx-no-undef': 'error',
    'react/jsx-no-undef': ['error', { allowGlobals: false }],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': 'off', // Conflicts with Prettier.
    'react/jsx-pascal-case': ['error', { allowAllCaps: false, ignore: [] }],
    'react/jsx-props-no-multi-spaces': 'off', // This rule is unnecessary or might conflict with Prettier.
    'react/jsx-props-no-spreading': [
        'error',
        {
            html: 'ignore', // This project does not use DOM elements.
            custom: 'enforce',
            explicitSpread: 'ignore',
            exceptions: []
        }
    ],
    'react/jsx-sort-default-props': 'off', // This project does not use defaultProps.
    'react/jsx-sort-props': [
        'error',
        {
            callbacksLast: true,
            shorthandFirst: true,
            shorthandLast: false,
            ignoreCase: true,
            noSortAlphabetically: false,
            reservedFirst: true
        }
    ],
    'react/jsx-space-before-closing': 'off', // This rule is unnecessary or might conflict with Prettier.
    'react/jsx-tag-spacing': 'off', // This rule is unnecessary or might conflict with Prettier.

    'react/jsx-uses-react': 'warn', // This rule actually prevents @typescript-eslint/no-unused-vars problems with React. ¯\_(ツ)_/¯
    'react/jsx-uses-vars': 'warn', // This rule actually prevents @typescript-eslint/no-unused-vars problems with JSX. ¯\_(ツ)_/¯
    'react/jsx-wrap-multilines': 'off' // This rule is unnecessary or might conflict with Prettier.
}

module.exports.reactRules = reactRules
