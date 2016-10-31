
为了保持API的简洁高效，建议后端同学使用RESTFul风格的API

***app调用index.html使用webview渲染即可
   需要传递的参数userId和gender
   如: index.html?userId=20161031&gender=0
   

1.保存用户的信息
    参数
    {
        性别：gender Number 0 女 1 男
        身高：height Number 单位cm
        体重：weight Number 单位Kg
        头像：photoImg String 头像的地址
        同意游戏规则：agreeRule Boolen  true 同意 false 不同意
    }
    返回
    {
     code: 200,
     msg: 'ok',
     data: {
        ID： userId String 用户的ID
        性别：gender Number 0 女 1 男
        身高：height Number 单位cm
        体重：weight Number 单位Kg
        头像：photoImg String 头像的地址
        同意游戏规则：agreeRule Boolean  true 同意 false 不同意   
     }
    }
  
2.获取用户的信息
    参数
    userId 
    
    返回
    同保存接口一致
    
3.喝水
    参数
    {
        userId
        时间： time Timestamp 用户喝水的客户端时间
        饮水量： amount Number 用户喝水的饮水量(ml)
    }
    返回
    {
        code: 200,
        msg: 'ok',
        data:{
        
        }
    }
    
4.获取用户当天的饮水情况
    参数
    userId
    
    返回
    {
        code: 200,
        msg: 'ok',
        data:{
            schedule:[
                ['7:00', true],
                ['9:30', true],
                ['13:00', false],
                ['14:00', false],
                ['15:30', false],
                ['17:30', false],
                ['20:00', false],
                ['21:30', false]
            ]
        }
    }
    
5.是否在后台提醒喝水
    参数
    {
        userId
        提醒喝水: remind boolean true 提醒 false 不提醒
    }
    返回
    {
        code: 200,
        msg: 'ok',
        data:{
            remind: true 
        }
    }

    

主要责任说明
1.我方负责根据UI设计做出对应的页面
2.我方根据指定的需求实现对应的功能
3.我方负责协调开发需要的接口和数据
4.依据约定正确的提交和处理数据

以下情况，甲方需要负责
1.未按上述文档约定设计接口，或者接口提供延期
2.接口不给、少给，返回数据错误、缺失等问题
3.联调期间没有积极配合我方，致使我方在接入正式环境时无法重新问题
4.甲方未经我方同意对需求提出较大的变更，增加较多的开发工作
5.未按我的实施方案进行实施，致使系统无法使用

