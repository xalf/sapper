var path = require('path');
var webpack = require("webpack");

module.exports = {
  context: path.join(__dirname, '/src/js/'),
  entry: "app.js",
  output: {
    //path: path.resolve(__dirname, './build/js/'),
    path: __dirname + '/build/js/',
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-3', 'react']
          }
        }
        
      }
    ]    
  },
  watch: true,
  plugins: [
  	//new webpack.optimize.UglifyJsPlugin()
  ],
  
};