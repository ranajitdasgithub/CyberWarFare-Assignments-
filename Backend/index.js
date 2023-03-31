const express = require("express");
var moment = require('moment');  
const cors = require("cors");
require("dotenv").config();
let port = process.env.PORT;

const { connection } = require("./Config/db");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is homepage");
});
app.get("/difference", (req, res) => {
   const {timestamp1,timestamp2}=req.query;
   const formattedDate1 = moment(timestamp1, 'DD:MM:YYYY HH:mm:ss').format('YYYY-MM-DDTHH:mm:ss');
   const formattedDate2 = moment(timestamp2, 'DD:MM:YYYY HH:mm:ss').format('YYYY-MM-DDTHH:mm:ss');
   const difference=moment(formattedDate2).diff(moment(formattedDate1),'seconds')
   res.send({difference})
  });
app.listen(port, async () => {
    try {
      await connection;
      console.log("Connected to db successfully");
    } catch (err) {
      console.log(err);
    }
    console.log(`Server started at ${port}`);
  });