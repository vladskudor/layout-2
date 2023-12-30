let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", //Файл - точка входу
  output: { // Створення папки dist 
    filename: "bundle.js", // Файл в який компілюються всі js files
    assetModuleFilename: '[name][ext]'
  },
  mode: mode,
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000

  },
  module: {
    rules: [
      { 
        test: /\.txt$/, use: "raw-loader" 
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ], 
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
