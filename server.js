require('dotenv').config(); //carrega as variaveis do arquivo .env para o process.env
const express = require('express');
const app = express();

// rota ou endpoint
     // request, reponse
app.get('/ping', (req, res) => {
    return res.json({message: 'pong'});

})
const PORT = process.env.PORT;
app.listen(PORT, () => {
// console.log('Servidor rodando... em http://localhost:3000')  
    console.log(`Servidor rodando... em http://localhost:${PORT}`)
})