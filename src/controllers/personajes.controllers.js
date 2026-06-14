import { personajes } from "../data/personajes.js";

export const obtenerTodosLosPersonajes = (req, res) => {
    return res.status(200).json(personajes);
};
export const obtenerUnPersonajePorId = (req, res) => {};
export const crearUnPersonaje = (req, res) => {};
export const editarUnPersonaje = (req, res) => {};
export const eliminarUnPersonaje = (req, res) => {};