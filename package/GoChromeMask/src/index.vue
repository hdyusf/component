<template>
  <div class="GoChromeMask" v-if="show">
    <MaskBox v-bind:show.sync="show">
      <div class="maskLogo" :style="{ backgroundImage: `url(${image})` }"></div>
    </MaskBox>
  </div>
</template>
<script>
import MaskBox from '../../MaskBox/src/index';
export default {
  name: 'GoChromeMask',
  // mixins: [],
  components: {
    MaskBox
  },
  props: {
    image: {
      type: String,
      default: require('./images/g1.png')
    }
  },
  data() {
    return {
      show: false
    };
  },
  created() {
    if (this.$isWeiXin()) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  // mounted () {},
  // methods: {},
  // watch: {},
  // computed: {},
  // filters: {},
  // beforeDestroy () {},
};
</script>
<style scoped lang="less">
.GoChromeMask {
  position: fixed;
  top: 0;
  left: 0;
  .maskLogo {
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}
</style>
