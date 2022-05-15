const express = require('express');
const app = express()
const path = require('path')
var exphbs  = require('express-handlebars');

// import { engine } from 'express-handlebars';


const port = process.env.PORT || 3000;


app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname,"static")));
app.use('/',require(path.join(__dirname,'routes/blog.js')));

app.listen(port, () => {
  console.log(`Blog app listening on port http://localhost:${port}`)
})