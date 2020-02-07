let express = require("express"); // this got me by surprise
var cors = require('cors')
const jsonFile = require('../Static/AGENTS_LIST.json');

const corsOptions = {
    origin: 'localhost:3000'
  }

const app = express();


app.get("/list", function(req, res, next) {
  //res.status(200).json();
  res.send(jsonFile);
});

app.listen(3001, () => console.log("server listening"))