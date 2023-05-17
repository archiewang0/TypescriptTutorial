const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/section1_2.ts',
    devServer: {
        static: [
            {directory: path.join(__dirname)},
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
    },
    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.js'],

    }
}