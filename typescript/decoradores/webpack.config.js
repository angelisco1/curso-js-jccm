const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    }
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
