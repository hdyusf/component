<template>
  <div
    :style="{
      fontSize: fontSizeProcess,
      color,
      fontWeight: bold,
      display: inline ? 'inline-block' : 'block',
      float: right ? 'right' : 'none'
    }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TextBox',
  // mixins: [],
  // components: {},
  props: {
    fontSize: {
      type: Number,
      default: 28
    },
    color: {
      type: String,
      default: 'black'
    },
    bold: {
      type: Number,
      default: 400
    },
    inline: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  // created () {},
  // mounted() {},
  // methods: {},
  // watch: {},
  computed: {
    fontSizeProcess() {
      return this.$autoTransformPx(this.fontSize);
    }
  }
  // filters: {},
  // beforeDestroy () {},
};
</script>
<style scoped lang="less"></style>
