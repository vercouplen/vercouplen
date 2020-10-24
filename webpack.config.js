const HtmlWebPackPlugin = require("html-webpack-plugin")
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!()\/).*/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ['@babel/preset-react'],
            plugins: ["transform-class-properties"]
          }
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
  resolve: {
    alias: {
      "react-native": "react-native-web"
    },
    extensions: [".web.js", ".js"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    hot: true,
  },
}