module.exports = {
    preset: 'jest-expo',
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)'
    ],
    collectCoverage: false,
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/coverage/**',
        '!**/node_modules/**',
        '!**/reports/**',
        '!**/web-build/**',
        '!**/babel.config.js',
        '!**/jest.config.js',
        '!**/stryker.conf.js'
    ]
}
