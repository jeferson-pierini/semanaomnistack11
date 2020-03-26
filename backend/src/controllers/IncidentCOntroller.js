const connection = require('../database/connection');

module.exports = {
   async index(request, response){
    const {page = 1} = request.query

    const [count] = await connection('incidencias').count();

    //console.log(count);
    
    const incidencias = await connection('incidencias')
    /**Limita a quantidade de dados trazido na pagina - esquema de paginação */
    .join('ongs', 'ongs_id', '=', 'incidencias.ongs_id')
    .limit(5)
    .offset((page - 1) * 5)
    .select([
        'incidencias.*',
        'ongs.nome',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.cidade',
        'ongs.uf'
    ]);

    response.header('X-Total-Count', count['count(*)']);

    return response.json(incidencias);
   }, 


    async create(request, response){
        const{titulo, descricao, valor} = request.body;
        const ongs_id = request.headers.authorization;

        const [id] = await connection('incidencias').insert({
            titulo,
            descricao,
            valor,
            ongs_id,    
        });
        
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;
        const ongs_id = request.headers.authorization;
        
        const incidencias = await connection('incidencias')
        .where('id', id)
        .select('ongs_id')
        /**retorna apenas um resultado */
        .first();

        if (incidencias.ongs_id != ongs_id){
            return response.status (401).json({ erro: 'Operation not permitted.' });
        }

        await connection('incidencias').where('id', id).delete();

        return response.status(204).send();
    }   

};