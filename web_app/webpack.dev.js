const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    target: ["web", "es5"],
    devServer: {
        port: 1234,
        open: true,
        hot: true
    },
    plugins: [new HtmlWebpackPlugin()]
});
