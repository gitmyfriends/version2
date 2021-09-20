const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// let htmlPageNames = ['login'];
// let multipleHtmlPlugins = htmlPageNames.map(name => {
//   return new HtmlWebpackPlugin({
//     template: `${name}.html`, // relative path to the HTML files
//     filename: `${name}.html`, // output HTML files
//     chunks: [`${name}`] // respective JS files
//   })
// });

module.exports = {
  entry: 
    path.resolve(__dirname, './client/index.js'),
    // login: path.resolve(__dirname, './client/login.js')
  

  output: {
    //3000 production server path
    path: path.resolve(__dirname, 'build'),

    //8080 devServer path in browser!!
    publicPath: '/build',

    filename: 'bundle.js', 
  },

  mode: process.env.NODE_ENV, 
  //8080 server
  

  // plugins: 
  //   [].concat(process.env.NODE_ENV === 'production' ? [new MiniCssExtractPlugin()] : []),
  //   [new HtmlWebpackPlugin({
  //     template: "index.html",
  //     chunks: ['main']
  //   })
  //   ].concat(multipleHtmlPlugins)
  // ],

  module: {
    rules: [{
      test: /.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ["@babel/plugin-transform-runtime"],
        }
      }
    },
    {
      test: /\.(sa|sc|c)ss$/, 
      use: [
        'style-loader', 
        'css-loader', 'sass-loader'],
    }
  ],
  },
  
   
  

  //8080 server
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
      // publicPath: '/build'
    },
    proxy: {
      '/github/*' : 'http://localhost:3000/',
      '/main/*' : 'http://localhost:3000/',
    },
    compress: true,
    port: 8080,
  },
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  
  },


}