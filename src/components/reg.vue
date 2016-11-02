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
    color: #8f8f8f;
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
    background: url(../assets/icon/btn-3.png) no-repeat;
    background-size: contain;
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
        <input class="ipt left font-hk" type="number" v-model="user.height">
      </div>
      <div class="form-group mt-m">
        <span class="label left">体重:</span>
        <input class="ipt left font-hk" type="number" v-model="user.weight">
      </div>
      <div class="agree">
        <div class="left">
          <input class="btn-agree" type="checkbox" v-model="agreeRule">
        </div>
        <div class="right">本人已仔细阅读过《21天水动力》游戏规则，并同意使用以上信息建立个人角色。</div>
      </div>
      <div class="btn-wrapper">
        <a v-bind:class="[filled?'btn-next':'btn-disabled']" @click.stop="goSetPhoto"></a>
      </div>
    </div>
  </div>
</template>
<script>
  import Core from '../assets/js/core'
  export default {
    data () {
      return {
        user: {
          gender: 0,
          height: '',
          weight: ''
        },
        agreeRule: false
      }
    },
    computed: {
      gender: function () {
        return this['user'].gender ? '男' : '女'
      },
      filled: function () {
        return this['user'].height && this['user'].weight
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
      goSetPhoto: function () {
        if(this['filled']){
          this['$parent'].user = this['user']
          this['$router'].push({ path: 'photo' })
        }

      }
    }
  }
</script>
