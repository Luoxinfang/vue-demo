/**
 * Created by Administrator on 2016/11/1 0001.
 */

export default {
  serverUrl: 'http://127.0.0.1:8080',
  //serverUrl: 'http://219.233.184.56',
  showMasker() {
    document.querySelector('.masker').style.display = 'block'
  },
  hideMasker() {
    document.querySelector('.masker').style.display = 'none'
  },
  showDialog(content) {
    var $dom = document.querySelector('.dialog')
    this.showMasker()
    $dom.innerHTML = content
    $dom.style.display = 'block'
  },
  hideDialog() {
    this.hideMasker()
    document.querySelector('.dialog').style.display = 'none'
  },
  //获取时间
  getTime(){
    var now = new Date()
    var hour = now.getHours()
    var minutes = now.getMinutes()
    var time = parseFloat(hour + '.' + ( minutes > 9 ? minutes : '0' + minutes))
    return time
  },
  //强制转换位为
  parseToTime (timeStr) {
    return parseFloat(timeStr.replace(':', '.')).toFixed(2)
  },
  getTimeSpace(a, b){
    var space = 0
    var _a = ('2016/11/11 ' + a).replace('.', ':')
    var _b = ('2016/11/11 ' + b).replace('.', ':')
    var aDate = +new Date(_a)
    var bDate = +new Date(_b)
    space = parseInt((aDate - bDate) / 1000 / 60)
    return space
  },
  getUrlParam(key){
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i"),
      r = window.location.search.substr(1).match(reg)
    if (null != r) return r[2]
    return null
  },
  //获取饮水量
  getDrinkAmount: function (weight) {
    let amount = 1800;
    if (weight >= 50 && weight <= 75) {
      amount = 2400;
    } else if (weight > 75) {
      amount = 3000;
    }
    return amount;
  },
  //获取饮水程序
  getDrinkProgram: function (amount) {
    let rule = [
      ['7:00', 0.115],
      ['9:30', 0.125],
      ['13:00', 0.135],
      ['14:00', 0.125],
      ['15:30', 0.120],
      ['17:30', 0.130],
      ['20:00', 0.135],
      ['21:30', 0.115]
    ];
    for (let i = 0; i < rule.length; i++) {
      var item = rule[i];
      item.push(parseInt(item[1] * amount));
    }
    return rule;
  }
}
