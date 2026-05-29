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

const memeImages = ["/meme1.png", "/meme2.png", "/meme3.png", "/meme4.png", "/meme5.png", "/meme6.png", "/meme7.png", "/meme8.png", "/meme9.png", "/meme10.png", "/meme11.png", "/meme12.png", "/meme13.png", "/meme14.png", "/meme15.png", "/meme16.png"];

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