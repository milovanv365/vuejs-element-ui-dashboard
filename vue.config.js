const webpack = require("webpack");

module.exports = {
    runtimeCompiler: true,
    devServer: {
        // host: "writtio.local",
        host: "localhost",
        https: true,
        hot: true,
        disableHostCheck: true
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/styles/main.scss";'
            }
        }
    },
    configureWebpack: () => {
        return {
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            },
            plugins: [
                new webpack.NormalModuleReplacementPlugin(
                    /element-ui[/\\]lib[/\\]locale[/\\]lang[/\\]zh-CN/,
                    "element-ui/lib/locale/lang/en"
                )
            ]
        };
    },
    pluginOptions: {
        moment: {
            locales: ["en"]
        }
    },

};