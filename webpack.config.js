const path = require("path");

const outputPath = path.join(__dirname, "public");
const jsFile = "./src/app.js";

module.exports = {
  entry: jsFile,
  output: {
    path: outputPath,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: outputPath,
    historyApiFallback: true
  }
};
