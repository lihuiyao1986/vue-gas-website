# pc

> A Vue.js project

## Build Setup

``` bash
# install dependencies --- 安装项目依赖
sudo cnpm install

# serve with hot reload at localhost:8081 -- 可以在config/index.js中修改
npm run dev

dev: {
    env: require('./dev.env'),
    port: 8081,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
      target: 'http://website-web-qa.eslink.net.cn',
      // target: 'http://10.101.0.136:28101/website-controller',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
     }
    }

# build for production with minification -- 打生产包
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
