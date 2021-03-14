const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    configureWebpack: {
        devServer: {
            open: true,
            port: 8081
        },
        output: {
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