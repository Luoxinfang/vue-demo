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
  .content {
    text-indent: 2em;
    font-size: .38rem;
    line-height: .6rem;
    width: 7.6rem;
    padding: .6rem .32rem;
    word-break: break-all;

  }
  .btn-close {
    position: absolute;
    top: .1rem;
    right: .1rem;
    width: .8rem;
    height: .8rem;
    display: inline-block;
    background: url(../assets/icon/btn-8.png);
    background-size: contain;
  }
</style>
<template>
  <div id="knowledge" class="page-i">
    <a class="btn-close" @click.stop="close"></a>
    <img class="title" src="../assets/icon/title5.png">
    <div class="photo-wrapper">
      <div class="content" v-html="content"></div>
    </div>
  </div>
</template>
<script>
  import Core  from '../assets/js/core'
  export default {
    created: function () {
      this['$http'].get(Core.serverUrl + '/waterinfo', {
        params: {
          token: window.token
        }
      }).then(function (rs) {
        var data = rs.body
        if(typeof data == 'string') {
          data = JSON.parse(data)
        }
        this.title = data['mainTitle']
        this.content = data['mainText']
        this.articleId = data['articleId']
      }, function (err) {
        console.log('error', err)
      })
      this['$http'].get(Core.serverUrl + '/mobctsavesportinfoviews', {
        params: {
          token: window.token,
          sportID: this.articleId
        }
      }).then(function (rs) {
        console.log(rs.body);
      }, function (err) {
        console.log('error', err)
      })

    },
    data (){
      return {
        articleId: 0,
        title: '饮水小知识',
        content: `<p>暂无内容</p>`
      }
    },
    methods: {
      close(){
        this['$router'].push({path: 'result'})
      }
    }
  }
</script>
