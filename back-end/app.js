require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { APP_PORT } = process.env
const mongoConnect = require('./databases/mongodb-db');
const todoRoutes = require('./routes/todo-routes');
const notFoundRoute = require('./middlewares/404-middleware');

class App {
    constructor() {
        this.app = express()
    }

    start() {
        this.config()
        this.routes()
        mongoConnect()
            .then(() => this.app.listen(APP_PORT))
    }

    config() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended : false }))
    }

    routes() {
        this.app.use('/api/todos', todoRoutes)
        this.app.use(notFoundRoute)
    }
}

const app = new App()
app.start()