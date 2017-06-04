const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    /*
      K-Nearest-Neighbour
     */
    "knn/realstate": "./src/knn/realstate/index.js",
    "knn/iris": "./src/knn/iris/index.js",
    "knn/breastcancer": "./src/knn/breastcancer/index.js",
    /*
      K-Means-Clustering
     */
    "kmc/realstate": "./src/kmc/realstate/index.js",
    /*
      Naive-Bayes
     */
    "naive-bayes/play-golf": "./src/naive-bayes/play-golf/index.js",
    /*
      Genetic-Algorithm
     */
    'genetic-algorithm/car': "./src/genetic-algorithm/car/index.js"
  },
  output: {
    path: __dirname + '/build',
    filename: "[name].js",
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /planck-with-testbed.js$/, loader: "script-loader" },
    ],
  },
  plugins: [
    /*
      Output index at the root of the project because github pages
     */
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'src/index.html',
      chunks: [],
    }),
    /*
      K-Nearest-Neighbour
     */
    new HtmlWebpackPlugin({
      filename: 'knn/realstate.html',
      template: 'src/knn/realstate/index.html',
      chunks: ['knn/realstate'],
    }),
    new HtmlWebpackPlugin({
      filename: 'knn/iris.html',
      template: 'src/knn/iris/index.html',
      chunks: ['knn/iris'],
    }),
    new HtmlWebpackPlugin({
      filename: 'knn/breastcancer.html',
      template: 'src/knn/breastcancer/index.html',
      chunks: ['knn/breastcancer'],
    }),
    /*
      K-Means-Clustering
     */
    new HtmlWebpackPlugin({
      filename: 'kmc/realstate.html',
      template: 'src/kmc/realstate/index.html',
      chunks: ['kmc/realstate'],
    }),
    /*
      Naive-Bayes
     */
    new HtmlWebpackPlugin({
      filename: 'naive-bayes/play-golf.html',
      template: 'src/naive-bayes/play-golf/index.html',
      chunks: ['naive-bayes/play-golf'],
    }),
    /*
      Genetic-Algorithm
     */
    new HtmlWebpackPlugin({
      filename: 'genetic-algorithm/car.html',
      template: 'src/genetic-algorithm/car/index.html',
      chunks: ['genetic-algorithm/car'],
    }),
  ],
  watch: true,
  devServer: {
    inline: true,
  },
};