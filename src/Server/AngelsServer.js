let express = require("express"); // this got me by surprise
const jsonFile = require('../Static/AGENTS_LIST.json');

const app = express();
const cors = require("cors");
app.options('*', cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/list", function(req, res, next) {
  res.status(200).json(jsonFile);
});

app.listen(3001, () => console.log("server listening"))