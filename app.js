const express = require('express')
const app = express()
const axios = require('axios');

axios.get('https://www.apmex.com/gold-price')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })





// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})


let port = process.env.PORT || 5050;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})