const News = require('../models/news');

const listarNoticias = async (req, res) => {
    try {
        const noticias = await News.findAll();
        res.json(noticias);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar notícias" });
    }
};

const criarNoticia = async (req, res) => {
    try {
        const { title, short_description, content } = req.body;

        // 🚀 Se não houver arquivo enviado, define "default.jpg"
        const image = req.file ? req.file.filename : "default.jpg";

        const novaNoticia = await News.create({
            title,
            short_description,
            content,
            image,
            views: 0
        });

        res.json(novaNoticia);
    } catch (error) {
        console.error("❌ Erro ao criar notícia:", error);
        res.status(500).json({ error: "Erro ao criar notícia." });
    }
};



const buscarNoticia = async (req, res) => {
    const id = req.params.id;
    try {
        const noticia = await News.findByPk(id);

        if (!noticia) {
            return res.status(404).json({ error: "Notícia não encontrada." });
        }

        res.json(noticia); 
    } catch (error) {
        console.error("❌ Erro ao buscar notícia:", error);
        res.status(500).json({ error: "Erro ao buscar a notícia." });
    }
};

const atualizarNoticia = async (req, res) => {
    const id = req.params.id;
    try {
        const noticia = await News.findByPk(id);
        if (!noticia) {
            return res.status(404).json({ message: "Notícia não encontrada" });
        }

        const { title, short_description, content } = req.body;
        const image = req.file ? req.file.filename : noticia.image; 

        await noticia.update({ 
            title, 
            short_description, 
            content, 
            image
        });

        res.json(noticia);
    } catch (error) {
        console.error("❌ Erro ao atualizar notícia:", error);
        res.status(500).json({ error: "Erro ao atualizar notícia." });
    }
};


const deletarNoticia = async (req, res) => {
    const id = req.params.id;
    try {
        const noticia = await News.findByPk(id);
        if (noticia) {
            await noticia.destroy();
            res.json({ message: "Notícia deletada com sucesso" });
        } else {
            res.status(404).json({ message: "Notícia não encontrada" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar a notícia." });
    }
};

const getHomePage = async (req, res) => {
    try {
        const news = await News.findAll({
            attributes: ['id', 'title', 'short_description', 'image', 'content', 'views'], 
            order: [['views', 'DESC']]
        });

        res.render('home', { news });
    } catch (error) {
        console.error("❌ Erro ao carregar a página inicial:", error);
        res.status(500).send("Erro ao carregar notícias.");
    }
};

// 📌 Exibir uma notícia e incrementar visualizações
const incrementViews = async (req, res) => {
    try {
        const { id } = req.params;
        const newsItem = await News.findByPk(id);

        if (!newsItem) {
            return res.status(404).json({ error: "Notícia não encontrada." });
        }

        await newsItem.increment('views'); // Incrementa antes de renderizar
        await newsItem.reload(); // Recarrega os dados atualizados

        res.render('news-view', { newsItem });
    } catch (error) {
        console.error("Erro ao carregar a notícia:", error);
        res.status(500).json({ error: "Erro ao carregar a notícia." });
    }
};

// 📌 Buscar todas as notícias (para página de cadastro e API)
const getAllNews = async (req, res) => {
    try {
        const noticias = await News.findAll({
            attributes: ['id', 'title', 'short_description', 'content', 'image', 'views'],
            order: [['id', 'DESC']]
        });

        if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            return res.json(noticias); 
        }

        res.render('cadastro', { noticias });
    } catch (error) {
        console.error("Erro ao buscar notícias:", error);
        res.status(500).json({ error: "Erro ao buscar notícias." });
    }
};

// 📌 Buscar uma única notícia por ID
const getNewsById = async (req, res) => {
    try {
        const { id } = req.params;
        const noticia = await News.findByPk(id);

        if (!noticia) {
            return res.status(404).json({ error: "Notícia não encontrada." });
        }

        res.json(noticia); // Retorna os dados em JSON
    } catch (error) {
        console.error("Erro ao buscar notícia:", error);
        res.status(500).json({ error: "Erro ao buscar a notícia." });
    }
};

const viewNoticia = async (req, res) => {
    try {
        const { id } = req.params;
        const newsItem = await News.findByPk(id);

        if (!newsItem) {
            return res.status(404).send("Notícia não encontrada.");
        }

        res.render("news-view", { newsItem });
    } catch (error) {
        console.error("❌ Erro ao carregar a notícia:", error);
        res.status(500).send("Erro ao carregar notícia.");
    }
};


// **Correção na exportação**
module.exports = {
    listarNoticias,
    criarNoticia,
    buscarNoticia,
    atualizarNoticia,
    deletarNoticia,
    getHomePage,
    incrementViews,
    getAllNews,
    getNewsById,
    viewNoticia
};

