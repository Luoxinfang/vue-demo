<style scoped>
  .title {
    margin: 1rem 10% 0;
    width: 80%;
  }
  .float-layer {
    position: relative;
    top: .2rem;
    width: 8.8rem;
    height: 12rem;
    margin-left: .7rem;
    background: url(../assets/icon/main-bg.png) no-repeat;
    background-size: contain;
  }
  .g-w {
    clear: both;
    margin-top: .15rem;
  }
  .inline {
    display: inline-block;
  }
  .title-1 {
    margin: .8rem 0 0 1.2rem;
    font-size: 28px;
  }
  .title-2 {
    position: relative;
    top: .2rem;
    left: .6rem;
    font-size: 18px;
    color: #00b7ee;
  }
  .form-list {
    margin: .5rem 0 0 12%;
    width: 72%;
    height: 100px;
  }
  .pt-1 {
    width: 82%;
    background: #f9f9f9;
    height: .6rem;
    line-height: .6rem;
    border-radius: .3rem;
    font-size: 16px;
    clear: both;
    color: #d1c0a5;
  }
  .ok .pt-1 {
    color: #59493f;
  }
  .pt-2 {
    margin: .08rem 6px;
    width: .4rem;
    height: .4rem;
    border: 1px solid #c1bdbd;
    appearance: none;
    -webkit-appearance: none;
    background-color: #f9f9f9;
    outline: none;
    border-radius: 0;
  }
  .pt-2:checked {
    margin: .08rem 2px;
    width: .5rem;
    height: .5rem;
    background: url(../assets/icon/s-2.png) no-repeat;
    background-size: contain;
    border: none;
  }
  .time {
    padding: 0 .2rem;
  }
  .amount {
    padding: 0 .2rem;
  }
  .fish{
    width: 120%;
    margin-left:-10%;
  }
  .btn-drink{
    display: block;
    width: 66%;
    height: 1.2rem;
    margin: .1rem 0 0 14%;
    background: url(../assets/icon/btn-5.png) no-repeat;
    background-size: contain;
  }
  .warn{
    width: 66%;
    height: 1.2rem;
    margin: 0 0 0 13%;
  }
  .btn-warn{
    width: .4rem;
    height: .4rem;
    border: 1px solid #c1bdbd;
    appearance: none;
    -webkit-appearance: none;
    background-color: #f9f9f9;
    outline: none;
    border-radius: 0;
    margin-right:  .1rem;
  }
  .btn-warn:checked{
    width: .5rem;
    height: .5rem;
    background: url(../assets/icon/s-3.png) no-repeat;
    background-size: contain;
    border: none;
    margin-right:  0;
  }
  .warn-text{
    font-size: 12px;
    color: #59493f;
    margin: .12rem 0 0 .1rem;
  }
  .warn-dialog {
    position: absolute;
    z-index: 1000;
    top: 15%;
    left: 5%;
    width: 90%;
    height: 60%;
    background: url(../assets/icon/warn-1.png) no-repeat 0 0;
    background-size: 100%;
  }
  .btn-close {
    position: absolute;
    top: .1rem;
    right: .1rem;
    width: .8rem;
    height: .8rem;
    display: inline-block;
  }
</style>
<template>
  <div id="reg" class="page-i">
    <img class="title" src="../assets/icon/title4.png">
    <div class="float-layer">
      <div class="g-w list-1">
        <div class="title-1 inline">今天的目标:</div>
        <div class="title-2 inline">健康喝水 <br> {{amount}}ML</div>
      </div>
      <div class="form-list">
        <div v-for="item of drinkList" class="g-w">
          <div v-bind:class="['pt-1','inline',item.ok?'ok':'']">
            <span class="time">{{item[0]}}</span>
            <span class="amount right">喝水{{item[2]}}ML</span>
          </div>
          <input v-model="item.checked" type="checkbox" class="pt-2 inline right">
        </div>
      </div>
      <img class="fish" src="../assets/icon/fish.png">
      <div class="btn-wrapper">
        <a class="btn-drink" @click.stop="drinking"></a>
      </div>
      <div class="warn">
        <input v-model="agreeWarn" class="btn-warn inline left" type="checkbox">
        <span class="warn-text left">勾这里每天9:00am提醒您健康喝水</span>
      </div>
    </div>
    <div class="warn-dialog" v-show="showWarn">
      <a class="btn-close" @click.stop="closeWarn"></a>
    </div>
  </div>
</template>
<script>
  import Core from '../assets/js/core'
  export default {
    created: function () {
      this['amount'] = Core.getDrinkAmount(100)
      this['drinkList'] = Core.getDrinkProgram(this['amount'])
    },
    data () {
      return {
        user: {
          gender: 0,
          height: '',
          weight: ''
        },
        amount: 0,
        drinkList: [],
        showWarn: false,
        agreeWarn: false
      }
    },
    computed: {

    },
    watch: {
      agreeWarn: function (agreeWarn) {
        if(agreeWarn){
          this['showWarn'] = true
          Core.showMasker()
        }
        this['$http'].post('/someUrl', {
          agreeWarn: agreeWarn
        }).then(function () {

        }, function () {
          console.log('error')
        })
      }
    },
    methods: {
      drinking() {

      },
      closeWarn(){
        this.showWarn = false
        Core.hideMasker()
      }
    }
  }
</script>
