const { override, overrideDevServer} = require('customize-cra');
const addWebpackConfig = () => config => {
    config.optimization = {
        runtimeChunk: false
    }
    config.output = {
        library: 'app3',
        libraryTarget: 'var'
    }    
    return config;
};

module.exports = {
    webpack: override(addWebpackConfig())
}