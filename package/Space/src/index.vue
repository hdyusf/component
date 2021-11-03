<template>
  <div :style="{ height: heightProcess, width: widthProcess }" />
</template>
<script>
export default {
  name: 'Space',
  // mixins: [],
  // components: {},
  props: {
    height: {
      type: Number,
      default: 0,
    },
    width: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  // created () {},
  // mounted () {},
  // methods: {},
  // watch: {},
  computed: {
    heightProcess() {
      return this.$autoTransformPx(this.height);
    },
    widthProcess() {
      return this.$autoTransformPx(this.width);
    },
  },
  // filters: {},
  // beforeDestroy () {},
};
</script>
<style scoped lang="less">
p {
  flex-shrink: 0;
}
</style>
