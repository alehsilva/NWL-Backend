import express from 'express'

const app = express();
app.use(express.json());
//GET
//POST
//PUT
//DELETE

//Corpo (Request Body): Dados para criação ou atualização de um registro.
//Route Params: Identificar qual recurso eu quero atualizar ou deleter.
//Query Params: Paginação, filtros, ordenação.

app.get('/', (req,res) => {
    return res.json({massage: 'Hello World'});
});

//localhost:3333
app.listen(3333);