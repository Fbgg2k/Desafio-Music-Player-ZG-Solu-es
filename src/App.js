import React, { useState, useEffect } from "react";
import axios from "axios";
import MusicList from "./components/MusicList";
import MusicPlayer from "./components/MusicPlayer";
import { PiPlaylistFill } from "react-icons/pi";

const App = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/music")
      .then((response) => setSongs(response.data))
      .catch((error) => console.error("Erro ao carregar músicas:", error));
  }, []);

  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white py-3 shadow-md flex items-center b-400">
        {/* Botão sempre ocupa espaço, mas fica invisível quando não há música selecionada */}
        <button
          className={`flex items-center text-white hover:text-gray-400 ml-12 ${
            selectedSong ? "visible" : "invisible"
          }`}
          onClick={() => selectedSong && setSelectedSong(null)} // Previne clique se invisível
        >
          <PiPlaylistFill className="text-2xl" />
        </button>
        <h1 className="flex-grow text-2xl font-bold text-center mr-20">
          Reprodutor de Músicas
        </h1>
      </header>

      <main className="container mx-auto py-8 flex-grow">
        {!selectedSong ? (
          <MusicList songs={songs} onSelect={setSelectedSong} />
        ) : (
          <div>
            <MusicPlayer song={selectedSong} showComments={showComments} />
          </div>
        )}
      </main>
      <footer className="bg-gray-800 text-white text-center py-2">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Reprodutor de Músicas. Todos os
          direitos reservados.{" "}
          <a
            href="https://github.com/Fbgg2k"
            className="text-blue-500 ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/mona-loading-dark-7701a7b97370.gif"
              alt="GitHub"
              className="inline-block w-6 h-6 mr-2 mt-1"
            />
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
