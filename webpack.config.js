module.exports = {
    devServer: {
        contentBase: "./demos"
    },
    entry: './demos/index.jsx',
    output: {
        path: __dirname + "/demos"
    },
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