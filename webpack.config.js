const path = require('path');

module.exports = {
    entry: './main.ts',
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
    watchOptions: {
        poll: true,
        ignored: [
            // Add paths to ignore here
            // Do not include your local package
        ],
    },
    mode: 'development',
    devtool: 'source-map',
};