// models/Song.js  
const mongoose = require("mongoose");  

const lyricSchema = new mongoose.Schema({  
  text: { type: String, required: true },  
  time: { type: Number, required: true }  
});  

const songSchema = new mongoose.Schema({  
  title: { type: String, required: true },  
  artist: { type: String, required: true },  
  album: { type: String, required: true },  
  duration: { type: String, required: true },  
  lyrics: [lyricSchema], // Use o lyricSchema aqui  
  audioUrl: { type: String, required: true },  
});  

const Song = mongoose.model("Song", songSchema);  

module.exports = Song;