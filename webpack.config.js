import path from "path";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

export default {
    // entry - path, array, object, object{[]}
    context: path.resolve("app"),
    entry: {
        style: "./scripts/style.js",
        main: "./scripts/index.js",
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve("dist"),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new HtmlWebpackPlugin({
            template: "./html/index.html",
        }),
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve("./images/"),
        //             to: path.resolve("dist/images"),
        //         },
        //     ],
        // }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
};
