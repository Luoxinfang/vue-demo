<style scoped>
  .title {
    margin: .8rem 2.5rem 0;
    width: 4.5rem;
  }
  .photo-wrapper {
    position: relative;
    margin: .2rem 0 0 .8rem;
    width: 9rem;
    height: 13rem;
    background: url(../assets/icon/n-bg.png) no-repeat;
    background-size: contain;
    overflow: hidden;
    color: #59493f;
  }
  .content{
    text-indent: 2em;
    font-size: .38rem;
    line-height: .6rem;
    width: 7.6rem;
    padding: .6rem .32rem;
    word-break: break-all;

  }
</style>
<template>
  <div id="knowledge" class="page-i">
    <img class="title" src="../assets/icon/title5.png">
    <div class="photo-wrapper">
      <div class="content">
        <p>
          1、自来水刚烧开请不要喝，因为自来水是经过氯化消毒的，那么氯与水中残留的有机物在高温下会发生反应，
          产生氯仿等物质，而氯仿恰恰又是致癌化合物的一种，所以烧开的水不能直接喝，等温度下降后成为温开水再饮用。
        </p>
        <p>
          2、尽量少喝瓶装水，瓶装水所使用的聚酯瓶子往往含有可能导致人慢性中毒的物质，尤其是夏天在高温环境下，
          或者开盖后没有及时喝掉，都会让有害的物质乘虚而入，危害我们的健康，所以一定要少喝瓶装水。
        </p>
        <p>
          3、不渴也要喝水。常常保持不渴也要喝水的习惯，好多的朋友等到自己口渴的时候才会想到要喝水，
          喝水其实真正的目的不是解渴，而是完成参与体内的新陈代谢，被人体吸收。所以不管想不想喝水都要补水，
          外出时用自己的杯子带上一瓶水，随时喝一口。
        </p>
      </div>
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
