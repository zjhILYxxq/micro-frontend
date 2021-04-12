const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
    publicPath: 'http://localhost:8081/',
    outputDir: path.resolve(__dirname, 'dist'),
    configureWebpack: {
        devServer: {
            open: true,
            port: 8081,
            writeToDisk: true
        },
        devtool:'source-map',
        output: {
            filename: '[name].[hash].js',
            library: 'app1',
            libraryTarget: 'var'
        },
        plugins: [
            new CleanWebpackPlugin(),
            new WebpackManifestPlugin({
                fileName: 'asset-manifest.json',
                generate: (seed, files, entrypoints) => {
                    console.log(files, entrypoints)
                    const manifestFiles = files.reduce((manifest, file) => {
                      manifest[file.name] = file.path;
                      return manifest;
                    }, seed);
                    const entrypointFiles = entrypoints.app.filter(
                      fileName => !fileName.endsWith('.map')
                    );
          
                    return {
                      files: manifestFiles,
                      entrypoints: entrypointFiles,
                    };
                }
            })
        ]
    }
}