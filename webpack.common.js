const path = require("path");


module.exports = {
  entry: {
    main: "./src/index.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name][hash].[ext]",
          outputPath: "imgs",
        },
      },
    ],
  },
 
};
