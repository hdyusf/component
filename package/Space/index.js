import index from './src/index';

index.install = function(Vue) {
  Vue.component(index.name, index);
}

export default index;