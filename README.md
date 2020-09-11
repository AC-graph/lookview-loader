# lookview-loader - 在webpack环境中为lookview提供解析特殊文件的能力

<p>
  <a href="https://yelloxing.gitee.io/npm-downloads?interval=7&packages=lookview-loader"><img src="https://img.shields.io/npm/dm/lookview-loader.svg" alt="downloads"></a>
  <a href="https://packagephobia.now.sh/result?p=lookview-loader"><img src="https://packagephobia.now.sh/badge?p=lookview-loader" alt="install size"></a>
  <a href="https://www.jsdelivr.com/package/npm/lookview-loader"><img src="https://data.jsdelivr.com/v1/package/npm/lookview-loader/badge" alt="CDN"></a>
  <a href="https://www.npmjs.com/package/lookview-loader"><img src="https://img.shields.io/npm/v/lookview-loader.svg" alt="Version"></a>
  <a href="https://github.com/yelloxing/lookview-loader/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/lookview-loader.svg" alt="License"></a>
</p>

> 如果想使用[lookview](https://github.com/AC-graph/lookview),请直接访问[在线地址](http://yelloxing.gitee.io/lookview-api/)查看！

## 如何使用

```bash
npm install --save-dev lookview-loader
```

安装以后只需要配置对应loader即可（不同webpack配置方式请自行调整）：

```js
module: {
    rules: [{
        test: /\.lookview$/,
        loader: ['lookview-loader'],
        exclude: /node_modules/
    }]
}
```

## 开源协议

[MIT](https://github.com/AC-graph/lookview-loader/blob/master/LICENSE)

Copyright (c) 2020 走一步 再走一步