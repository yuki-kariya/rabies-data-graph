const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// fixme: Dotenv Pluginを使用すると、環境変数すべて展開されてしまう。
//        .envファイルに定義されたものだけ展開したので、EnvironmentPluginを使用
// const Dotenv = require('dotenv-webpack')
require('dotenv').config()
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    bundle: './src/index.ts',
  },
  mode: 'development',
  output: {
    asyncChunks: true,
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      // todo: add eslint-webpack-loader
      {
        test: /\.tsx?/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    new webpack.EnvironmentPlugin(['MODE', 'API_HOST']),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
}

module.exports = (env, argv) => {
  if (argv.mode === 'dev') {
  }

  if (argv.mode === 'prd') {
  }

  return config
}
