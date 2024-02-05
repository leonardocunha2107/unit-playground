const path = require('path');

module.exports = {
    entry: './test-render.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
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
        extensions: ['.tsx', '.ts', '.mjs', '.js'] // Add '.tsx' and '.ts' here
    },
    mode: 'development',
    devtool: 'source-map',
};