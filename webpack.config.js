module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public/assets/',
    publicPath: "/assets/",
    filename: "bundle.js"
  }
}