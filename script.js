const express = require('express');

const app = express();
const route = express.Router();

const PORT = process.env.PORT || 3000;

var message = "hello ayoub";

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });

app.get('/api', (req, res) => {
    res.send(message);
    console.log(req.host);
})

route.route('/toto').post((req, res) => {
    res.send(req);
})

app.listen( PORT, () => { console.log(`Running on port ${ PORT }`) });