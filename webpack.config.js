const path = require('path');

module.exports = {
  entry: './lib/watch.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
