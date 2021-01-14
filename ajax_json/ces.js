const { response } = require('express');
const express = require('express');
const app = express();
app.all('./new',(request,response)=> {
  response.setHeader('Access-Control--allow-Origin','*')
  response.send('哈哈哈哈')
})