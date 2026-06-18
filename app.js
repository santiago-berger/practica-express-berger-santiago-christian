import express from "express";
import { personajesRouter } from "./src/routes/personajes.routes.js";

const app = express();
const PORT = 3003;

app.use(express.json());

app.use("/api", personajesRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});