const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');

const app = new (require('express'))();
const port = 3001;

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    noInfo: true,
    filename: 'bundle.js',
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
    },
    historyApiFallback: true,
}));

app.use(webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
}));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
});

app.listen(port, error => {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})