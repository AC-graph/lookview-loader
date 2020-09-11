import { LookView, $$ } from 'lookview';
import image from './image.lookview';

new LookView({
  // 挂载点
  el: document.getElementById('root'),

  //  图片
  render: image,

  // 数据
  data: function () {
    return {
      info: "整体测试",
      x: 100,
      flag: true,
      deg: '0deg',
      fDeg: "0deg",
      text: `第一行
第二行：xxxx
...
更多`
    };
  },

  // 方法
  methods: {
    doit() {
      console.log('>>> doit');
    }
  },

  mounted: function () {
    let that = this;
    $$.animation(function (deep) {
      that.deg = (deep * 135000) + "deg";
      that.fDeg = -(deep * 300000) + "deg";
    }, 3000000);
  },

  // 生命周期
  beforeCreate: function () { console.log('beforeCreate'); },
  created: function () { console.log('created'); },
  beforeMount: function () { console.log('beforeMount'); },
  // mounted: function () { console.log('mounted'); },
  beforeUnmount: function () { console.log('beforeUnmount'); },
  unmounted: function () { console.log('unmounted'); },
  beforeDestroy: function () { console.log('beforeDestroy'); },
  destroyed: function () { console.log('destroyed'); },
  beforeUpdate: function () { console.log('beforeUpdate'); },
  updated: function () { console.log('updated'); },
  beforeResize: function () { console.log('beforeResize'); },
  resized: function () { console.log('resized'); }
});