const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const productionConfig = {
    mode: "production",
    devtool: "source-map", // Useful for Staging to debug the .maps files. Avoid to upload them to live server
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /.(css|sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", "sass-loader"
                ],
            },
        ]
    }
};

module.exports = merge(common, productionConfig);
