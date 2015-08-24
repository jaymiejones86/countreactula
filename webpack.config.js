module.exports = {
  cache: true,
  entry: './js/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel'},
      { test: /\.jsx$/, loader: 'babel'}
    ]
  }
};