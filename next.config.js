import path from 'path'
import Dotenv from 'dotenv-webpack'
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true
      }
    ]
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, './src')
    }
    config.plugins = [
      ...config.plugins,

      // 環境変数を優先して読み込む
      new Dotenv({
        systemvars: true
      })
    ]
    // ブラウザからAPIアクセス時にコメント外す
    //   config.module.rules.push({
    //     test: /\.(graphql|gql)$/,
    //     exclude: /node_modules/,
    //     loader: 'graphql-tag/loader'
    //   })
    //   return config
  }
  // ブラウザからAPIアクセス時にコメント外す
  // webpackDevMiddleware: (config) => {
  //   return config
  // }
}
