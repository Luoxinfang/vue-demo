<style scoped>
  .title {
    margin: .5rem 15% 0;
    width: 70%;
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
    font-size: .45rem;
    margin-top: .15rem;
  }
  .inline {
    display: inline-block;
  }
  .title-1 {
    margin: .7rem 0 0 .85rem;
    font-size: .75rem;
  }
  .title-2 {
    position: relative;
    top: .2rem;
    left: .6rem;
    font-size: .45rem;
    color: #00b7ee;
  }
  .form-list {
    margin: .52rem 0 0 12%;
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
  .pt-1.good {
    color: #59493f;
  }
  .pt-1.waiter {
    color: #d1c0a5;
  }
  .pt-1.missed {
    color: #f14b4b;
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
  .pt-2.missed {
    border: none;
    width: .4rem;
    height: .4rem;
    background: url(../assets/icon/s-1.png);
    background-size: contain;
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
    padding: 0 .1rem;
  }
  .amount {
    padding: 0 .2rem;
  }
  .fish {
    width: 120%;
    margin-left: -10%;
  }
  .btn-drink {
    display: block;
    width: 66%;
    height: 1.2rem;
    margin: .1rem 0 0 14%;
    background: url(../assets/icon/btn-5.png) no-repeat;
    background-size: contain;
  }
  .btn-drink.disabled {
    background: url(../assets/icon/btn-5-1.png) no-repeat;
    background-size: contain;
  }
  .warn {
    width: 70%;
    height: 1.2rem;
    margin: 0 0 0 13%;
  }
  .btn-warn {
    width: .4rem;
    height: .4rem;
    border: 1px solid #c1bdbd;
    appearance: none;
    -webkit-appearance: none;
    background-color: #f9f9f9;
    outline: none;
    border-radius: 0;
    margin-right: .1rem;
  }
  .btn-warn:checked {
    width: .5rem;
    height: .5rem;
    background: url(../assets/icon/s-3.png) no-repeat;
    background-size: contain;
    border: none;
    margin-right: 0;
  }
  .warn-text {
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
          <div v-bind:class="['pt-1','inline',item[4]]">
            <span class="time">{{item[0]}}</span>
            <span class="amount right">喝水{{item[2]}}ML</span>
          </div>
          <input v-model="item[3]" type="checkbox"
                 v-bind:class="['pt-2','inline','right',item[4]]"
                 disabled>
        </div>
      </div>
      <img class="fish" src="../assets/icon/fish.png">
      <div class="btn-wrapper">
        <a :class="['btn-drink',canDrink?'':'disabled']" @click.stop="drinking"></a>
      </div>
      <div class="warn">
        <input id="btn-agree-warn" v-model="agreeWarn" class="btn-warn inline left"
               type="checkbox">
        <label for="btn-agree-warn" class="warn-text left">勾这里每天9:00am提醒您健康喝水</label>
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
      this['amount'] = Core.getDrinkAmount(+window.user.weight)
      this['drinkList'] = Core.getDrinkProgram(this['amount'])
      this['$http'].get(Core.serverUrl + '/water_record', {
        params: {
          token: window.token
        }
      }).then(function (rs) {
        var data = rs.body
        var time = Core.getTime()
        if (typeof data == 'string') {
          data = JSON.parse(data)
        }

        var waiterNum = 0
        var missedNum = 0
        for (var i = 0; i < this['drinkList'].length; i++) {

          var item = this['drinkList'][i]
          var obj = data.data['schedule'][0]
          var hadDrink = obj[item[0]]
          var itemTime = 0
          item.push(hadDrink)
          itemTime = Core.parseToTime(this['drinkList'][i][0])
          if (!hadDrink) {
            var timeSpace = Core.getTimeSpace(time, itemTime)
            if (time > itemTime && Math.abs(timeSpace) > 30) {
              item.push('missed')
              missedNum++
            } else {
              item.push('waiter')
              waiterNum++
            }
          } else {
            item.push('good')
          }
        }
        if (waiterNum == 0 || missedNum == 8) {
          this.canDrink = false
        }
        window.drinkList = this.drinkList;
      }, function (err) {
        console.log('error', err);
      })
    },
    data () {
      return {
        isReadOnly: true,
        user: {},
        amount: 0,
        drinkList: [],
        showWarn: false,
        agreeWarn: false,
        canDrink: true
      }
    },
    watch: {
      agreeWarn: function (agreeWarn) {
        if (agreeWarn && !this['user']['onceAgreeWarn']) {
          Core.showMasker()
          this['showWarn'] = true
        }
        this['$http'].get(Core.serverUrl + '/water_updata', {
          params: {
            token: window.token,
            agreeWarn: agreeWarn
          }
        }).then(function (rs) {
          console.log('good', rs.body)
        }, function (err) {
          console.log('error', err)
        })
      }
    },
    methods: {
      drinking() {
        if (this['canDrink']) {
          //time  可以根据this['drinkList']来吸附
          var amount = 0
          var targetTime = ''
          var time = Core.getTime()
          for (var i = 0; i < this['drinkList'].length; i++) {
            var item = this['drinkList'][i];
            if (item[4] == 'waiter') {
              targetTime = item[0]
              amount = item[2]
              break
            }
          }
          var timeSpace = Math.abs(Core.getTimeSpace(time, Core.parseToTime(targetTime)))
          if (timeSpace > 30) {
            Core.showDialog('现在不是喝水的时间');
            setTimeout(function () {
              Core.hideDialog()
            },2500)
          } else {
            this['$http'].get(Core.serverUrl + '/water_updata', {
              params: {
                time: targetTime,
                amount: amount,
                waterFlag: true,
                token: window.token
              }
            }).then(function (rs) {
              var data = rs.body
              if (typeof data == 'string') {
                data = JSON.parse(data)
              }
              if (data['Code'] == 200) {
                this['$router'].push({path: 'result'});
              } else {
                console.log('good', rs.body)
              }
            }, function (err) {
              console.log('error', err)
            })
          }
        }
      },
      closeWarn(){
        this.showWarn = false
        Core.hideMasker()
      }
    }
  }
</script>
