const express = require('express');
// const  connectDB = require('./config/database.config');
//  connectDB();
const app = express()
//require('./models/Employee')
const port = 3010;
require('./connect_redis')
app.get('/', (req, res) => {
  res.send('Hello World!')
})
console.log(typeof 123);
console.log('12');
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
