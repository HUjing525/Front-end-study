const CompressionWebpackPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

module.exports = {
    publicPath: "./",
    outputDir: 'docs',
    configureWebpack: config => {
        const plugins = [];
        if (IS_PROD) {
          plugins.push(
            new CompressionWebpackPlugin({
              filename: "[path].gz[query]",
              algorithm: "gzip",
              test: productionGzipExtensions,
              threshold: 10240,
              minRatio: 0.8
            })
          );
          plugins.push(
            new BundleAnalyzerPlugin({})
          );
        }
        config.plugins = [...config.plugins, ...plugins];
      }
};