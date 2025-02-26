const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: "public/images", 
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const upload = multer({ storage });

router.get("/", newsController.getHomePage);

router.get("/news", newsController.listarNoticias);
router.post("/news", upload.single("image"), newsController.criarNoticia);
router.get("/news/:id", newsController.buscarNoticia);
router.put("/news/:id", upload.single("image"), newsController.atualizarNoticia);
router.delete("/news/:id", newsController.deletarNoticia);

router.get("/cadastro", newsController.getAllNews);
router.get("/news/view/:id", newsController.incrementViews);

router.get("/news/view/:id", newsController.viewNoticia);


module.exports = router;

