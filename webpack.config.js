const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'src'),
        },
        port: 8080,
        open: true,
        historyApiFallback: true,
    },
    resolve: {
        alias: {
            '@lion/form': path.resolve(__dirname, 'node_modules/@lion/form'),
            '@lion/input': path.resolve(__dirname, 'node_modules/@lion/input'),
            '@lion/button': path.resolve(__dirname, 'node_modules/@lion/button'),
        },
    },
};