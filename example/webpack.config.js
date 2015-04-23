var webpack = require('webpack');

module.exports = {
  entry : {
    'vendor' : ['react'],
    'app' : ['./js/init.jsx']
  },
  output : {
    path : __dirname + '/build/',
    filename : '[name].bundle.js',
    publicPath : '/build/'
  },
  module : {
    loaders : [
      { test : /\.jsx?$/, loaders : ['babel'], exclude: /node_modules/ },
      { test : /\.scss$/, loader : 'style!css!sass' }
    ]
  },
  resolve : {
    extensions : ['', '.js', '.jsx', '.css', '.scss'],
    moduleDirectories : ['web_loaders', 'web_mocules', 'node_loaders', 'node_modules']
  },
  plugins : [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};