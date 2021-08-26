const path = require("path")
const HelloWorldPlugin  = require("./myplugin")

module.exports = {
  mode: "development",
  entry: {
    main: "./app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: ["style-loader", "css-loader"], //배열로 설정하면 뒤에서부터 앞으로 로더가 작동함.
    }, 
      {
        test: /\.(png|jpg|svg|gif)$/, // .png 확장자로 마치는 모든 파일
        loader: 'url-loader',
        options: {
          publicPath: "./dist/", // prefix를 아웃풋 경로로 지정
          name: "[name].[ext]?[hash]", // 파일명 형식
          limit: 5000 // 5kb 미만 파일만 data url로 처리
        }
      }
  ]
  },
  plugins: [new HelloWorldPlugin({ options: true })],
}