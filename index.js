const __ = require('@yelloxing/core.js');

// lookview-loader

module.exports = function loader(source) {

    // template -> render依赖一个专门解析xhtml的库： https://github.com/yelloxing/xhtml-engine
    let Engine = require('xhtml-engine')('<lookview>' + source + '</lookview>');

    // 这里的格式应该和lookview保持一致：https://github.com/AC-graph/lookview/blob/master/src/core/vnode/compile-template.js

    let target = (function doit(node) {

        let resultData = [], nodeList = node.children();

        for (let i = 0; i < nodeList.length; i++) {

            let curNode = nodeList.eq(i);
            let curNodeValue = curNode.valueOf();

            // 如果是文本
            if (__.isString(curNodeValue)) {

                resultData.push(curNodeValue);

            }

            // 不然就是结点
            else {

                let attrs = {};
                for (let key in curNodeValue.attrs) {
                    let key_type = key.split('::');

                    attrs[key_type[0]] = {
                        value: curNodeValue.attrs[key],
                        ruler: key_type[1] || "default"
                    };
                }
 
                if (curNodeValue.tagName.toUpperCase() == 'PATH') {
                    let lines = [];
                    // PATH标签下的子标签循环
                    for (let j = 0; j < curNode.children().length; j++) {
                        let lineattr = {};
                        
                        // 子标签的属性获取
                        for (let key in curNode.children().eq(j).valueOf().attrs) {
                            let key_type = key.split('::');

                            lineattr[key_type[0]] = {
                                value: curNode.children().eq(j).valueOf().attrs[key],
                                ruler: key_type[1] || "default"
                            };
                        }
                        // 将属性放入数组中去
                        lines.push({
                            series: (curNode.children().eq(j).valueOf().tagName + "").toLowerCase(),
                            attr: lineattr
                        });
                    }
                    // 子节点的属性重新放回到Path节点中去
                    attrs.$lines=lines;
                    resultData.push({
                        series: (curNodeValue.tagName + "").toLowerCase(),
                        attr: attrs,
                    });
                    // console.log(resultData.valueOf()[1].attr.$lines.valueOf()[0]);
                    continue;
                }
                resultData.push({
                    series: (curNodeValue.tagName + "").toLowerCase(),
                    attr: attrs,
                    children: doit(curNode)
                });

            }

        }

        return resultData;

    })(Engine);
    
    return `
        export default ${JSON.stringify(target, undefined, 4)};
    `;
};