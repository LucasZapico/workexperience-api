import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()


const DB = process.env.DATABASEURL
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true})
    .then(client => {
      console.log(`connected to database`)
      // console.dir(client)
      // client.connections.db.collectionNames((err, names) => console.log(names))
    })
    .catch(error => console.error(error))

const db = mongoose.connection;

db.on('open', ref => {
  console.log(mongoose.connection.name)
  mongoose.connection.db.listCollections().toArray((err, names) => {
    console.log(names)
  })  
})  


export default db;

