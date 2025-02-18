// shell-app/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    publicPath: 'http://localhost:3000/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { 
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-react'] }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell_app',
      remotes: {
        micro_frontend_auth: 'micro_frontend_auth@http://localhost:3001/remoteEntry.js',
        micro_frontend_dashboard: 'micro_frontend_dashboard@http://localhost:3002/remoteEntry.js',
        micro_frontend_profile: 'micro_frontend_profile@http://localhost:3003/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^17.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^17.0.0' },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: { extensions: ['.js', '.jsx'] },
};
