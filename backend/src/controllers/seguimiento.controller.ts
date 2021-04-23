import { Request, Response} from "express";
import Seguimiento from "../models/seguimiento"

const getSeguimientos = async (req: Request, res: Response) => {
    try{
        const results = await Seguimiento.find({});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

const getSeguimiento = async (req: Request, res: Response) => {
    try{
        const results = await Seguimiento.find({"_id": req.params.id});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

const newSeguimiento = async (req: Request, res: Response) => {
    try{
    let seguimiento = new Seguimiento({
        "nombre" : req.body.nombre,
        "fecha" : req.body.fecha,
        "dni": req.body.dni,
        "telefono": req.body.telefono,
        "fiebre": req.body.fiebre,
        "tos": req.body.tos,
        "dificultadRespiratoria": req.body.dificultadRespiratoria,
        "malestarGeneral": req.body.malestarGeneral
    });
    seguimiento.save().then((data) => {
        return res.status(201).json(data);
    });
    } catch(err) {
        return res.status(500).json(err);
    }
}

const deleteSeguimientos = async (req: Request, res: Response) => {
   
    try{
        const results = await Seguimiento.deleteMany({});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

const deleteSeguimiento = async (req: Request, res: Response) => {
   
    try{
        const results = await Seguimiento.deleteOne({"nombre": req.params.nombre});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

function updateSeguimiento (req: Request, res: Response){
    const id: string = req.params.id;
    const nombre: string = req.body.nombre;
    const fecha : string = req.body.fecha;
    const dni: string = req.body.dni;
    const telefono: string = req.body.telefono;
    const fiebre: string = req.body.fiebre;
    const tos: string = req.body.tos;
    const dificultadRespiratoria: string =  req.body.dificultadRespiratoria;
    const malestarGeneral: string = req.body.malestarGeneral;

    Seguimiento.update({"_id": id}, {$set: {"name": nombre,"adress": fecha,"dni": dni,"telefono": telefono,
    "fiebre": fiebre, "tos": tos, "dificultadRespiratoria": dificultadRespiratoria, "malestarGeneral": malestarGeneral}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

export default { getSeguimiento, getSeguimientos, newSeguimiento, deleteSeguimientos, deleteSeguimiento, updateSeguimiento };