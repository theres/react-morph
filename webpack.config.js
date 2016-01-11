var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './demo/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    devtool: 'sourcemap',
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'babel-loader' },
            { test: /\.js$/, loader: 'babel-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loader: 'style-loader!css-loader?modules!postcss-loader!sass-loader' },
            { test: /\.svg$/, loader: 'svg-inline' }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'React Morph Components'
        })
    ]
};
