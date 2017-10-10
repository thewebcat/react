var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                enforce: "pre",
                test: /\.js$/,
                loader: 'eslint-loader',
                include: [
                    path.resolve(__dirname, "src"),
                ]
            }, {
                test: /\.js$/,
                loaders: ['babel-loader?plugins[]=transform-runtime'],
                include: [
                    path.resolve(__dirname, "src"),
                ]
            }, {
                test: /\.s[a|c]ss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader',
                    options: {
                        includePaths: ['./src', './node_modules/bootstrap/scss']
                    }
                }]
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            }
        ]
    }
}