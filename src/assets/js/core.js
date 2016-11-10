/**
 * Created by Administrator on 2016/11/1 0001.
 */

export default {
  serverUrl: 'http://219.233.184.56',
  showMasker() {
    document.querySelector('.masker').style.display = 'block';
  },
  hideMasker() {
    document.querySelector('.masker').style.display = 'none';
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
      item.push(item[1] * amount);
    }
    return rule;
  }
}
