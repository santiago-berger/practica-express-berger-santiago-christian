import { personajes } from "../data/personajes.js";

export const obtenerTodosLosPersonajes = (req, res) => {
    return res.status(200).json(personajes);
};
export const obtenerUnPersonajePorId = (req, res) => {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
        return res.status(400).json({
            message: "El id debe ser un número válido"
        })   
    }

    const personaje = personajes.find((p) => p.id === id);

    if (!personaje) {
        return res.status(404).json({
            message: `No se encontró el personaje con el id #${id}`,
        });
    }

    return res.status(200).json(personaje);
};
export const crearUnPersonaje = (req, res) => {};
export const editarUnPersonaje = (req, res) => {};
export const eliminarUnPersonaje = (req, res) => {};