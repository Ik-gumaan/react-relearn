const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const { options } = require('./routes/mainRoute');


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// for body params
app.use(express.json());

app.use(express.static("./static"));
app.use('/',require('./routes/mainRoute'));
app.use('/api',require('./routes/apiRoutes'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})