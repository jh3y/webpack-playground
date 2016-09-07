const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer      = require('autoprefixer');
const webpack           = require('webpack');

const IS_DIST = (process.argv.indexOf('--dist') !== -1) ? true : false;

const config = {
  devServer: {
    port: 1987
  },
  entry: {
    app: './src/script/app.js'
  },
  output: {
    path: `${__dirname}/public`,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: /(src\/script)/,
        query: {
          presets: [
            'es2015'
          ]
        }
      },
      {
        test: /\.styl$/,
        include: /(src\/)/,
        // loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!stylus-loader')
      }
    ]
    ,
    resolve: {
      extensions: [ '', '.js', '.styl' ]
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/markup/index.html'
    }),
    new ExtractTextPlugin('app.css'),
    /* If --dist is present in process opts then minimize bundles */
    (IS_DIST) ? new webpack.optimize.UglifyJsPlugin() : function () {}
  ],
  postcss: function () {
    return [ autoprefixer ];
  }
}

module.exports = config;
