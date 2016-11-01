<style scoped>
  .title {
    margin: 10% 0;
    width: 100%;
    height: 70%;
    background: url(../assets/icon/index-1.png) no-repeat;
    background-size: contain;
  }

  .btn-drinking {
    margin: 1rem auto;
    display: block;
    width: 5rem;
    height: 8%;
    background: url(../assets/icon/btn-1.png) no-repeat;
    background-size: contain;
  }

  .rule {
    position: absolute;
    z-index: 1000;
    top: 15%;
    left: 5%;
    width: 90%;
    height: 70%;
    background: url(../assets/icon/rule.jpg) no-repeat 0 0;
    background-size: 100%;
  }

  .btn-close {
    position: absolute;
    top: .1rem;
    right: .1rem;
    width: .6rem;
    height: .6rem;
    display: inline-block;
  }
</style>
<template>
  <div id="index" class="page-i">
    <div class="title"></div>
    <a class="btn-drinking" @click="goDrinking"></a>
    <div class="rule" v-show="showRule">
      <a class="btn-close" @click="goReg"></a>
    </div>
  </div>
</template>
<script>
  import Core from '../assets/js/core'
  export default {
    data () {
      return {
        showRule: false
      }
    },
    methods: {
      goDrinking: function () {
        this.showRule = true
        Core.showMasker()
      },
      goReg: function () {
        Core.hideMasker()
        this.$router.push({ path: 'reg' })
      }
    }
  }
</script>
