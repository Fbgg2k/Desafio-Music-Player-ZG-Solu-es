const express = require("express");  
const router = express.Router();  
const Song = require("../models/Song");  
const multer = require("multer");  
const path = require("path");  

// Configuração do Multer para armazenamento de arquivos  
const storage = multer.diskStorage({  
  destination: (req, file, cb) => {  
    cb(null, 'audio/'); // Pasta onde os arquivos de áudio serão armazenados  
  },  
  filename: (req, file, cb) => {  
    cb(null, file.originalname); // Usa o nome original do arquivo  
  }  
});  

const upload = multer({ storage: storage });  

// Adicionar uma música  
router.post("/add", upload.single('audio'), async (req, res) => {  
  try {  
    const newSong = new Song({  
      title: req.body.title,  
      artist: req.body.artist,  
      album: req.body.album,  
      duration: req.body.duration,  
      lyrics: req.body.lyrics.split(','), // Se as letras vierem em uma string, separe-as por vírgula  
      audioUrl: `http://localhost:5000/audio/${req.file.filename}` // A URL acessível do áudio  
    });  
    await newSong.save();  
    res.status(201).json(newSong);  
  } catch (error) {  
    res.status(500).json({ error: "Erro ao adicionar música" });  
  }  
});  

// Obter todas as músicas  
router.get("/", async (req, res) => {  
  try {  
    const songs = await Song.find();  
    res.status(200).json(songs);  
  } catch (error) {  
    res.status(500).json({ error: "Erro ao buscar músicas" });  
  }  
});  

// Obter uma música por ID  
router.get("/:id", async (req, res) => {  
  try {  
    const song = await Song.findById(req.params.id);  
    if (!song) {  
      return res.status(404).json({ error: "Música não encontrada" });  
    }  
    res.status(200).json(song);  
  } catch (error) {  
    res.status(500).json({ error: "Erro ao buscar música" });  
  }  
});  

// Deletar uma música  
router.delete("/:id", async (req, res) => {  
  try {  
    const song = await Song.findByIdAndDelete(req.params.id);  
    if (!song) {  
      return res.status(404).json({ error: "Música não encontrada" });  
    }  
    res.status(200).json({ message: "Música deletada com sucesso" });  
  } catch (error) {  
    res.status(500).json({ error: "Erro ao deletar música" });  
  }  
});

// Rota para obter letra completa ou partes específicas
router.get("/:id/lyrics", async (req, res) => {
  const { id } = req.params;
  const { part } = req.query; // 'part' pode ser 'parte1' ou 'parte2'

  try {
    const song = await Song.findById(id);
    if (!song) return res.status(404).json({ message: "Música não encontrada" });

    if (part) {
      if (song.lyrics[part]) {
        return res.json({ lyrics: song.lyrics[part] });
      } else {
        return res.status(400).json({ message: "Parte inválida" });
      }
    }

    // Retorna a letra completa
    res.json({ lyrics: song.lyrics });
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar letra", error });
  }
});

module.exports = router;