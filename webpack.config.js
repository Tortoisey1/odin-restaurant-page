const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for the bundle
  output: {
    filename: 'main.js', // Output bundle filename
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Clean the output directory before emit
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template file for the plugin
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/, // Use for CSS files
        use: ['style-loader', 'css-loader'], // Loaders to handle CSS
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Use for image files
        type: 'asset/resource', // Type of asset handling
      },
    ],
  },
  mode: 'development', // Set the mode to development
};
