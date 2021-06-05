/*
    npm i node-sass postcss-loader@3.0.0 postcss-preset-env sass-loader css-loader cssnano mini-css-extract-plugin cross-env file-loader npm-watch webpack webpack-cli copy-webpack-plugin -D
*/

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');

const devMode = true;

module.exports = {
    mode: devMode ? 'development' : 'production',
    entry: [
        // './resources/js/app.js',
        './resources/scss/app.scss',
        './resources/images/logo-combine.png',
        './resources/images/professional-business-team-MXTGATF.jpg',
        './resources/images/cheerful-business-team-giving-each-other-high-five-STW5SJ5.jpg',
        './resources/images/professional-business-team-QAPK5CH.jpeg',
        './resources/images/icon/icon-01.png',
        './resources/images/icon/icon-02.png',
        './resources/images/icon/icon-03.png',
        './resources/images/icon/icon-04.png',
        './resources/images/icon/icon-05.png',
        './resources/images/icon/icon-06.png',
        './resources/images/img-contact.jpeg',
        './resources/images/logo1.jpg',
        './resources/images/logo2.jpg',
        './resources/images/logo3.jpg',
        './resources/images/logo4.jpg',
        './resources/images/logo5.jpg',
        './resources/images/logo6.jpg',
        './resources/images/logo7.jpg',
        './resources/images/logo8.jpg',
        './resources/images/img03.png',
        './resources/images/logo-urus-white.png'
    ],

    output: {
        filename: 'js/app.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'mylib',
        libraryTarget: 'var',
    },

    module: {
        rules: [
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: devMode
                                ? () => []
                                : () => [
                                      postcssPresetEnv({
                                          browsers: ['>1%'],
                                      }),
                                      require('cssnano')(),
                                  ],
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './images',
                            publicPath: '../images',
                            emitFile: true,
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? 'css/app.css' : 'css/app.min.css',
        }),
    ],

    // watchOptions: {
    //     aggregateTimeout: 200,
    //     poll: 1000,
    // },
};
