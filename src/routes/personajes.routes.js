import { Router } from "express";
import {
  obtenerTodosLosPersonajes,
  obtenerUnPersonajePorId,
  crearUnPersonaje,
  editarUnPersonaje,
  eliminarUnPersonaje,
} from "../controllers/personajes.controllers.js";

export const personajesRouter = Router();

personajesRouter.get("/personajes", obtenerTodosLosPersonajes);
personajesRouter.get("/personajes/:id", obtenerUnPersonajePorId);
personajesRouter.post("/personajes", crearUnPersonaje);
personajesRouter.put("/personajes/:id", editarUnPersonaje);
personajesRouter.delete("/personajes/:id", eliminarUnPersonaje);