const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'build',
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}]
              ]
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ]
};
