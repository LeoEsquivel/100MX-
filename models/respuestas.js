const { Schema, model } = require('mongoose');

const RespuestasSchema = Schema({
    respuesta: {
        type: String,
        require: (true, 'Debe llevar una respuesta')
    },
    puntaje: {
        type: Number,
        require: (true, 'Debe llevar un puntaje')
    }
});

module.exports = model('Respuesta', RespuestasSchema);