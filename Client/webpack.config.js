const path = require('path');

// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const distDir = path.resolve(__dirname, 'dist');
const indexPath = path.resolve(__dirname, 'index.html');

// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

// module.exports = {
//     mode: 'development',
//     entry: {
//         app: './src/index.tsx',
//     },
//     output: {
//         globalObject: 'self',
//         filename: '[name].bundle.js',
//         path: distDir,
//     },
//     resolve: {
//         extensions: ['.js', '.json', '.ts', '.tsx', '.worker'],
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 loader: 'awesome-typescript-loader',
//             },
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader'],
//             },
//         ],
//     },
//     plugins: [
//         new MonacoWebpackPlugin(),
//         new CopyWebpackPlugin([
//             {
//                 from: indexPath,
//                 to: distDir,
//             },
//         ]),
//         new HtmlWebpackPlugin({
//             inject: true,
//             template: indexPath,
//         }),
//     ],
    
// };

// const path = require('path');
const lib = path.resolve(__dirname, "lib");

const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const common = {
    entry: {
        app: './src/index.tsx',
        "editor.worker": 'monaco-editor-core/esm/vs/editor/editor.worker.js'
    },
        resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.worker'],
    },
    output: {
        filename: '[name].bundle.js',
        path: distDir
    },
    module: {
        rules: [
        //     {
        //     test: /\.css$/,
        //     use: ['style-loader', 'css-loader']
        // },
                    {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
                    {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
            },
    ]
    },
    target: 'web',
    node: {
        fs: 'empty',
        child_process: 'empty',
        net: 'empty',
        crypto: 'empty'
    },
    resolve: {
        alias: {
            'vscode': require.resolve('monaco-languageclient/lib/vscode-compatibility')
        }
    }
};

if (process.env['NODE_ENV'] === 'production') {
    module.exports = merge(common, {
        plugins: [
            new UglifyJSPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
                    new CopyWebpackPlugin([
            {
                from: indexPath,
                to: distDir,
            },
        ]),
        new HtmlWebpackPlugin({
            inject: true,
            template: indexPath,
        }),
        ]
    });
} else {
    module.exports = merge(common, {
        devtool: 'source-map',
        module: {
            rules: [{
                test: /\.js$/,
                enforce: 'pre',
                loader: 'source-map-loader'
            }]
        }
    })
} 