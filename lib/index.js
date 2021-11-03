const Vue = require('vue').default;
const { pxToPxRatio, pxToVw, autoTransformPx, isWeiXin, isPhone } = require('hdyusf-common');
const packageConfig = require('../package.json');

const component = {
  Grid: require('../package/Grid').default,
  Space: require('../package/Space').default,
  GoChromeMask: require('../package/GoChromeMask').default,
  MaskBox: require('../package/MaskBox').default,
  Empty: require('../package/Empty').default,
  TextBox: require('../package/TextBox').default
};

const install = function (Vue) {
  Object.values(component).forEach((item) => {
    Vue.component(item.name, item);
  });
};

Vue.prototype.$pxToPxRatio = pxToPxRatio;
Vue.prototype.$pxToVw = pxToVw;
Vue.prototype.$autoTransformPx = autoTransformPx;
Vue.prototype.$isWeiXin = isWeiXin;
Vue.prototype.$isPhone = isPhone;


module.exports = {
  Version: packageConfig.version,
  install,
  ...component
};
