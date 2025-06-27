import clube from '../models/clube.js'
export default class ClubeService{
    async crear(datos) {
        return await clube.create(datos)
    }

    async listar() {
        return await clube.query()
    }

    async listarId(CodClub) {
        return await clube.query().where('CodClub',CodClub)
    }

    async actualizar (CodClub:number, datos: {Club, Nombre, Direccion, Poblacion, Provincia, CodPostal, Tlfno, Colores, Himno, Fax, AñoFundacion, Presupuesto, Presidente, Vicepresidente}) {
    const lista = await clube.find(CodClub)
    lista.Club = datos.Club
    lista.Nombre = datos.Nombre
    lista.Direccion = datos.Direccion
    lista.Poblacion = datos.Poblacion
    lista.Provincia = datos.Provincia
    lista.CodPostal = datos.CodPostal
    lista.Tlfno = datos.Tlfno
    lista.Colores = datos.Colores
    lista.Himno = datos.Himno
    lista.Fax = datos.Fax
    lista.AñoFundacion = datos.AñoFundacion
    lista.Presupuesto = datos.Presupuesto
    lista.Presidente = datos.Presidente
    lista.Vicepresidente = datos.Vicepresidente
    await lista.save()
    return lista
    }
    async eliminar(CodClub: Number){
            const encontrado=await clube.find(CodClub)
            if(encontrado){
            await encontrado.delete()
            return "Eliminado"
            }
            else {
                return "No Eliminado"
            }
        }
}