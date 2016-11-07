<style scoped>
  .title {
    margin: 1.2rem auto 0;
    height: 1rem;
    text-align: center;
    font-size: .75rem;
    color: #ffffff;
    -webkit-text-stroke: 2px #373561;
  }
  .title span {
    color: transparent;
    font-size: 36px;

  }
  .status{
    margin: .7rem 20% 0;
    width: 60%;
  }
  .photo-wrapper {
    position: relative;
    margin: .7rem auto 0;
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
  .btn-next {
    display: block;
    width: 80%;
    height: 1.2rem;
    margin: 0 auto;
    background: url(../assets/icon/btn-4.png) no-repeat;
    background-size: contain;
  }
  .btn-disabled {
    display: block;
    width: 80%;
    height: 1.2rem;
    margin: 0 auto;
    background: url(../assets/icon/btn-4-1.png) no-repeat;
    background-size: contain;
  }



  .slogan{
    margin-top: 1rem;
    text-align: center;
    color: #ffffff;
  }
  .fish {
    margin: .6rem 0;
    width: 100%;
  }
</style>
<template>
  <div id="photo" class="page-i">
    <div class="title">
      已完成今日小目标的<span>1/8</span>
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
      <a v-bind:class="[filled?'btn-next':'btn-disabled']" @click.stop="doReg"></a>
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
