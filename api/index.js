'use strict'

const restify = require('restify')
const logger = require('morgan')
const routes = require('./routes')
const server = restify.createServer()

server.pre(restify.pre.sanitizePath())
server.use(logger('dev'))
server.use(restify.CORS())
server.use(restify.acceptParser(server.acceptable))
server.use(restify.queryParser())
server.use(restify.bodyParser())
server.use(restify.authorizationParser())

routes(server)

server.listen(8079, () => {
  console.log(`listening at ${server.url}`)
})

