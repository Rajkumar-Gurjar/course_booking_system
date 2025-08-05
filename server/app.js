// 1. npm init se package.json aayega
// 2. npm i express se package-lock.json aur node_modules folder aayega

const express = require('express')
// console.log(express)
const app = express()
const port = 3000
const web = require('./routes/web')
const connectDB = require('./db/connectDB')



// connect db
connectDB()




app.use('/api',web)

// function when response 
// app.get('/', (req, res) => { 
//   res.send('Hello World!')
// })
// server start
app.listen(port,console.log("server stsrt at localhost:3000"))  // this error comes -> " Cannot GET / "  so we make next line