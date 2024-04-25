const path = require('path');

module.exports = {
    entry: './main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: "javascript/auto",
            },
            {
                test: /\.tsx?$/, // Add this rule for TypeScript files
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.mjs', '.js'],

        alias: {
            'unit': path.resolve(__dirname, './unit/lib'),
        },

    },

    mode: 'development',
    devtool: 'source-map',
};