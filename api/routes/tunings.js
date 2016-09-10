'use strict'

const mongodb = require('mongodb')
const call = require('./database-connection')
const db = mongodb.MongoClient
const ObjectId = mongodb.ObjectId

function findAll (db, params, cb) {
  db.find().toArray(cb)
}

function findByNumberOfNotes (db, params, cb) {
  const notes = +params.notes
  db.find().filter({ notes }).toArray(cb)
}

function findById (db, params, cb) {
  const _id = new ObjectId(params.id)
  db.findOne({ _id }, cb)
}

function page (db, params, cb) {
  const pageSize = +params.size || 10
  const pageNo = params.page
  db.find().skip(pageSize * (pageNo - 1)).limit(pageSize).toArray(cb)
}

module.exports = app => {
  app.get('/tunings', call(findAll))
  app.get('/tunings/:id', call(findById))
  app.get('/tunings/notes/:notes', call(findByNumberOfNotes))
  app.get('/tunings/page/:page', call(page))
}

