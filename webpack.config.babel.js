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
    app: './src/script/app.js',
    /* create a vendor chunk for grabbing vendor resources */
    vendor: [
      'lodash'
    ]
    /* Create another chunk for a different page etc. */
    // app2: './src/script/app2.js'
  },
  output: {
    path: `${__dirname}/public`,
    filename: '[name].js'
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
      template: './src/markup/index.html',
      filename: 'index.html',
      chunks: ['vendor', 'app']
    }),
    new webpack.optimize.CommonsChunkPlugin(
      /* chunkName= */'vendor',
      /* filename= */'vendor.js'
    ),
    /* Example if we wanted to create a second page */
    // new HtmlWebpackPlugin({
    //   template: './src/markup/index.html',
    //   chunks: ['app2'],
    //   filename: 'app.html'
    // }),
    new ExtractTextPlugin('app.css'),
    /* If --dist is present in process opts then minimize bundles */
    (IS_DIST) ? new webpack.optimize.UglifyJsPlugin() : function () {}
  ],
  postcss: function () {
    return [ autoprefixer ];
  }
}

module.exports = config;
