require('dotenv').config();

const express = require('express');
const massive = require('massive');
const session = require('express-session');

const app = express();
const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env 

app.use(express.json())
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }

}))

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  app.set('db', db)
  console.log("The db is connected!!!!!!!!");
})



app.listen(SERVER_PORT, () => console.log(`The server is listening on ${SERVER_PORT}!`));


