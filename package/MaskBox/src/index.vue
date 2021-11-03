<template>
  <div class="maskBox" :class="{ center: center }" v-if="show">
    <div class="mask" @click="onMask"></div>
    <div class="maskContent">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaskBox',
  // mixins: [],
  // components: {},
  props: {
    center: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean
    }
  },
  data() {
    return {};
  },
  // created() {},
  // mounted () {},
  methods: {
    onMask() {
      this.$emit('update:show', false);
    }
  }
  // watch: {}
  // computed: {}
  // filters: {},
  // beforeDestroy () {},
};
</script>
<style scoped lang="less">
.maskBox {
  width: 100vw;
  height: 100vh;
  .mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 0;
  }
  &.center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .maskContent {
    position: relative;
    z-index: 1;
  }
}
</style>
