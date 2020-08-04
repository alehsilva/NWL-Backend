import express from 'express'
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
//GET
//POST
//PUT
//DELETE

//Corpo (Request Body): Dados para criação ou atualização de um registro.
//Route Params: Identificar qual recurso eu quero atualizar ou deleter.
//Query Params: Paginação, filtros, ordenação.




//localhost:3333
app.listen(3333);