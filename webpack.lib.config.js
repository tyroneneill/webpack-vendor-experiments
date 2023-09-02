const path = require('path');
const {EsbuildPlugin} = require('esbuild-loader');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    "@company-a/my-lib": ['./src/index.ts']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'esbuild-loader',
        exclude: /node_modules/,
        options: {
            target: 'es2015'
        }
      },
    ],
  },
  optimization: {
    minimizer: [
        new EsbuildPlugin({target: 'es2015'})
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};