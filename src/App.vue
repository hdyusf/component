<template>
  <div id="app">
    <Grid :column="3" :padding="10">
      <div v-for="(item, index) of gridList" :key="index">{{index}}</div>
    </Grid>
    <Space :height="30"></Space>
    <div>222</div>
    <GoChromeMask :image="require('@/assets/images/g1.png')"></GoChromeMask>
    <div class="mobileBox">
      <Empty :topSpace='30'></Empty>
    </div>
    <TextBox :fontSize='34' color='blue'>疯狂a就发动a</TextBox>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      gridList: []
    }
  },
  created() {
    this.gridList = new Array(15).fill(1);
  }
};
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 30px;
}
.GridBox {
  > div {
    height: 100px;
    // background-color: gray;
    border: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
  }
}
.mobileBox {
  width: 300px;
  height: 400px;
  border: 1px solid gray;
}
</style>
