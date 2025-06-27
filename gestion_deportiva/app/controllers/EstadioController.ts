import EstadioService from "../service/EstadioService.js"
// instancia
const estadioservice = new EstadioService()

export default class EstadioController {
    async crearEstadio({ request, response }) {
        try {
            const { Estadio, Direccion, CodPostal, Poblacion, Provincia, Capacidad, Sentados, Inauguracion, Dimensiones, CodClub } = request.body()
            const nuevo = await estadioservice.crear({ Estadio, Direccion, CodPostal, Poblacion, Provincia, Capacidad, Sentados, Inauguracion, Dimensiones, CodClub })
            return response.json({ msj: "datos creados", datos: nuevo })
        } catch (error) {
            return response.json({ error: error.message })
        }
    }

    async listarEstadio({ request, response }) {
        try {
            const list = await estadioservice.listar()
            return response.json({ msj: list })
        } catch (error) {
            return response.json({ error: error.message })
        }
    }

    async listarEstadioId({ params, request, response }) {
        try {
            const CodEstadio = params.CodEstadio
            const listaid = await estadioservice.listarId(CodEstadio)
            return response.json({ mensaje: listaid })
        } catch (error) {
            return response.json({ error: error.message })
        }
    }

   async actualizarEstadio({params, request, response}) {
        try{
        const CodEstadio = params.CodEstadio
        const { Estadio, Direccion, CodPostal, Poblacion, Provincia, Capacidad, Sentados, Inauguracion, Dimensiones, CodClub } = request.body()
        const listado = await estadioservice.actualizar(CodEstadio, {Estadio, Direccion, CodPostal, Poblacion, Provincia, Capacidad, Sentados, Inauguracion, Dimensiones, CodClub})
        return response.json({msj:listado})
        }
        catch (error) {
        return response.json({error:error.message})
        }
    }
    async eliminarEstadio({params, request, response}){
        try{
        const CodEstadio=params.CodEstadio
        const resp=await estadioservice.eliminar(CodEstadio)
        return response.json({msj:resp})
        }
        catch (error) {
        return response.json({error:error.message})
        }
    }
}
