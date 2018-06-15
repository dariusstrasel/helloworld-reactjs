const path = require("path");
const webpack = require("webpack");
const bundleFolder = "dist/";
const bundlePath = path.resolve(__dirname, bundleFolder);
const serverPort = 3000;

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['env'] }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    publicPath: bundlePath,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname,'public'),
    port: serverPort,
    publicPath: `http://localhost:${serverPort}/dist`
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
};
