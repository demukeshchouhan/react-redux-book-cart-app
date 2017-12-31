var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry : "./src/index.js",
    output : {
        path : path.resolve(__dirname, "public"),
        filename : "app.bundle.js"
    },
    module : {
        rules : [
            {
                test : /\.jsx?$/,
                loader : "babel-loader",
                exclude : /node_modules/
            },
            {
                test : /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback : "style-loader",
                    use : ["css-loader", "sass-loader"]
                })
            }
        ]
    },
    devServer : {
        contentBase : path.resolve(__dirname, "public"),
        hot : true,
        inline : true,
        historyApiFallback : true,
        compress: true
    },
    devtool: "cheap-module-source-map",
    watch : true,
    plugins : [
        new HtmlWebpackPlugin({
            inject: true,
            filename: __dirname + 'index.html'
        }),
        new ExtractTextPlugin("style.css")
    ],
    resolve : {
        extensions : [".js", ".jsx", ".scss"]
    }

}