const express = require('express');
const path = require('path');

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Configurar EJS como motor de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Servir arquivos estáticos como CSS, JS, imagens
app.use(express.static(path.join(__dirname, 'public')));

// Importar as rotas
const newsRoutes = require('./src/routes/newsRoutes');
app.use('/', newsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

