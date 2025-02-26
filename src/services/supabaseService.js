const { Sequelize } = require('sequelize');

// Configuração da conexão com o banco de dados
const sequelize = new Sequelize({
  dialect: 'postgres', // Dialeto do banco de dados (PostgreSQL)
  username: 'postgres.jxpkdojknfgjxfaojsdi', // Usuário do banco de dados
  password: 'HcXH62mbrZ46SxkS', // Senha do banco de dados
  database: 'postgres', // Nome do banco de dados
  host: 'aws-0-sa-east-1.pooler.supabase.com', // Host do Supabase
  port: 5432, // Porta do PostgreSQL
  logging: console.log, // Ativa logs para depuração
  dialectOptions: {
    ssl: {
      require: true, // Requer SSL
      rejectUnauthorized: false, // Ignora erros de certificado SSL (necessário para Supabase)
    },
  },
});


module.exports = sequelize;