import LookView from 'lookview';
import image from './image.lookview';

new LookView({
  // 挂载点
  el: document.getElementById('root'),

  //  图片
  render: image,
  // 数据
  data: function () {
    return {
      x: 100,
      flag: false,
      text: "来自l-bind的内容"
    };
  },

  // 方法
  methods: {
    doit() {
      console.log('>>> doit');
    }
  },

  // 坐标系
  coordinate: {

    demo: function () {
      return {
        link: function (value) {
          return '[坐标系]' + value;
        }
      };
    }
  },

  // 生命周期
  beforeCreate: function () { console.log('beforeCreate'); },
  created: function () {
    console.log(this);
    console.log('created');
  },
  beforeMount: function () { console.log('beforeMount'); },
  mounted: function () { console.log('mounted'); },
  beforeUnmount: function () { console.log('beforeUnmount'); },
  unmounted: function () { console.log('unmounted'); },
  beforeDestroy: function () { console.log('beforeDestroy'); },
  destroyed: function () { console.log('destroyed'); },
  beforeUpdate: function () { console.log('beforeUpdate'); },
  updated: function () { console.log('updated'); },
  beforeResize: function () { console.log('beforeResize'); },
  resized: function () { console.log('resized'); }
});