module.exports = {
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!(@lion/ui|lit|lit-html|@lion/ui/define))/',
    ],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy',
    },
};
