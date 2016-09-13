const webpack           = require('webpack');

const config = {
  entry: {
    test: './test/test.build.js'
  },
  output: {
    path: `${__dirname}/test`,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
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
        loader: 'null-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  plugins: [],
}

module.exports = config;
