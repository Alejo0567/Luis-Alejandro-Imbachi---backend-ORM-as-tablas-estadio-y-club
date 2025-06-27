import estadio from '../models/estadio.js'
export default class EstadioService{
    async crear(datos) {
        return await estadio.create(datos)
    }

    async listar() {
        return await estadio.query()
    }

    async listarId(CodEstadio) {
        return await estadio.query().where('CodEstadio',CodEstadio)
    }

    async actualizar(CodEstadio:number, datos: {Estadio, Direccion, CodPostal, Poblacion, Provincia, Capacidad, Sentados, Inauguracion, Dimensiones, CodClub}) {
        const lista = await estadio.find(CodEstadio)
        lista.Estadio = datos.Estadio
        lista.Direccion = datos.Direccion
        lista.CodPostal = datos.CodPostal
        lista.Poblacion = datos.Poblacion
        lista.Provincia = datos.Provincia
        lista.Capacidad = datos.Capacidad
        lista.Sentados = datos.Sentados
        lista.Inauguracion = datos.Inauguracion
        lista.Dimensiones = datos.Dimensiones
        lista.CodClub = datos.CodClub
        await lista.save()
        return lista
    }
    async eliminar(CodEstadio: Number){
            const encontrado=await estadio.find(CodEstadio)
            if(encontrado){
            await encontrado.delete()
            return "Eliminado"
            }
            else {
                return "No Eliminado"
            }
        }
}