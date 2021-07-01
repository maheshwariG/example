const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const sharedConfig = require('./webpack.common.config.js');
const config= {
    target: 'web',
    entry:'./source/index.js',
    output:{
        path:path.resolve(__dirname,'build'),
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            vendorStyle: {
                test: module =>
                  module.nameForCondition &&
                  /[\\/]source[\\/]styles[\\/]thirdparty[\\/].*\.css$/.test(
                    module.nameForCondition()
                  ) &&
                  !/^javascript/.test(module.type),
                chunks: 'all',
                name(module) {
                  const moduleFileName = module.identifier().split(path.sep).reduceRight(item => item);
                  const moduleName = moduleFileName.split('.')[0];
                  return `thirdparty-${moduleName}`;
                },
                minChunks: 1,
                priority: 4,
                enforce: true,
              },
            styles: {
              name: 'styles',
              type: 'css/mini-extract',
              test: /\.css$/,
              chunks: 'all',
              enforce: true,
            },
          },
        },
      },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'source','index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
          })
    ],
    devServer: {
        historyApiFallback: true,
      },
    module:{
        rules:[
            {
            test:/\.css$/,
            use:[MiniCssExtractPlugin.loader]
            },
            {
                test: /\.css$/i,
                loader: "css-loader",
                options: {
                  modules: {
                      exportLocalsConvention: 'camelCase',
                      localIdentName: '[local]_[hash:base64:5]'
                  },
              },
            }
        ]
    }
}
module.exports=merge(sharedConfig,config);