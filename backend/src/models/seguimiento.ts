import mongoose, { Schema, Document} from 'mongoose';

const seguimientoSchema = new Schema({
    nombre: {
        type: String
    },
    fecha: {
        type: String
    },
    dni: {
        type: String
    },
    telefono: {
        type: String
    },
    fiebre: {
        type: String
    },
    tos: {
        type: String
    },
    dificultadRespiratoria: {
        type: String
    },
    malestarGeneral: {
        type: String
    },
});

export interface ISeguimiento extends Document {
    nombre: string;
    fecha: string;
    dni: string;
    telefono: string;
    fiebre: string;
    tos: string;
    dificultadRespiratoria: string;
    malestarGeneral: string;
}

export default mongoose.model<ISeguimiento>('Seguimiento', seguimientoSchema);