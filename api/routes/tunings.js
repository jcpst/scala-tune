'use strict'

const db = require('mongodb').MongoClient
const connstring = process.env.CONNECTION_STRING

function findAllTunings (db, cb) {
  const tunings = db.collection('tunings')
  tunings.find({}).toArray((err, result) => {
    if (err) throw err
    cb(result)
  })
}

function findTuningsByNumberOfNotes (db, numOfNotes, cb) {
  const notes = parseInt(numOfNotes)
  const tunings = db.collection('tunings')
  tunings.find({}).filter({ notes }).toArray((err, result) => {
    if (err) throw err
    cb(result)
  })
}

function pageThroughTunings (db, config, cb) {
  const tunings = db.collection('tunings')
  const { pageSize, pageNumber } = config
  tunings.find({})
    .skip(pageSize * (pageNumber - 1))
    .limit(pageSize)
    .toArray((err, result) => {
      if (err) throw err
      cb(result)
    })
}

function index (req, res, next) {
  db.connect(connstring, (err, conn) => {
    if (err) throw err
    findAllTunings(conn, (result) => {
      res.send(result)
      next()
    })
  })
}

function find (req, res, next) {
  db.connect(connstring, (err, conn) => {
    if (err) throw err
    findTuningsByNumberOfNotes(conn, req.params.notes, (result) => {
      res.send(result)
      next()
    })
  })
}

function page (req, res, next) {
  db.connect(connstring, (err, conn) => {
    if (err) throw err
    pageThroughTunings(conn, {
      pageNumber: req.params.page,
      pageSize: parseInt(req.params.size) || 10
    }, (result) => {
      res.send(result)
      next()
    })
  })
}

module.exports = app => {
  app.get('/tunings', index)
  app.get('/tunings/notes/:notes', find)
  app.get('/tunings/page/:page', page)
}

