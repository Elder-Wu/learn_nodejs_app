const webpack = require('webpack');

module.exports = {
    entry: "./public/index/js/index.js",
    output: {
        path: __dirname + "/public/index/js",
        filename: "index.bundle.js"
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
};