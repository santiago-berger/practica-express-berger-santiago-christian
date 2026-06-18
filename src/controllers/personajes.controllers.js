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
export const crearUnPersonaje = (req, res) => {
   const { nombre, imagen } = req.body;
   
   if (!nombre || !imagen) {
    return res.status(400).json({
        message: "Los campos nombre e imagen son obligatorios",
    });
   }

   const nuevoId = personajes.length > 0 ? Math.max(...personajes.map((p) => p.id)) + 1 : 1;

   const nuevoPersonaje = {id: nuevoId, nombre, imagen};
   personajes.push(nuevoPersonaje);

   return res.status(201).json({
    messaje: "Personaje creado correctamente",
    personaje: nuevoPersonaje,
   })
};
export const editarUnPersonaje = (req, res) => {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
        return res.status(400).json({message: "El id debe ser un número valido"})
    }

    const datos = req.body;

    if (Object.keys(datos).lenght === 0) {
        return res.status(400).json({
            message: "Debe enviar al menos un campo para actualizar",
        })
    }

    const hayCamposVacios = Object.values(datos).some((valor) => valor === "");
    if (hayCamposVacios) {
        return res.status(400).json({
            message: "Los campos enviados no pueden estar vacios"
        })
    }

    const indice = personajes.findIndex((p) => p.id === id);

    if (indice === -1) {
        return res.status(404).json({
            message: `No se encontró el personaje con el id #${id}`,
        })
    }

    if (datos.nombre) personajes[indice].nombre = datos.nombre;
    if (datos.imagen) personajes[indice].imagen = datos.imagen;

    return res.status(200).json({
        message: "Personaje editado correctamente",
        personaje: personajes[indice],
    })
};
export const eliminarUnPersonaje = (req, res) => {};