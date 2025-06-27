import  Route  from "@adonisjs/core/services/router";
import EstadioController from "../../app/controllers/EstadioController.js";

const estadio = new EstadioController()

Route.post('/estadio', estadio.crearEstadio)
Route.get('/estadio', estadio.listarEstadio)
Route.get('/estadio/:CodEstadio', estadio.listarEstadioId)
Route.put('/estadio/:CodEstadio', estadio.actualizarEstadio)
Route.delete('/estadio/:CodEstadio', estadio.eliminarEstadio)
