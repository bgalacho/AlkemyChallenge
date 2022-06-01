import routes from './routes.js'
import express from 'express'
import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routes);

export default app;