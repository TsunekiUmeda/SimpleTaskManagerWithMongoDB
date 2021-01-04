// CRUD

const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
    // db.collection('users')
    //   .updateOne(
    //     {
    //       _id: new ObjectID('5ff060cb5c037c179fed4a2b'),
    //     },
    //     {
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then(result => {
    //     console.log(result)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })

    db.collection('tasks')
      .updateMany(
        {
          completed: 'false',
        },
        {
          $set: {
            completed: 'true',
          },
        }
      )
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }
)
