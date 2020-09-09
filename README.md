# lookview-loader - 在webpack环境中为lookview提供解析特殊文件的能力

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