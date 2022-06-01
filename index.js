import { conn } from './src/db.js';
import * as dotenv from 'dotenv';
import app from './src/app.js';
dotenv.config();

var port = process.env.PORT || 3525;

conn.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`My crazy App is listening at ${port}`);
  });
});