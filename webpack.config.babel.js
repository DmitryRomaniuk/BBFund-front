// @flow

import path from 'path';
import webpack from 'webpack';

import { WDS_PORT, isProd } from './src/shared/config';

export default {
    entry: [
        'react-hot-loader/patch',
        './src/client',
    ],
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/dist/`,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    },
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                }],
            },
        ],
    },
    devtool: isProd ? false : 'source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        port: WDS_PORT,
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
};
