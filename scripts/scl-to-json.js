'use strict'

const fs = require('fs')
const path = require('path')
const os = require('os')

const tuningsDir = path.join(__dirname, 'scl')
const outputFile = path.join(__dirname, 'tunings.json')

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

function removeSpaces (line) {
  return line.replace(/\s/g, '')
}

function tuningModel (name) {
  return {
    description: 'No description.',
    intervals: [ 1 ],
    name: name,
    notes: 1
  }
}

function parseTuning (filepath) {
  const fileContents = readFile(filepath)
  const lines = fileContents.split(os.EOL)
  const tuningName = path.basename(filepath, '.scl')

  let counter = 0
  let tuning = tuningModel(tuningName)

  lines.forEach(line => {
    const notCommentedLine = line => !/^!/.test(line)
    const notBlankLine = removeSpaces(line)

    if (notCommentedLine && notBlankLine) {
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
