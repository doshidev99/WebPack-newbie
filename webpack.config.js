const path = require('path');

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
            }
        ]
    }
};

module.exports = config;
