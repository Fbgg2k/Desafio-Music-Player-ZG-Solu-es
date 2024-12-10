import React, { useRef, useEffect, useState, useMemo } from "react";
import "./LyricsViewer.css";

const LyricsViewer = ({ audioRef, lyrics, showComments }) => {
  const lyricsRef = useRef(null);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentPart, setCurrentPart] = useState(0);

  // Definição das partes (uso de useMemo para evitar recriações)
  const parts = useMemo(() => [
    { start: 0, end: 16 },
    { start: 17, end: 33 },
    { start: 34, end: 49 },
    { start: 50, end: 66 },
    { start: 67, end: 82 },
    { start: 83, end: 99 },
    { start: 100, end: 115 },
    { start: 116, end: 132 },
    { start: 133, end: 146 },
    { start: 147, end: 148 },
    { start: 149, end: 163 },
    { start: 164, end: 165 },
    { start: 166, end: 180 },
    { start: 181, end: 183 },
    { start: 184, end: 198 },
    { start: 199, end: 202 },
    { start: 202, end: 216 },
    { start: 217, end: 221 },
    { start: 222, end: 236 },
    { start: 237, end: 242 },
    { start: 243, end: 256 },
    { start: 257, end: 262 },
    { start: 263, end: 275 },
    { start: 276, end: 399 },
  ], []);

  // Filtrar as letras de acordo com os comentários
  const filteredLyrics = showComments
    ? lyrics
    : lyrics.filter((line) => !line.text.includes("("));

  // Letras para a parte atual
  const lyricsForCurrentPart = filteredLyrics.filter(
    (line) =>
      line.time >= parts[currentPart]?.start &&
      line.time <= parts[currentPart]?.end
  );

  // Linha relativa dentro da parte atual
  const relativeCurrentLine = lyricsForCurrentPart.findIndex(
    (line) => line.time === filteredLyrics[currentLine]?.time
  );

  // Sincronizar com o tempo do áudio
  useEffect(() => {
    const syncLyrics = () => {
      const audio = audioRef.current;

      if (audio) {
        const currentTime = audio.currentTime;

        // Encontrar a linha correspondente ao tempo atual
        const lineIndex = filteredLyrics.findIndex(
          (line, index) =>
            currentTime >= line.time &&
            (index === filteredLyrics.length - 1 ||
              currentTime < filteredLyrics[index + 1].time)
        );

        // Atualizar linha ativa
        if (lineIndex !== -1 && lineIndex !== currentLine) {
          setCurrentLine(lineIndex);
        }

        // Atualizar a parte ativa
        const partIndex = parts.findIndex(
          (part) => currentTime >= part.start && currentTime <= part.end
        );

        if (partIndex !== -1 && partIndex !== currentPart) {
          setCurrentPart(partIndex);
        }
      }
    };

    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", syncLyrics);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", syncLyrics);
      }
    };
  }, [audioRef, filteredLyrics, currentLine, currentPart, parts]);

  // Rolar para a linha ativa
  useEffect(() => {
    const container = lyricsRef.current;
    const activeLine = container?.querySelector(`.line-${relativeCurrentLine}`);

    if (activeLine && container) {
      container.scrollTo({
        top:
          activeLine.offsetTop -
          container.offsetTop -
          container.clientHeight / 2 +
          activeLine.clientHeight / 2,
        behavior: "smooth",
      });
    }
  }, [relativeCurrentLine]);

  // Dividir parágrafo em linhas individuais
  const splitLines = (text) => text.split(/, /).map((line, index) => ({ text: line + (index < text.split(/, /).length - 1 ? ',' : ''), time: null }));

  return (
    <div
      ref={lyricsRef}
      className="lyrics-container mt-6 h-64 overflow-y-scroll scrollbar-none"
    >
      {lyricsForCurrentPart.flatMap((line, index) =>
        splitLines(line.text).map((splitLine, subIndex) => (
          <p
            key={`${index}-${subIndex}`}
            className={`text-lg line-${index * 100 + subIndex} ${
              index === relativeCurrentLine
                ? "line-active"
                : "line-inactive text-gray-500 opacity-50"
            }`}
          >
            {splitLine.text}
          </p>
        ))
      )}
    </div>
  );
};

export default LyricsViewer;
