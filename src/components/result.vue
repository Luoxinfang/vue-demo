<style scoped>
  .title {
    margin: 1rem 0 0 .6rem;
    height: 1.6rem;
    text-align: center;
  }
  .title .process1 {
    margin-top: .1rem;
    width: 7rem;
  }
  .title .process2 {
    width: 1.6rem;
  }
  .title span {
    color: transparent;
    font-size: 36px;

  }
  .status {
    margin: .2rem 20%;
    width: 60%;
  }
  .photo-wrapper {
    position: relative;
    margin: .6rem auto 0;
    width: 4.7rem;
    height: 4.7rem;
    border-radius: 50%;
    overflow: hidden;
  }
  .photo-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(../assets/icon/photo-border.png) no-repeat;
    background-size: contain;
    z-index: 100;
    text-align: center;
    line-height: 4.7rem;
    color: #ffffff;
  }
  .swiper-container {
    width: 4.7rem;
    height: 4.71rem;
    border-radius: 50%;
    overflow: hidden;
  }
  .swiper-slide {
    position: relative;
    width: 4.7rem;
    height: 4.7rem;
  }
  .ph1 {
    background: url(../assets/icon/photo1.png) no-repeat center .4rem;
    background-size: 60%;
  }
  .ph2 {
    background: url(../assets/icon/photo2.png) no-repeat center;
    background-size: 78%;
  }
  .ph3 {
    background: url(../assets/icon/photo3.png) no-repeat center;
    background-size: 82%;
  }
  .ph4 {
    background: url(../assets/icon/photo4.png) no-repeat center;
    background-size: 70%;
  }
  .ph5 {
    background: url(../assets/icon/photo5.png) no-repeat center;
    background-size: 85%;
  }
  .ph6 {
    background: url(../assets/icon/photo6.png) no-repeat center;
    background-size: 60%;
  }
  .slogan {
    margin-top: 1rem;
    text-align: center;
    color: #ffffff;
    font-size: 18px;
    letter-spacing: 3px;
    line-height: .75rem;
  }
  .fish {
    margin: .6rem 0;
    width: 100%;
  }
  .btn-wrapper{
    margin-top: .2rem;
  }
  .btn-1{
    margin-left: 4%;
    width: 44%;
  }
  .btn-2{
    margin-left: 5%;
    width: 44%;
  }
</style>
<template>
  <div id="photo" class="page-i">
    <div class="title">
      <img class="process1 left" src="../assets/icon/8_0.png">
      <img class="process2 left" src="../assets/icon/8_1.png">
    </div>
    <img class="status" src="../assets/icon/status-1.png">
    <div class="photo-wrapper">
      <div class="swiper-container">
        <div class="swiper-slide ph1"></div>
        <div class="photo-border"></div>
      </div>
    </div>
    <div class="slogan">
      超人不是一天养成的 <br>
      恭喜你向健康迈进了一步
    </div>

    <img class="fish" src="../assets/icon/fish.png">
    <div class="btn-wrapper">
      <img src="../assets/icon/btn-6.png" class="left btn-1">
      <img src="../assets/icon/btn-7.png" class="left btn-2">
    </div>
  </div>
</template>
<script>
  import '../assets/js/swiper-3.4.0.min'
  import Core from '../assets/js/core'

  export default {
    created(){
      setTimeout(function () {
        new Swiper('.swiper-container')
      }, 100)
      console.log(1);
      this.user = this.$parent.user
      console.log(this.$parent);
    },
    data () {
      return {
        nickname: '',
        agreeRule: false
      }
    },
    computed: {
      filled: function () {
        return this['nickname']
      }
    },
    watch: {
      agreeRule: function (agreeRule) {
        this['$http'].post('/someUrl', {
          agreeRule: agreeRule
        }).then(function () {
          console.log('ok')
        }, function () {
          console.log('error')
        })
      }
    },
    methods: {
      doReg() {
        if (this['filled']) {
          this['$parent'].user = this['user']
          this['$router'].push({path: 'photo'})
        }
      }
    }
  }
</script>
