<template>
  <div class="GridBox" ref="GridBox">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Grid',
  // mixins: [],
  // components: {},
  props: {
    padding: {
      type: Number,
      default: 0
    },
    gapX: {
      type: Number,
      default: 0
    },
    gapY: {
      type: Number,
      default: 0
    },
    column: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {};
  },
  // created () {},
  mounted() {
    this.init(true);
    setTimeout(() => {
      if (!this.$isPhone()) {
        this.init();
      }
    }, 100);
    window.addEventListener('resize', () => {
      this.init();
    });
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('resize', () => {
        this.init();
      });
    });
  },
  methods: {
    init(auto = false) {
      this.$nextTick(() => {
        let padding = this.$autoTransformPx(this.gapX || this.padding, this.$pxToPxRatio);
        let box = this.$refs.GridBox;
        let boxObj = box.getBoundingClientRect();
        let width = boxObj.width;
        if (auto) {
          width = width - 17;
        }
        let gapAllWidth = (this.column - 1) * padding;
        let boxWidth = (width - gapAllWidth) / this.column;
        if (this.$slots.default && this.$slots.default.length) {
          this.$slots.default.forEach((item, index) => {
            item.elm.style.width = `${boxWidth}px`;
            if (index < this.$slots.default.length - this.column) {
              item.elm.style.marginBottom = this.$autoTransformPx(this.gapY || this.padding, this.$pxToPxRatio) + 'px';
            } else {
              item.elm.style.marginBottom = 0;
            }
            if ((index + 1) % this.column !== 0) {
              item.elm.style.marginRight = `${padding}px`;
            } else {
              item.elm.style.marginRight = 0;
            }
          });
        }
      });
    }
  },
  watch: {
    padding() {
      this.init();
    },
    column() {
      this.init();
    }
  }
  // computed: {},
  // filters: {},
  // beforeDestroy () {},
};
</script>
<style scoped lang="less">
* {
  box-sizing: border-box;
}
.GridBox {
  display: flex;
  flex-wrap: wrap;
}
</style>
