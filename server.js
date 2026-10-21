require('dotenv').config(); //carrega as variaveis do arquivo .env para o process.env
const express = require('express');
const app = express();
app.use(express.json());


// rota ou endpoint
app.get('/', (req, res) => {
    return res.json({message: 'API TI-325 rodadndo....'});
})

// request, response   
app.get('/ping', (req, res) => {
    return res.json({message:'ping pong'});
})

app.post('/usuario', (req, res) => {
    const { nome, idade } = req.body;



    // Trnasformações
    // 1. Converte o nome para MAISCULAS
    // 2. Calcula o ano aproximado de nascimento
    // 3. Adiciona um status personalizado
    const nomeFormatado = nome ? nome.toUpperCase() : 'NÃO INFORMADO'; // = if dp python 
    const anoNascimento = new Date().getFullYear() - idade;

    return res.json({   ///Quando abre e fecha chave {} é o modo Java Script no json.
        mensagem: 'Dados recebidos eprocessados com sucesso',
        dadosOriginais: {nome, idade},
        dadosProcessados:{
            nomeFormatado,
            anoNascimentoAproximado: anoNascimento,
            perfil: idade >= 18 ? 'Adulto' : 'Adolescente' // if se idade maior que 18 adulto

        }
    })

    return res.json({
        mensagem: `dados recebidos e processados com sucesso`,
        nome,
        idade
    })
})







const PORT = process.env.PORT;
app.listen(PORT, () => {
// console.log('Servidor rodando... em http://localhost:3000')  
    console.log(`Servidor rodando... em http://localhost:${PORT}`)
})