<style scoped>
  .page-i {
    background: url(../assets/icon/reg-bg.png) no-repeat 0 0;
    background-size: 100%;
  }
  .float-layer {
    position: relative;
    top: 6.5rem;
    width: 70%;
    margin: 0 auto;
  }
  .form-group {
    background: #f9f9f9;
    height: .8rem;
    line-height: .8rem;
    border-radius: .3rem;
    overflow: hidden;
  }
  .label {
    width: 20%;
    height: .8rem;
    display: inline-block;
    text-align: right;
    color: #8f8f8f;
  }
  .ipt {
    border: none;
    height: .8rem;
    margin: 0;
    padding: 0 5%;
    width: 70%;
    background: #f9f9f9;
    outline: none;
    color: #4f4f4f;
  }
  .ipt::-webkit-input-placeholder {
    color: #a79f96;
    font-family: "hkfont";
    font-size: .34rem;
  }
  .mt-m {
    margin-top: 5%;
  }
  .agree {
    padding: .5rem 2%;
    height: 1.5rem;
  }
  .agree .left {
    width: 12%;
  }
  .agree .right {
    width: 88%;
    font-size: .36rem;
    line-height: .5rem;
    color: #59493f;
  }
  .btn-agree {
    appearance: none;
    -webkit-appearance: none;
    width: .42rem;
    height: .42rem;
    background-color: #f9f9f9;
    outline: none;
  }
  .btn-agree:checked {
    background: url(../assets/icon/btn-2.png) no-repeat;
    background-size: contain;
  }
  .btn-wrapper {
    margin-top: .2rem;
  }
  .btn-next {
    display: block;
    width: 90%;
    height: 1.2rem;
    margin: 0 auto;
    background: url(../assets/icon/btn-3.png) no-repeat;
    background-size: contain;
  }
  .btn-disabled {
    display: block;
    width: 90%;
    height: 1.2rem;
    margin: 0 auto;
    background: url(../assets/icon/btn-3-1.png) no-repeat;
    background-size: contain;
  }
  .underline {
    text-decoration: underline;
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
    width: .8rem;
    height: .8rem;
    display: inline-block;
  }
</style>
<template>
  <div id="reg" class="page-i">
    <div class="float-layer">
      <div class="form-group">
        <span class="label left">性别:</span>
        <input class="ipt left font-hk" v-model="gender" v-bind:readonly="true">
      </div>
      <div class="form-group mt-m">
        <span class="label left">身高:</span>
        <input class="ipt left font-hk" type="number" v-model="user.height"
               placeholder="请输入身高,单位cm">
      </div>
      <div class="form-group mt-m">
        <span class="label left">体重:</span>
        <input class="ipt left font-hk" type="number" v-model="user.weight"
               placeholder="请输入体重,单位kg">
      </div>
      <div class="agree">
        <div class="left">
          <input id="agreeRule" class="btn-agree" type="checkbox" v-model="agreeRule">
        </div>
        <label for="agreeRule" class="right">本人已仔细阅读过《21天水动力》
          <a class="underline" @click.stop="openRule">游戏规则</a>，并同意使用以上信息建立个人角色。
        </label>
      </div>
      <div class="btn-wrapper">
        <a v-bind:class="[filled?'btn-next':'btn-disabled']" @click.stop="goSetPhoto"></a>
      </div>
    </div>
    <div class="rule" v-show="showRule">
      <a class="btn-close" @click.stop="closeRule"></a>
    </div>
  </div>
</template>
<script>
  import Core from '../assets/js/core'
  export default {
    data() {
      return {
        user: {
          gender: 0,
          height: null,
          weight: null
        },
        showRule: false,
        agreeRule: false
      }
    },
    created(){
      this.user.gender = +user.gender
    },
    computed: {
      gender: function () {
        return this['user'].gender ? '男' : '女'
      },
      filled: function () {
        return this['user'].height && this['user'].weight && this['agreeRule']
      }
    },
    methods: {
      goSetPhoto() {
        if (this['filled']) {
          this['$router'].push({path: 'photo'});
        }
        user.height = this['user'].height
        user.weight = this['user'].weight
        user.agreeRule = this['agreeRule']
      },
      openRule(){
        this.showRule = true
        Core.showMasker()
      },
      closeRule(){
        this.showRule = false
        Core.hideMasker()
      }
    }
  }
</script>
