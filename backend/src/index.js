const express = require('express');
const cors = require('cors');
/**importar rota */
const routes = require('./routes');

const app = express();
/**quem podera acessar a aplicação */
app.use(cors())
/**Ler aquivo Json */
app.use(express.json());
/**Ler a rota da pasta */
app.use(routes);

app.listen(3333);


