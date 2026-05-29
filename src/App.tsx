import { useState } from "react";
import html2canvas from "html2canvas";
import MemeSelector from "./components/MemeSelector";
import MemePreview from "./components/MemePreview";
import TextControls from "./components/TextControls";

export interface MemeText {
  id: number;
  value: string;
  size: number;
}

const memeImages = [
  `${import.meta.env.BASE_URL}meme1.png`,
  `${import.meta.env.BASE_URL}meme2.png`,
  `${import.meta.env.BASE_URL}meme3.png`,
  `${import.meta.env.BASE_URL}meme4.png`,
  `${import.meta.env.BASE_URL}meme5.png`,
  `${import.meta.env.BASE_URL}meme6.png`,
  `${import.meta.env.BASE_URL}meme7.png`,
  `${import.meta.env.BASE_URL}meme8.png`,
  `${import.meta.env.BASE_URL}meme9.png`,
  `${import.meta.env.BASE_URL}meme10.png`,
  `${import.meta.env.BASE_URL}meme11.png`,
  `${import.meta.env.BASE_URL}meme12.png`,
  `${import.meta.env.BASE_URL}meme13.png`,
  `${import.meta.env.BASE_URL}meme14.png`,
  `${import.meta.env.BASE_URL}meme15.png`,
  `${import.meta.env.BASE_URL}meme16.png`
];

function App() {
  const [showSelector, setShowSelector] = useState(false);
  const [selectedMeme, setSelectedMeme] = useState("");
  const [texts, setTexts] = useState<MemeText[]>([]);

  function chooseMeme(image: string) {
    setSelectedMeme(image);
    setTexts([]);
    setShowSelector(false);
  }

  function addText() {
    const newText: MemeText = {
      id: Date.now(),
      value: "",
      size: 42
    };

    setTexts([...texts, newText]);
  }

  function updateText(id: number, value: string) {
    setTexts(
      texts.map((text) =>
        text.id === id ? { ...text, value } : text
      )
    );
  }

  function updateTextSize(id: number, size: number) {
    setTexts(
      texts.map((text) =>
        text.id === id ? { ...text, size } : text
      )
    );
  }

  function removeText(id: number) {
    setTexts(texts.filter((text) => text.id !== id));
  }

  function saveMeme() {
    if (!selectedMeme) {
      return;
    }

    const element = document.querySelector(".meme") as HTMLDivElement;

    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.download = "meme.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }

  return (
    <main className="app">
      <h1>Meme Generator</h1>

      <button className="primary-button" onClick={() => setShowSelector(true)}>
        Välj meme
      </button>

      {showSelector && (
        <MemeSelector memes={memeImages} onChooseMeme={chooseMeme} />
      )}

      {!selectedMeme && (
        <p className="info-text">Välj en bild för att börja skapa din meme.</p>
      )}

      {selectedMeme && (
        <>
          <MemePreview image={selectedMeme} texts={texts} />

          <button className="primary-button" onClick={addText}>
            Lägg till text
          </button>

          {texts.length > 0 && (
            <TextControls
              texts={texts}
              onUpdateText={updateText}
              onUpdateTextSize={updateTextSize}
              onRemoveText={removeText}
            />
          )}

          <button className="download-button" onClick={saveMeme}>
            Ladda ner meme
          </button>
        </>
      )}
    </main>
  );
}

export default App;