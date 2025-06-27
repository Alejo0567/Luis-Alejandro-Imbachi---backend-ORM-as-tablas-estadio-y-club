import ClubeService from "../service/ClubeService.js"
// instancia
const clubeservice = new ClubeService()

export default class ClubeController {
    async crearClube({ request, response }) {
        try {
            const { Club, Nombre, Direccion, Poblacion, Provincia, CodPostal, Tlfno, Colores, Himno, Fax, AñoFundacion, Presupuesto, Presidente, Vicepresidente } = request.body()
            const nuevo = await clubeservice.crear({ Club, Nombre, Direccion, Poblacion, Provincia, CodPostal, Tlfno, Colores, Himno, Fax, AñoFundacion, Presupuesto, Presidente, Vicepresidente })
            return response.json({ msj: "datos creados", datos: nuevo })
        } catch (error) {
            return response.json({ error: error.message })
        }
    }

    async listarClube({ request, response }) {
        try {
            const list = await clubeservice.listar()
            return response.json({ msj: list })
        } catch (error) {
            return response.json({ error: error.message })
        }
    }

    async listarClubeId({ params, request, response }) {
        try {
            const CodClub = params.CodClub
            const listaid = await clubeservice.listarId(CodClub)
            return response.json({ mensaje: listaid })
        } catch (error) {
            return response.json({ error: error.message })
        }
    }

    async actualizarClube ({params, request, response}) {
        try{
        const CodClub = params.CodClub
        const { Club, Nombre, Direccion, Poblacion, Provincia, CodPostal, Tlfno, Colores, Himno, Fax, AñoFundacion, Presupuesto, Presidente, Vicepresidente } = request.body()
        const listado = await clubeservice.actualizar(CodClub, {Club, Nombre, Direccion, Poblacion, Provincia, CodPostal, Tlfno, Colores, Himno, Fax, AñoFundacion, Presupuesto, Presidente, Vicepresidente})
        return response.json({msj:listado})
        }
        catch (error) {
        return response.json({error:error.message})
        }
    }
    async eliminarClube({params, request, response}){
        try{
        const CodClub=params.CodClub
        const resp=await clubeservice.eliminar(CodClub)
        return response.json({msj:resp})
        }
        catch (error) {
        return response.json({error:error.message})
        }
    }
}