  const { response } = require('express');
  
  //1.引入express
  const express = require('express');

const { ArgumentOutOfRangeError } = require('rxjs');

  //2.创建应用对象
  const app = express();
  
  //3.创建路由规则
  app.all('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应头
    response.setHeader('Access-Control-Allow-Header','*')
    //响应一个数据
    const data = {name:'齐天大圣'};
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str)
  });

  app.post('/servers', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('hello AJAX POST')
  });

  app.get('/delay', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    setTimeout(function() {
      response.send('dealy');
    },3000)
     });


    app.all('/axios-server', (request, response) => {
      //设置响应头 设置允许跨域
      response.setHeader('Access-Control-Allow-Origin','*');
      response.setHeader('Access-Control-Allow-Header','*');
      //设置响应体
      const data = {name:'sunwukong'};
      response.send(JSON.stringify(data));
    });

    //fetch方法
    app.all('/fetch-server', (request, response) => {
      //设置响应头 设置允许跨域
      response.setHeader('Access-Control-Allow-Origin','*');
      response.setHeader('Access-Control-Allow-Header','*');
      //设置响应体
      const data = {name:'sunwukong'};
      response.send(JSON.stringify(data));
    });

    //用户名是否存在
    app.all('/check-username', (request, response) => {
      //设置响应头 设置允许跨域
      response.setHeader('Access-Control-Allow-Origin','*');
      response.setHeader('Access-Control-Allow-Header','*');
      //设置响应体
      const data = {
        exist:'1',
        msg:'用户名已经存在'
      };

      let str = JSON.stringify(data)
      response.end(`handle(${str})`);
    });

 

  //4.监听窗口启动服务
  app.listen(8000, () =>{
    console.log('服务启动');
  })