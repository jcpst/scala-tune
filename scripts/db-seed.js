'use strict'

const db = require('mongodb').MongoClient
const url = process.env.CONNECTION_STRING
const tunings = require('./tunings.json')

function insertTunings (db, cb) {
  const collection = db.collection('tunings')
  collection.insertMany(tunings, (err, result) => {
    if (err) throw err
    console.log(`Inserted ${tunings.length} documents into the collection`)
    cb(result)
  })
}

db.connect(url, (err, conn) => {
  if (err) throw err
  console.log('connected to the server')
  insertTunings(conn, () => {
    conn.close()
  })
})

