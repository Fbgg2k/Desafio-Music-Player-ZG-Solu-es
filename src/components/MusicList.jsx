import React from "react";  

const MusicList = ({ songs, onSelect }) => {  
  return (  
    <div className="text-center">  
      <h2 className="text-xl font-bold mb-4">Selecione uma música:</h2>  
      <ul className="space-y-4">  
        {songs.map((song) => (  
          <li key={song.id}>  
            <button  
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded"  
              onClick={() => onSelect(song)}  
            >  
              {song.title} - {song.artist}  
            </button>  
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default MusicList;