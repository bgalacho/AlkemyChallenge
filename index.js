import express from 'express';
import bodyParser from 'body-parser';
import { conn } from './src/db.js';
import * as dotenv from 'dotenv';


dotenv.config();

var app = express();
var port = process.env.PORT || 3525;


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.status(200).send({
		message: 'GET Home route working fine!'
	});
});


conn.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`My crazy App is listening at ${port}`);
  });
});