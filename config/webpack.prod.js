const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

const productionConfig = {
    mode: "production",
    devtool: "source-map", // Useful for Staging to debug the .maps files. Avoid to upload them to live server
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: './src/manifest.json',
                to: 'manifest.json'
            },
                { from: `./src/favicon.ico`, to: 'favicon.ico' },
                {
                    from: './src/assets/icons'
                }]
        })
    ],
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
