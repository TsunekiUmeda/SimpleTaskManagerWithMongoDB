// CRUD

const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne(
    //   {
    //     name: 'Vikram',
    //     age: 40,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    //   }
    // )
    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Jen',
    //       age: 26,
    //     },
    //     {
    //       name: 'Gunther',
    //       age: 27,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    //   }
    // )

    // db.collection('tasks').insertMany(
    //   [
    //     {
    //       description: 'English shadowing',
    //       completed: 'false',
    //     },
    //     {
    //       description: 'Github contribution',
    //       completed: 'true',
    //     },
    //     {
    //       description: 'Yogrut',
    //       completed: 'false',
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert tasks')
    //     }
    //     console.log(result.ops)
    //   }
    // )
  }
)
