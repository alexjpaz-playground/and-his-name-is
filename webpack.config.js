const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    main: "./src",
  },
  output: {
    library: "AndHisNameIs",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyPlugin([
      { from: 'sounds', to : 'sounds' }
    ])
  ]
};
