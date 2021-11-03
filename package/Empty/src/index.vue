<template>
  <div class="EmptyBox">
    <Space :height="topSpace"></Space>
    <div class="image" :style="{ backgroundImage: `url(${image})` }"></div>
    <div class="intro">{{ intro }}</div>
  </div>
</template>
<script>
import Space from '../../Space/src/index';
export default {
  name: 'Empty',
  // mixins: [],
  components: { Space },
  props: {
    topSpace: {
      type: Number,
      default: 0
    },
    image: {
      type: String,
      default: require('./images/empty.png')
    },
    intro: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  }
  // created () {},
  // mounted () {},
  // methods: {},
  // watch: {},
  // computed: {},
  // filters: {},
  // beforeDestroy () {},
};
</script>
<style scoped lang="less">
.EmptyBox {
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  .image {
    width: 288px;
    height: 288px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .intro {
    font-size: 28px;
    font-weight: 400;
    color: #9a9cb3;
    line-height: 40px;
  }
}
</style>
