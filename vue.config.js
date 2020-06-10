module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  lintOnSave: true,
  filenameHashing: true,

  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  },

  runtimeCompiler: true,
  productionSourceMap: false,

  pwa: {
    name: 'NeuerEnergy Prototype',
    themeColor: '#1c475c',
    msTileColor: '#1c475c',
    workboxOptions: {
      skipWaiting: true
    }
  }
}