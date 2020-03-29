const crypto = require('crypto');
const connection = require('../database/connection');

module.exports ={
    async index(request, response){
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
     },

    async create(request, response){
        const {nome, email, whatsapp, cidade, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');
    /**Inserir os dados da tabela */
    await connection('ongs').insert({
       id,
       nome,
       email,
       whatsapp,
       cidade,
       uf
    })
    //console.log(data);
    return response.json({id});
    }
};