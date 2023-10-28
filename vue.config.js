const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: ['quasar'],
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true,
    },
  },
  configureWebpack: {
    entry: {
      sidenav: './src/components/SideNav.vue',
    },
    output: {
      filename: '[name].js',
      libraryExport: 'default',
    },
  },
  productionSourceMap: false,
});
