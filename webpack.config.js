

// 配合使用gulp打包
module.exports = {
  entry: "./dev/main.js",
  output: {
    filename: "build.js"
  },
  module: {
    loaders: [
      //.css 文件使用 style-loader 和 css-loader 来处理
      {
        test: /\.css$/,
        loader: "style!css!autoprefixer-loader"
      },
      //
      {
        test: /\.scss$/,
        loader: 'style!css!sass!autoprefixer-loader'
      },
      //.js 文件使用 jsx-loader 来编译处理
      {
        test: /\.js$/,
        loader: "jsx-loader"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: []
};
