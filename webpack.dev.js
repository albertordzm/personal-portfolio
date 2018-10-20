const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader?importLoader=1&modules&localIdentName=[name]__[local]___[hash:base64:5]'
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer'),
              ],
              sourceMap: true
            }
          }, {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true
  },
  mode: 'development'
});
