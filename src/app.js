import routes from './routes.js'
import express from 'express'

const app = express()

app.use('/', routes);

export default app;