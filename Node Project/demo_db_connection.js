const express = require('express');
const cors = require('cors');
const app = express();
var mysql = require('mysql');

app.use(cors()); // Enable CORS for all routes

// Create a connection to the database
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "FordTerritoryCurry30MVP,.",
  port: 3306,
  database: "app_customerportal"
});

// Endpoint to check if server is running
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Endpoint to fetch records by any sltcode
app.get('/oslt/sltcode/:sltcode', (req, res) => {
  var sltcode = req.params.sltcode;
  con.query(`SELECT * FROM oslt WHERE sltcode = '${sltcode}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

// Endpoint to fetch records by any itemcode
app.get('/oslt/itemcode/:itemcode', (req, res) => {
  var itemcode = req.params.itemcode;
  con.query(`SELECT * FROM oslt WHERE itemcode = '${itemcode}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

// Endpoint to fetch records by any statusnum
app.get('/oslt/statusnum/:statusnum', (req, res) => {
  var statusnum = req.params.statusnum;
  con.query(`SELECT * FROM oslt WHERE statusnum = '${statusnum}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

// Endpoint to fetch records by statusnum '-1'
app.get('/oslt/statusnum/-1', (req, res) => {
  con.query(`SELECT * FROM oslt WHERE statusnum = '-1'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

// Endpoint to fetch records by owner '4'
app.get('/oslt/owner/4', (req, res) => {
  con.query(`SELECT * FROM oslt WHERE owner = '4'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

// Endpoint to fetch records by any owner
app.get('/oslt/owner/:owner', (req, res) => {
  var owner = req.params.owner;
  con.query(`SELECT * FROM oslt WHERE owner = '${owner}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

// Additional endpoints for the remaining columns
app.get('/oslt/createdby/:createdby', (req, res) => {
  var createdby = req.params.createdby;
  con.query(`SELECT * FROM oslt WHERE createdby = '${createdby}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/oslt/datecreate/:datecreate', (req, res) => {
  var datecreate = req.params.datecreate;
  con.query(`SELECT * FROM oslt WHERE datecreate = '${datecreate}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/oslt/updateby/:updateby', (req, res) => {
  var updateby = req.params.updateby;
  con.query(`SELECT * FROM oslt WHERE updateby = '${updateby}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/oslt/dateupdate/:dateupdate', (req, res) => {
  var dateupdate = req.params.dateupdate;
  con.query(`SELECT * FROM oslt WHERE dateupdate = '${dateupdate}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/oslt/subject/:subject', (req, res) => {
  var subject = req.params.subject;
  con.query(`SELECT * FROM oslt WHERE subject = '${subject}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/oslt/symptom/:symptom', (req, res) => {
  var symptom = req.params.symptom;
  con.query(`SELECT * FROM oslt WHERE symptom = '${symptom}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/oslt/cause/:cause', (req, res) => {
  var cause = req.params.cause;
  con.query(`SELECT * FROM oslt WHERE cause = '${cause}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/oslt/descriptio/:descriptio', (req, res) => {
  var descriptio = req.params.descriptio;
  con.query(`SELECT * FROM oslt WHERE descriptio = '${descriptio}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/oslt/attachment/:attachment', (req, res) => {
  var attachment = req.params.attachment;
  con.query(`SELECT * FROM oslt WHERE attachment = '${attachment}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/oslt/atcentry/:atcentry', (req, res) => {
  var atcentry = req.params.atcentry;
  con.query(`SELECT * FROM oslt WHERE atcentry = '${atcentry}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/oslt/transfered/:transfered', (req, res) => {
  var transfered = req.params.transfered;
  con.query(`SELECT * FROM oslt WHERE transfered = '${transfered}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/oslt/instance/:instance', (req, res) => {
  var instance = req.params.instance;
  con.query(`SELECT * FROM oslt WHERE instance = '${instance}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/oslt/', (req, res) => {
  con.query(`SELECT * FROM oslt`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
