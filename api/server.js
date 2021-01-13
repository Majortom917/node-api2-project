const express = require('express')

const helperRouter = require('./helpers-router')
const server = express()

server.use(express.json())
server.use('/api/posts', helperRouter)

module.exports = server