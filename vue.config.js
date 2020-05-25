module.exports = {
  publicPath: "./",
  assetsDir: "",
  outputDir: "dist",
  devServer: {
    proxy: {
      "/v2": {
        target: "https://newsapi.org",
        changeOrigin: true
      }
    }
  }
};
