var webpack = require('webpack');  
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
