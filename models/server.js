const express = require('express');
const cors    = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        
        this.paths = {

        }


    }

    async conectarDB() {

    }

    middlewares() {

    }

    routes() {

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${this.port}`);
        })
    }
}

module.exports = Server