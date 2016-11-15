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
    height: .8rem;
    margin: 3px 0 0 1px;
  }
  .process2.p0 {
    background: url(../assets/icon/8_0.png) no-repeat;
    background-size: contain;
  }
  .process2.p1 {
    background: url(../assets/icon/8_1.png) no-repeat;
    background-size: contain;
  }
  .process2.p2 {
    background: url(../assets/icon/8_2.png) no-repeat;
    background-size: contain;
  }
  .process2.p3 {
    background: url(../assets/icon/8_3.png) no-repeat;
    background-size: contain;
  }
  .process2.p4 {
    background: url(../assets/icon/8_4.png) no-repeat;
    background-size: contain;
  }
  .process2.p5 {
    background: url(../assets/icon/8_5.png) no-repeat;
    background-size: contain;
  }
  .process2.p6 {
    background: url(../assets/icon/8_6.png) no-repeat;
    background-size: contain;
  }
  .process2.p7 {
    background: url(../assets/icon/8_7.png) no-repeat;
    background-size: contain;
  }
  .process2.p8 {
    background: url(../assets/icon/8_8.png) no-repeat;
    background-size: contain;
  }
  .title span {
    color: transparent;
    font-size: 36px;

  }
  .status {
    margin: .2rem 20%;
    width: 6rem;
    height: .86rem;
  }
  .status.s1 {
    background: url(../assets/icon/status-1.png) no-repeat;
    background-size: contain;
  }
  .status.s2 {
    background: url(../assets/icon/status-4.png) no-repeat;
    background-size: contain;
  }
  .status.s3 {
    background: url(../assets/icon/status-3.png) no-repeat;
    background-size: contain;
  }
  .status.s4 {
    background: url(../assets/icon/status-2.png) no-repeat;
    background-size: contain;
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
  .ph1-0 {
    background: url(../assets/icon/photo1.png) no-repeat center .4rem;
    background-size: 60%;
  }
  .ph1-1 {
    background: url(../assets/icon/photo1-3.png) no-repeat center .4rem;
    background-size: 60%;
  }
  .ph1-2 {
    background: url(../assets/icon/photo1-2.png) no-repeat center .4rem;
    background-size: 60%;
  }
  .ph1-3 {
    background: url(../assets/icon/photo1-1.png) no-repeat center .4rem;
    background-size: 60%;
  }
  .ph2-0 {
    background: url(../assets/icon/photo1.png) no-repeat center .4rem;
    background-size: 75%;
  }
  .ph2-1 {
    background: url(../assets/icon/photo2-3.png) no-repeat center .4rem;
    background-size: 75%;
  }
  .ph2-2 {
    background: url(../assets/icon/photo2-2.png) no-repeat center .4rem;
    background-size: 75%;
  }
  .ph2-3 {
    background: url(../assets/icon/photo2-1.png) no-repeat center .4rem;
    background-size: 75%;
  }
  .ph3-0 {
    background: url(../assets/icon/photo3.png) no-repeat center .4rem;
    background-size: 78%;
  }
  .ph3-1 {
    background: url(../assets/icon/photo3-3.png) no-repeat center .4rem;
    background-size: 78%;
  }
  .ph3-2 {
    background: url(../assets/icon/photo3-2.png) no-repeat center .4rem;
    background-size: 78%;
  }
  .ph3-3 {
    background: url(../assets/icon/photo3-1.png) no-repeat center .4rem;
    background-size: 78%;
  }
  .ph4-0 {
    background: url(../assets/icon/photo4.png) no-repeat center .4rem;
    background-size: 66%;
  }
  .ph4-1 {
    background: url(../assets/icon/photo4-3.png) no-repeat center .4rem;
    background-size: 66%;
  }
  .ph4-2 {
    background: url(../assets/icon/photo4-2.png) no-repeat center .4rem;
    background-size: 66%;
  }
  .ph4-3 {
    background: url(../assets/icon/photo4-1.png) no-repeat center .4rem;
    background-size: 66%;
  }
  .ph5-0 {
    background: url(../assets/icon/photo5.png) no-repeat center .4rem;
    background-size: 80%;
  }
  .ph5-1 {
    background: url(../assets/icon/photo5-3.png) no-repeat center .4rem;
    background-size: 80%;
  }
  .ph5-2 {
    background: url(../assets/icon/photo5-2.png) no-repeat center .4rem;
    background-size: 80%;
  }
  .ph5-3 {
    background: url(../assets/icon/photo5-1.png) no-repeat center .4rem;
    background-size: 80%;
  }
  .ph6-0 {
    background: url(../assets/icon/photo6.png) no-repeat center .4rem;
    background-size: 60%;
  }
  .ph6-1 {
    background: url(../assets/icon/photo6-3.png) no-repeat center .4rem;
    background-size: 60%;
  }
  .ph6-2 {
    background: url(../assets/icon/photo6-2.png) no-repeat center .4rem;
    background-size: 60%;
  }
  .ph6-3 {
    background: url(../assets/icon/photo6-1.png) no-repeat center .4rem;
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
  .btn-wrapper {
    margin-top: .2rem;
  }
  .btn-1 {
    margin-left: 4%;
    width: 44%;
  }
  .btn-2 {
    margin-left: 5%;
    width: 44%;
  }
</style>
<template>
  <div id="photo" class="page-i">
    <div class="title">
      <img class="process1 left" src="../assets/icon/8_x.png">
      <div :class="['process2','left',processImg]"></div>
    </div>
    <div :class="['status',processTip]"></div>
    <div class="photo-wrapper">
      <div class="swiper-container">
        <div :class="['swiper-slide',photoClass]"></div>
        <div class="photo-border"></div>
      </div>
    </div>
    <div class="slogan">
      超人不是一天养成的 <br>
      恭喜你向健康迈进了一步
    </div>

    <img class="fish" src="../assets/icon/fish.png">
    <div class="btn-wrapper">
      <img @click="goDrinking" src="../assets/icon/btn-6.png" class="left btn-1">
      <img @click="knowledge" src="../assets/icon/btn-7.png" class="left btn-2">
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
      this.drinkList = window.drinkList
    },
    data () {
      return {
        mis: 0,
        processTip: '',
        processImg: '',
        drinkList: [],
        photoClass: ''
      }
    },
    computed: {
      processImg: function () {
        var num = 0
        var mis = 0
        for (var i = 0; i < this['drinkList'].length; i++) {
          var item = this['drinkList'][i];
          if (item[4] == 'good') {
            num++
          }
          if (item[4] == 'missed') {
            mis++
          }
        }
        this.mis = mis
        return 'p' + num
      },
      processTip: function () {
        var cn = 's1'
        var im = '-0'
        if (this.mis == 0) {
          cn = 's1'
          im = '-0'
        } else if (this.mis <= 2) {
          cn = 's2'
          im = '-1'
        } else if (this.mis <= 4) {
          cn = 's3'
          im = '-2'
        } else {
          cn = 's4'
          im = '-3'
        }
        this.photoClass = 'ph' + window.user['photoImg'] + im
        return cn;
      }
    },
    methods: {
      goDrinking() {
        this['$router'].push({path: '/main'});
      },
      knowledge(){
        this['$router'].push({path: '/knowledge'});
      }
    }
  }
</script>
