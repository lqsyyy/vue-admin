const fs = require('fs')
const path = require('path')
const glob = require('glob')

const { name } = JSON.parse(fs.readFileSync(path.join(__dirname, './package.json'), 'utf-8'))
const { env, ossDomain } = JSON.parse(fs.readFileSync(path.join(__dirname, './config/config.json'), 'utf-8'))
const isProduction = process.env.NODE_ENV === 'production' && env && env !== 'localhost'
const distContentsSource = './dist/*(css|fonts|img|js)/**'

module.exports = {
  baseUrl: isProduction ? `${ossDomain}/${name}/${env}` : '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://xxx.xxx.xxx.xxx:xxxx',
        ws: false,
        changOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    },
    overlay: {
      warnings: true,
      errors: true
    }
  },
  productionSourceMap: process.env.NODE_ENV !== 'production'
}

