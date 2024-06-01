const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// fixme: Dotenv Pluginを使用すると、環境変数すべて展開されてしまう。
//        .envファイルに定義されたものだけ展開したので、EnvironmentPluginを使用
// const Dotenv = require('dotenv-webpack')
require('dotenv').config()

const config = {
  entry: {
    bundle: './src/index.ts',
  },
  mode: 'development',
  output: {
    asyncChunks: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    new webpack.EnvironmentPlugin(['MODE', 'API_HOST']),
  ],
}

module.exports = (env, argv) => {
  if (argv.mode === 'dev') {
  }

  if (argv.mode === 'prd') {
  }

  return config
}
