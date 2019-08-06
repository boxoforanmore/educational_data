var webpack = require('webpack');  
module.exports = {  
  entry: [
    "./react-files/app.js"
  ],
  output: {
    path: __dirname + '/static',
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: []
};

/*
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      } 
    ]
  }
};
*/
