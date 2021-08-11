const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    publicPath: '/build',
    port: 8080,
    contentBase: path.join(__dirname, './client'),
    proxy: {
      '*': 'http://localhost:3000',
      secure: false,
      changeOrigin: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    fallback: {
      'path': require.resolve('path-browserify')
    }
  },
  mode: process.env.NODE_ENV,
};
