const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = env => {
  const outputPath = path.join(__dirname, "public");
  const jsFile = "./src/app.js";
  const CSSExtract = new ExtractTextPlugin("styles.css");
  const isProduction = env === "production";

  return {
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
          use: CSSExtract.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [CSSExtract],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: outputPath,
      historyApiFallback: true
    }
  };
};
