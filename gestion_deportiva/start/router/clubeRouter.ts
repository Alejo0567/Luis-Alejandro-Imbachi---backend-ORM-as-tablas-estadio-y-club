import  Route  from "@adonisjs/core/services/router";
import ClubeController from "../../app/controllers/ClubeController.js";

const clube = new ClubeController()

Route.post('/clube', clube.crearClube)
Route.get('/clube', clube.listarClube)
Route.get('/clube/:CodClub', clube.listarClubeId)
Route.put('/clube/:CodClub', clube.actualizarClube)
Route.delete('/clube/:CodClub', clube.eliminarClube)
