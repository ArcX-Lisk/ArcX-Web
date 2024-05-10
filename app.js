import express from 'express'
import cors from 'cors'
import router from './router/index.js'
import bodyParser from 'body-parser'
import WebSocket from 'ws'
const app = express()

// const ws = new WebSocket('ws://3.90.29.127:8900')

// ws.on('open', () => {
//   const msg = {
//     jsonrpc: '2.0',
//     id: 1,
//     method: 'accountSubscribe',
//     params: [
//       '7RWKzu4G765oYsYHH6jgcsZLmYiJAfCDJkTWn93mfgmB',
//       {
//         encoding: 'base64',
//         commitment: 'finalized'
//       }
//     ]
//   }
//   ws.send(JSON.stringify(msg))
// })
// ws.on('message', function (message) {
//   const msg = JSON.parse(message)
//   console.log('received: ', msg)
//   console.log('param: ', JSON.stringify(msg.params))
// })
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api/arcx_solana', router)


app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

const PORT = 3007


app.listen(PORT, function () {
  console.log(`Server running at http://127.0.0.1:${PORT}/`)
})
