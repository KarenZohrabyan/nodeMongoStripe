const express = require('express');
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./src/auth');
require('./src/db/mongoose');
const cors = require('cors');
const path = require('path')

//Graphql
const { graphqlHTTP } = require('express-graphql');
const schema = require('../Test/src/graphql/graphql.schema');



const app = express();
const port = 3000;
//added
const YOUR_DOMAIN = 'http://localhost:3000';

app.use(express.json());
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));
app.set('view engine', 'ejs');
app.use(express.static('views'));
// app.use(cookieParser());


// app.use(cookieSession({
//   name: 'auth',
//   maxAge: 24*60*60*1000,
//   keys: ['key1', 'key2', 'key3']
// }));

// app.use(expressSession({
//   secret: 'secret'
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// app.get('/', (req, res) => {
//     res.render('success.ejs')
// })

// app.get('/signup', (req, res) => {
//     res.render('index.ejs');
// })

// app.get('/login', (req, res) => {
//     res.send('Failed!');
// })

// let scp = ['status', 'email', 'friends', 'notify', 'offline']

// app.get('/vkontakte', passport.authenticate('vkontakte', 
// { 
//   scope: scp,
// }));

// app.get('/vkontakte/callback',
//   passport.authenticate('vkontakte', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//   })
// );


app.get('/home', (req, res) => {
  res.render('chechout.ejs')
})





app.listen(port, () => { console.log('Server is running!')});