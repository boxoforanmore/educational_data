var webpack = require('webpack');  
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {  
    entry: [
        "./react-files/app.jsx"
    ],
    output: {
        path: __dirname + '/static',
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|jsx)?$/,
        })
    ]
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
