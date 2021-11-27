let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


// const cssLoaders = extra => {
//   const loaders = ['css-loader']

//   if (extra) {
//     loaders.push(extra)
//   }

//   return loaders
// }


module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devServer:{
    port: 3000
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.(png|jpg|svg|gif|webp)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'img',
          name: '[name].[ext]',
        }
      },

      {
        test: /\.(ttf|woff|woff2|eot)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'font',
          name: '[name].[ext]',
        }
      },

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
  ]

};
