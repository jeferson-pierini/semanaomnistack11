/**Vai retornar casos especificos de uma unica Ong */

const connection = require('../database/connection');
module.exports = {
    async index(request, response){
        const ongs_id = request.headers.authorization;
        
        const incidencias = await connection('incidencias')
            .where('ongs_id', ongs_id)
            .select('*');

        return response.json(incidencias);
    }
}