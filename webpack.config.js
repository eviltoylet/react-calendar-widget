var path = require('path');
var merge = require('webpack-merge');
var ROOT_PATH = path.resolve(__dirname);
var TARGET = process.env.npm_lifecycle_event;
var config = {
    paths: {
        demo: path.join(ROOT_PATH, 'demos'),
        dist: path.join(ROOT_PATH, 'dist')
    }
};

var common = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devServer: {
            contentBase: "./demos"
        },
        entry: './demos/index.jsx',
        output: {
            path: config.paths.demo
        }
    });
} else if (TARGET === 'build') {
    module.exports = merge(common, {
        entry: './src',
        output: {
            path: config.paths.dist,
            filename: 'index.js',
            libraryTarget: 'umd'
        }
    });
}
