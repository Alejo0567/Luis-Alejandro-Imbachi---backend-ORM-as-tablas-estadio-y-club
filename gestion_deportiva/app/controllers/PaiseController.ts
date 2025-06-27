import PaiseService from "../service/PaiseService.js"
//instancia
const paiseservice=new PaiseService()
export default class PaiseController{
    async crearPais({ request, response }) {
        try {
            const { NombrePais, Comunitario } = request.body()
            const nuevo=await paiseservice.crear({ NombrePais, Comunitario })
            return response.json({msj:"datos creados", datos:nuevo})
        } catch (error){
            return response.json({error:error.message})
        }
    }

    async listarPais({request,response}) {
        try{
        const list = await paiseservice.listar()
        return response.json({msj:list})
        }
        catch (error){
            return response.json({error:error.message})
        }
    }
    async listarPaisId({ params, request, response}){
        try{

        const CodPais = params.CodPais
        const listaid = await paiseservice.listarId(CodPais)
        return response.json({mensaje:listaid})
        }
        catch (error) {
        return response.json({error:error.message})
        }
    }
    async actualizarPais ({params, request, response}) {
        try{
        const CodPais = params.CodPais
        const { NombrePais, Comunitario } = request.body()
        const listado = await paiseservice.actualizar(CodPais, {NombrePais, Comunitario})
        return response.json({msj:listado})
        }
        catch (error) {
        return response.json({error:error.message})
        }
    }
    async eliminarPais({params, request, response}){
        try{
        const CodPais=params.CodPais
        const resp=await paiseservice.eliminar(CodPais)
        return response.json({msj:resp})
        }
        catch (error) {
        return response.json({error:error.message})
        }
    }
    async contadorPais({request, response}) {
        try{
        const resultado=await paiseservice.conteo()
        return response.json({msj:resultado})
        }
        catch (error) {
        return response.json({error:error.message})
        }
    }
}
