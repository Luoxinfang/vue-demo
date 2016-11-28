<style scoped>
  .title {
    margin: .8rem auto 0;
    width: 70%;
    height: 1rem;
    background: url(../assets/icon/title1.png) no-repeat;
    background-size: contain;
  }
  .photo-wrapper {
    position: relative;
    margin: .65rem auto 0;
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
  .photo-masker {
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    right: .2rem;
    bottom: 0;
    background: rgba(0, 0, 0, .25);
    border-radius: 50%;

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
  .title2 {
    margin: .65rem 20% 0;
    width: 60%;
  }
  .ipt-wap {
    border: none;
    width: 3.6rem;
    height: .6rem;
    line-height: .6rem;
    margin: .85rem 3.2rem 0;
    background: none;
    border-bottom: 1px solid #000000;
    outline: none;
    font-size: .52rem;
    text-align: center;
    border-radius: 0;
  }
  .ipt-wap::-webkit-input-placeholder {
    color: #000000;
    text-align: center;
    font-family: "hkfont";
    font-size: .52rem;
  }
  .fish {
    margin: .6rem 0;
    width: 100%;
  }
</style>
<template>
  <div id="photo" class="page-i">
    <div class="title"></div>
    <div class="photo-wrapper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div data-id="1" class="swiper-slide ph1"></div>
          <div data-id="2" class="swiper-slide ph2"></div>
          <div data-id="3" class="swiper-slide ph3"></div>
          <div data-id="4" class="swiper-slide ph4"></div>
          <div data-id="5" class="swiper-slide ph5"></div>
          <div data-id="6" class="swiper-slide ph6"></div>
        </div>
        <div class="photo-border">滑动选择形象</div>
        <div class="photo-masker"></div>
      </div>
    </div>
    <img class="title2" src="../assets/icon/title2.png">
    <input class="ipt-wap" maxlength="7" type="text" placeholder="(输入角色名称)"
           v-model="name">
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
      setTimeout(function() {
        new Swiper('.swiper-container')
      }, 100)
    },
    data () {
      return {
        name: ''
      }
    },
    computed: {
      filled: function() {
        return this['name']
      }
    },
    methods: {
      doReg() {
        var photoId = document.querySelector('.swiper-slide-active').getAttribute('data-id')
        if(this['filled']) {
          var _user = {
            photoImg: photoId,
            token: window.token,
            height: user.height,
            weight: user.weight,
            agreeRule: user.agreeRule,
            name: this['name']
          };
          window.user = _user
          this['$http'].get(Core.serverUrl + '/water_updata', {
            params: _user
          }).then(function(rs) {
            var data = rs.body
            if (typeof data == 'string'){
              data = JSON.parse(data)
            }
            console.log(data, '--', data['Code'], typeof data);
            console.log(data, '1-', data['Code'], data.Code);
            if(data['Code'] == 200) {
              window.user = data['data']
              this['$router'].push({path: '/main'});
            } else {
              console.log('error: Code 200')
            }
          }, function(err) {
            console.log('error:', err)
          })
        }
      }
    }
  }
</script>
