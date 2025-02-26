📰 Fiap News

Fiap News é um portal de notícias focado em tecnologia, desenvolvido com Node.js e Bootstrap, conectado a um banco de dados Supabase para gerenciamento das notícias.

🚀 Funcionalidades

Exibição das principais notícias de tecnologia.

Home page dividida em três partes com cards retangulares contendo imagem, título e link para a notícia completa.

Contador de visitas para exibir as 5 notícias mais lidas.

API para gerenciamento de notícias.

Conexão segura com o banco de dados Supabase.

📂 Estrutura do Projeto

fiap-news/
├── backend/              # Servidor Node.js (API)
│   ├── config/          # Configurações do banco de dados (Supabase)
│   ├── models/          # Modelos do banco de dados
│   ├── routes/          # Rotas da API
│   ├── controllers/     # Controladores da API
│   ├── server.js        # Servidor principal
│
├── frontend/             # Interface do usuário
│   ├── public/          # Arquivos estáticos (CSS, JS, imagens)
│   ├── src/views/       # Páginas do sistema (EJS)
│   ├── src/views/partials/  # Componentes reutilizáveis (navbar, footer)
│
├── .gitignore            # Arquivos ignorados pelo Git
├── README.md             # Documentação do projeto
└── package.json          # Dependências do projeto

⚙️ Como Executar o Projeto

🔹 1. Clonar o Repositório

git clone https://github.com/alexpaixao81/fiapnews.git
cd fiapnews

🔹 2. Instalar Dependências

npm install

🔹 3. Configurar o Banco de Dados (Supabase)

Crie uma conta no Supabase.

Configure o banco de dados e crie as tabelas necessárias.

Atualize o arquivo backend/config/database.js com as credenciais do Supabase.

🔹 4. Iniciar o Servidor

npm start

O servidor rodará em http://localhost:3000

🛠 Tecnologias Utilizadas

Node.js - Backend

Express.js - API

Bootstrap - Estilização

Supabase - Banco de dados PostgreSQL

EJS - Renderização de páginas dinâmicas
