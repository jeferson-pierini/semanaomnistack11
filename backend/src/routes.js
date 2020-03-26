const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**Cria uma seção de conexão */
routes.post('/sessions', SessionController.create);
// /**Lista dados da Tabela */
routes.get('/ongs', OngController.index);
/**Cadastar informação no Banco*/
routes.post('/ongs', OngController.create);
/**Lista um caso de uma Ong em especifico */
routes.get('/profile', ProfileController.index);

routes.get('/incidencias', IncidentController.index);
routes.post('/incidencias', IncidentController.create);

/**Delete informação do Banco */
routes.delete('/incidencias/:id', IncidentController.delete);

module.exports = routes