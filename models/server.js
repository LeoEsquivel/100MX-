const express = require('express');
const cors    = require('cors');

const { dbConnection } = require('../database/config.database');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth:       '/api/auth',
            categorias: '/api/categorias',
            productos: '/api/productos',
            usuarios:   '/api/usuarios',
            uploads:    '/api/uploads'
        }


        //Conectar a base datos
        this.conectarDB()

        //Middlewares
        this.middlewares();

        //Rutas
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        
        //CORS
        this.app.use( cors() );

        //Parse body
        this.app.use( express.json() );

        //Directorio publico
        // this.app.use( express.static('public') );
    }

    routes() {

        // this.app.use(this.paths.auth, require('../routes/auth.routes'));
        // this.app.use(this.paths.categorias, require('../routes/categorias.routes'));
        // this.app.use(this.paths.productos, require('../routes/productos.routes'));
        // this.app.use(this.paths.usuarios, require('../routes/user.routes'));
        // this.app.use(this.paths.uploads, require('../routes/uploads.routes'));

    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto:', this.port);
        });
    }
}

module.exports = Server;