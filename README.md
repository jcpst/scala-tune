Scala Tune
==========

Nope, not the programming language that runs on the JVM. This is a [scala][1]
tool, which is a software suite for experimenting with musical tunings.

[1]: http://www.huygens-fokker.org/scala/

getting started
---------------

1. clone this repo and `cd` into it
1. Set up a mongo db server with a new collection
1. Add a `CONNECTION_STRING` variable to a `.env` file in the root of the project.
  * example `CONNECTION_STRING=mongodb://username:password@host.com:19746/scala-tune`
1. Install dependencies with `npm install` or `npm i`
1. `npm run data` to generate data.
1. `npm run seed` to insert documents into your mongo collection.
1. `npm run dev` to fire up the api and the ui, watches for changes.
