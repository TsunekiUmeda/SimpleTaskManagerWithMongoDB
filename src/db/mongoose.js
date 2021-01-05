const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
})

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email us invalid')
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    },
  },
})

const me = new User({
  name: ' Mike  ',
  email: 'myemail@example.com',
})

me.save()
  .then(() => {
    console.log(me)
  })
  .catch(error => {
    console.log('Error', error)
  })

// const Task = mongoose.model('Task', {
//   description: {
//     type: String,
//     required: true,
//   },
//   completed: {
//     type: Boolean,
//   },
// })

// const task = new Task({
//   description: 'brain dump',
//   completed: false,
// })

// task
//   .save()
//   .then(() => {
//     console.log(task)
//   })
//   .catch(error => {
//     console.log(error)
//   })
