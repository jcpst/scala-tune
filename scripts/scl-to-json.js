'use strict'

const fs = require('fs')
const path = require('path')
const os = require('os')

const tuningsDir = process.env.TUNINGS_DIR || path.join(__dirname, 'scl')
const outputFile = process.env.TUNINGS_JSON || path.join(__dirname, 'tunings.json')

function readFile (filePath) {
  try {
    return fs.readFileSync(path.normalize(filePath), {
      encoding: 'utf-8'
    })
  } catch (e) {
    console.error(e)
    return ''
  }
}

function splitLines (lines) {
  return lines.split(os.EOL)
}

function commentedLine (line) {
  return line.substring(0, 1) === '!'
}

function removeSpaces (line) {
  return line.replace(/\s/g, '')
}

function ratio (line) {
  const i = line.split('/')
  return i[0] / i[1]
}

function cents (line) {
  const i = removeSpaces(line)
  return Math.pow(2, i / 1200)
}

function parseTuning (filepath) {
  const fileContents = readFile(filepath)
  const lines = splitLines(fileContents)

  let counter = 0
  let tuning = {
    description: '',
    intervals: [],
    name: path.basename(filepath, '.scl'),
    notes: 0
  }

  lines.forEach(line => {
    if (!commentedLine(line) && removeSpaces(line)) {
      counter++

      if (counter === 1) {
        tuning.description = line
      } else if (counter === 2) {
        tuning.notes = parseInt(line)
      } else {
        tuning.intervals.push(removeSpaces(line))
      }
    }
  })

  return tuning
}

function allTunings (dirpath) {
  const tuningFiles = fs.readdirSync(dirpath)
  let tunings = []

  tuningFiles.forEach(file => {
    const filePath = path.join(dirpath, file)
    const tuning = parseTuning(filePath)
    tunings.push(tuning)
  })

  return tunings
}

const tunings = allTunings(tuningsDir)
fs.writeFileSync(outputFile, JSON.stringify(tunings))

