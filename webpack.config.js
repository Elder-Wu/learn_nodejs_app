const webpack = require('webpack');
const path = require("path")

const publicPath = "public"

let jsName = "index"
const index = {
    entry: path.resolve(publicPath, `${jsName}/js/${jsName}.js`),
    path: path.resolve(publicPath, `${jsName}/js`),
    filename: `${jsName}.bundle.js`
}

module.exports = {
    mode: "production",
    entry: index.entry,
    output: {
        path: index.path,
        filename: index.filename
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
};