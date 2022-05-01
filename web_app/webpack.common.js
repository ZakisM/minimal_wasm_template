const path = require("path");

module.exports = {
    entry: ["./src/index.tsx"],
    output: {
        filename: "web_app_bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: ["ts-loader"]
            },
            {
                test: /\.wasm$/,
                type: "asset/inline"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".tsx", ".ts"]
    },
    experiments: {
        asyncWebAssembly: true,
        topLevelAwait: true
    }
};
