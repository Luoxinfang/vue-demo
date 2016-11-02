<style scoped>
  .title {
    margin: 20% auto 0;
    width: 70%;
    height: 1rem;
    background: url(../assets/icon/title1.png) no-repeat;
    background-size: contain;
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
  <div id="photo" class="page-i">
    <div class="title"></div>
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
