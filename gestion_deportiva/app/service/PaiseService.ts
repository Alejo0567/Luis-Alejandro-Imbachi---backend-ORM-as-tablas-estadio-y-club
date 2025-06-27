/*logica de negocio consultas
funciones create,query listar */
//importacion modelo where, find
import paise from '../models/paise.js'
export default class PaiseService{
    async crear(datos) {
        return await paise.create(datos)
    }

    async listar() {
        return await paise.query()
    }

    async listarId(CodPais) {
        return await paise.query().where('CodPais',CodPais)
    }

    async actualizar (CodPais:number, datos: {NombrePais, Comunitario}) {
    const lista = await paise.find(CodPais)
    lista.NombrePais=datos.NombrePais
    lista.Comunitario=datos.Comunitario
    await lista.save()// para que se vea reflejado
    return lista
    }
    async eliminar(CodPais: Number){
        const encontrado=await paise.find(CodPais)
        if(encontrado){
        await encontrado.delete()
        return "Eliminado"
        }
        else {
            return "No Eliminado"
        }
    }
    async conteo(){
    const resultado=await paise.query().count('* as total')
    return resultado[0].$extras.total
    }
}