'use strict'

const db = require('mongodb').MongoClient
const connstring = process.env.CONNECTION_STRING

function resolve (cb) {
  return (err, res) => {
    if (err) throw err
    cb(res)
  }
}

function call (query) {
  return (req, res, next) => {
    db.connect(connstring, (err, conn) => {
      if (err) throw err
      query(conn.collection('tunings'), req.params, resolve(result => {
        res.send(result)
        next()
      }))
    })
  }
}

module.exports = call

