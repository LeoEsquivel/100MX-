const { Schema, model } = require('mongoose');

const PreguntasSchema = Schema({
    pregunta: {
        type: String,
        require: (true, 'El nombre es obligatorio.')
    },
    respuestas: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Respuestas',
            required: true
        }
    ]
});

module.exports = model('Pregunta', PreguntasSchema);