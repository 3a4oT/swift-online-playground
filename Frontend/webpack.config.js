const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const distDir = path.resolve(__dirname, "dist");
const indexPath = path.resolve(__dirname, "index.html");

const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.tsx"
    // "editor.worker": 'monaco-editor/esm/vs/editor/editor.worker.js',
  },
  output: {
    globalObject: "self",
    filename: "[name].bundle.js",
    path: distDir
  },
  resolve: {
    // alias: {
    //     'vscode': require.resolve('monaco-languageclient/lib/vscode-compatibility')
    // },
    extensions: [".js", ".json", ".ts", ".tsx", ".worker"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new MonacoWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: indexPath,
        to: distDir
      }
    ]),
    new HtmlWebpackPlugin({
      inject: true,
      template: indexPath
    })
  ],
  target: "web",
  node: {
    fs: "empty",
    child_process: "empty",
    net: "empty",
    crypto: "empty"
  }
};
