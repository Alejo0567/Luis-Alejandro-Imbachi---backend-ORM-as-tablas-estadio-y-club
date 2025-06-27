import  Route  from "@adonisjs/core/services/router";
import PaiseController from "../../app/controllers/PaiseController.js";

const pais = new PaiseController()

Route.post('/pais', pais.crearPais)
Route.get('/pais', pais.listarPais)
Route.get('/pais/:CodPais', pais.listarPaisId)
Route.put('/pais/:CodPais', pais.actualizarPais)
Route.delete('/pais/:CodPais', pais.eliminarPais)
Route.get('/contador', pais.contadorPais)



