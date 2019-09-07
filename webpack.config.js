const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    entry: './src/index.js', ///diem bat dau
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build') // create folder o ngoai cung`
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            }
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: 'css-loader'
            //     })
            // }
        ]
    }
    // plugins: [
    //     new ExtractTextPlugin('styles.css')
    //     //style.css is name file after bundle
    // ]
};

module.exports = config;
