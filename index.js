
// lookview-loader

module.exports = function loader(source) {

    // template -> render依赖一个专门解析xhtml的库： https://github.com/yelloxing/xhtml-engine
    let Engine = require('xhtml-engine')('<lookview>' + source + '</lookview>'), target = {};


    return `
        export default ${JSON.stringify(target, undefined, 4)};
    `;
};