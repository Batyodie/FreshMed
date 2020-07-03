const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const postcssPresetEnv = require('postcss-preset-env');
const postcss = require('postcss-nested')
// const postcss-scss = require('postcss-scss')
const StylelintPlugin = require('stylelint-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob-all');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const PATHS = {
    src: path.join(__dirname, 'src')
}




const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
    const config ={
        splitChunks: {
            chunks: 'all',
        },
    }
    if (isProd){
        config.minimizer = [
            new OptimizeCssAssetWebpackPlugin(),
            new TerserWebpackPlugin({
                terserOptions: {
                    output: {
                        comments: false,
                    },
                },
                cache: true,
            }),
        ]
    }
    return config
}
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`
const cssLoaders = extra =>{
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true,
            },

        },
            'css-loader',
        {
            loader: 'postcss-loader', options: {
                ident: 'postcss',
                plugins: () => [
                    postcssPresetEnv({
                        filename: filename('css'),
                        stage: 1,
                        autoprefixer: { grid: true},
                        features: {
                            'nesting-rules': true,
                        },
                        importFrom: [
                            'src/styles.css',
                            'src/styles/vars.css',
                            'src/styles/break-points.css'
                        ],
                    }),
                    postcss({

                    })

                ]
            }
        },

    ]
    if (extra){
        loaders.push(extra)
    }
    return loaders


}


module.exports = {

    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.js'],


    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@modules': path.resolve(__dirname, 'src/modules'),
        }
    },
    optimization: optimization(),
    devServer: {
        host: '192.168.0.101',
        disableHostCheck: true,
        port: 4200,
        hot: false,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            inject: 'body',
            minify: {
                collapseWhitespace: isProd,
                removeComments: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/assets'),
                to: path.resolve(__dirname, 'dist/assets'),
            },
            {
                from: path.resolve(__dirname, 'src/common/*/*.{svg,png,jpg,gif}'),
                to: path.resolve(__dirname, 'dist/assets/[name].[ext]'),
            }
        ]),
        new MiniCssExtractPlugin({
            filename: isDev ? '[name].css' : '[name].[hash].css',
        }),
        new StylelintPlugin ({
            files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
        }),
        new ImageminPlugin({
            disable: process.env.NODE_ENV !== 'production', // Disable during development
            pngquant: {
                quality: '65'
            }
        }),
        new HardSourceWebpackPlugin(),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
        }),
         new BrotliPlugin({
             asset: '[path].br[query]',
             test: /\.(js|css|html|svg)$/,
             threshold: 10240,
             minRatio: 0.8
         }),
        new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                     isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 2 } },
                    { loader: 'postcss-loader', options: {
                            ident: 'postcss',
                            plugins: () => [
                                postcssPresetEnv({
                                    stage: 1,
                                    autoprefixer: { grid: true},
                                    features: {
                                        'nesting-rules': true,
                                    },
                                    importFrom: [
                                        'src/styles.css',
                                        'src/styles/vars.css',
                                        'src/styles/break-points.css'
                                    ],
                                })
                            ]
                        } }
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },

            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file-loader',
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            }
        ]
    }
}
