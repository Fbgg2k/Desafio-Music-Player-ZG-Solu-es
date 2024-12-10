// seed.js  
const mongoose = require("mongoose");  
const Song = require("./models/Song");  

// Substitua 'seuBancoDeDados' pelo nome do seu banco de dados.  
const uri = "mongodb://localhost:27017/musicDB";  

const songs = [  
  {  
    title: "Erguei as Mãos",  
    artist: "Padre Marcelo Rossi",  
    album: "Canções de Fé",  
    duration: "4:20",  
    lyrics: [
      //Primeira Parte  
      { text: "Erguei as mãos e dai glória a Deus.", time: 0 },  
      { text: "Erguei as mãos e dai glória a Deus.", time: 4 },  
      { text: "Erguei as mãos.", time: 9 },  
      { text: "E cantai como os filhos do Senhor.", time: 11 },
      
      //Segunda Parte
      { text: "Erguei as mãos e dai glória a Deus.", time: 17 },  
      { text: "Erguei as mãos e dai glória a Deus.", time: 21 },  
      { text: "Erguei as mãos.", time: 25 },  
      { text: "E cantai como os filhos do Senhor.", time: 28 },
      
      //Terceira Parte
      { text: "Os animaizinhos subiram de dois em dois.", time: 34},  
      { text: "Os animaizinhos subiram de dois em dois.", time: 38 },  
      { text: "O elefante.", time: 42 },  
      { text: "E os passarinhos como os filhos do Senhor.", time: 45 },

      //Quarta Parte
      { text: "Erguei as mãos e dai glória a Deus.", time: 50 },  
      { text: "Erguei as mãos e dai glória a Deus.", time: 54 },  
      { text: "Erguei as mãos.", time: 58 },  
      { text: "E cantai como os filhos do Senhor.", time: 61 },

      //Quinta Parte
      { text: "Os animaizinhos subiram de dois em dois.", time: 67 },
      { text: "Os animaizinhos subiram de dois em dois.", time: 71 },
      { text: "A minhoquinha.", time: 75 },
      { text: "E os pinguins como os filhos do Senhor.", time: 77 },
      
      //Sexta Parte
      { text: "Erguei as mãos e dai glória a Deus.", time: 83 },  
      { text: "Erguei as mãos e dai glória a Deus.", time: 87 },  
      { text: "Erguei as mãos.", time: 91 },
      { text: "E cantai como os filhos do Senhor.", time: 94 },

      //Sétima Parte
      { text: "Os animaizinhos subiram de dois em dois.", time: 100 },
      { text: "Os animaizinhos subiram de dois em dois.", time: 104 },
      { text: "O canguru.", time: 108 },
      { text: "E o sapinho como os filhos do Senhor.", time: 110 },

      //Oitava Parte
      { text: "Erguei as mãos e dai glória a Deus.", time: 116 },  
      { text: "Erguei as mãos e dai glória a Deus.", time: 120 },  
      { text: "Erguei as mãos.", time: 124 },
      { text: "E cantai como os filhos do Senhor.", time: 127 },

      //Nona Parte
      { text: "O senhor tem muitos filhos.", time: 133 },
      { text: "Muitos filhos ele tem.", time: 137 },
      { text: "Eu sou um deles você também.", time: 140 },
      { text: "Louvemos ao senhor.", time: 145 },

      //Décima Parte
      { text: "Braço direito.", time: 147 },

      //Décima Primeira Parte
      { text: "O senhor tem muitos filhos.", time: 149 },
      { text: "Muitos filhos ele tem.", time: 152 },
      { text: "Eu sou um deles você também.", time: 156 },
      { text: "Louvemos ao senhor.", time: 160 },

      //Décima Segunda Parte
      { text: "Braço direito braço esquerdo.", time: 164 },

      //Décima Terceira Parte
      { text: "O senhor tem muitos filhos.", time: 166 },
      { text: "Muitos filhos ele tem.", time: 170 },
      { text: "Eu sou um deles você também.", time: 174 },
      { text: "Louvemos ao senhor.", time: 178 },

      //Décima Quarta Parte
      { text: "Braço direito braço esquerdo perna direita.", time: 181 },

      //Décima Quinta Parte
      { text: "O senhor tem muitos filhos.", time: 184 },
      { text: "Muitos filhos ele tem.", time: 188 },
      { text: "Eu sou um deles voçe também.", time: 191 },
      { text: "Louvemos ao senhor.", time: 196 },

      //Décima Sexta Parte
      { text: "Braço direito braço esquerdo, perna direita perna esquerda.", time: 199 },

      //Décima Sétima Parte
      { text: "O senhor tem muitos filhos.", time: 203 },
      { text: "Muitos filhos ele tem.", time: 206 },
      { text: "Eu sou um deles voçe também.", time: 210 },
      { text: "Louvemos ao senhor.", time: 214 },

      //Décima Oitava Parte
      { text: "Braço direito braço esquerdo, perna direita perna esquerda, balança a cabeça.", time: 217 },

      //Décima Nona Parte
      { text: "O senhor tem muitos filhos.", time: 222 },
      { text: "Muitos filhos ele tem.", time: 226 },
      { text: "Eu sou um deles voçe também.", time: 230 },
      { text: "Louvemos ao senhor.", time: 234 },

      //Vigésima Parte
      { text: "Braço direito braço esquerdo, perna direita perna esquerda, balança a cabeça dá uma voltinha.", time: 237 },

      //Vigésima Primeira Parte
      { text: "O senhor tem muitos filhos.", time: 243 },
      { text: "Muitos filhos ele tem.", time: 246 },
      { text: "Eu sou um deles voçe também.", time: 249 },
      { text: "Louvemos ao senhor.", time: 253 },

      //Vigésima Segunda Parte
      { text: "Braço direito braço esquerdo, perna direita perna esquerda, balança a cabeça dá uma voltinha dá um pulinho.", time: 257 },

      //Vigésima Terceira Parte
      { text: "O senhor tem muitos filhos.", time: 263 },
      { text: "Muitos filhos ele tem.", time: 266 },
      { text: "Eu sou um deles voçe também.", time: 269 },
      { text: "Louvemos ao senhor.", time: 273 },

      //Vigésima Quarta Parte
      { text: "Braço direito braço esquerdo, perna direita perna esquerda, balança a cabeça dá uma voltinha, dá um pulinho abraça o irmão.", time: 276 },
      
      // Continue adicionando as linhas com seus respectivos tempos  
    ],  
    audioUrl: "http://localhost:5000/audio/erguei_as_maos.mp3",  
  },  
  // Adicione outras músicas aqui  
];  

const seedDatabase = async () => {  
  try {  
    // Conecte-se ao banco de dados  
    await mongoose.connect(uri);  

    console.log("Conectado ao MongoDB");  

    // Insira as músicas na coleção  
    await Song.insertMany(songs);  
    console.log("Banco de dados populado!");  
  } catch (error) {  
    console.error("Erro ao conectar ou inserir dados:", error);  
  } finally {  
    // Feche a conexão com o banco de dados  
    mongoose.connection.close();  
  }  
};  

// Execute a função para popular o banco de dados  
seedDatabase();