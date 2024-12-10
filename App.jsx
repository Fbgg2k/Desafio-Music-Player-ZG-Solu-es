import React, { useState, useEffect } from "react";
import axios from "axios";
import MusicList from "./components/MusicList";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  const [songs, setSongs] = useState([]); // Lista de músicas recebidas do backend
  const [selectedSong, setSelectedSong] = useState(null); // Música selecionada pelo usuário
  const [showComments, setShowComments] = useState(false); // Exibir ou ocultar comentários

  // Buscar músicas do backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/music") // Substitua pela URL real do backend
      .then((response) => setSongs(response.data))
      .catch((error) => console.error("Erro ao carregar músicas:", error));
  }, []);

  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
      {/* Cabeçalho */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <h1 className="text-center text-3xl font-bold">Reprodutor de Músicas</h1>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto py-8 flex-grow">
        {/* Exibir lista de músicas ou player */}
        {!selectedSong ? (
          <MusicList songs={songs} onSelect={setSelectedSong} />
        ) : (
          <div>
            <MusicPlayer song={selectedSong} showComments={showComments} />
            {/* Controles adicionais */}
            <div className="text-center mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
                onClick={() => setShowComments(!showComments)}
              >
                {showComments ? "Ocultar Comentários" : "Mostrar Comentários"}
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setSelectedSong(null)}
              >
                Voltar à Lista
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Reprodutor de Músicas. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default App;
