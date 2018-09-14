/**
 * @fileOverview track g6
 * Experience improvement program
 */
const Util = require('./util/');
const Global = require('./global');
const SERVER_URL = 'https://kcart.alipay.com/web/bi.do';
const version = require('./version');
const { track } = Global;
// 延迟发送请求
setTimeout(function() {
  if (track) {
    const image = new Image();
    const newObj = {
      pg: document.URL,
      r: new Date().getTime(),
      g6: true,
      version,
      page_type: 'syslog'
    };
    if (Util.isPlainObject(track)) {
      Util.mix(newObj, track);
    }
    const d = encodeURIComponent(JSON.stringify([ newObj ]));
    image.src = `${SERVER_URL}?BIProfile=merge&d=${d}`;
  }
}, 2000);
