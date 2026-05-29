import { useState } from "react";
import html2canvas from "html2canvas";
import MemeSelector from "./components/MemeSelector";
import MemePreview from "./components/MemePreview";
import TextControls from "./components/TextControls";

const memeImages = ["/meme1.png", "/meme2.png", "/meme3.png", "/meme4.png", "/meme5.png", "/meme6.png", "/meme7.png", "/meme8.png", "/meme9.png", "/meme10.png", "/meme11.png", "/meme12.png", "/meme13.png", "/meme14.png", "/meme15.png", "/meme16.png"];

function App() {
  const [showSelector, setShowSelector] = useState(false);
  const [selectedMeme, setSelectedMeme] = useState("");
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [topSize, setTopSize] = useState(42);
  const [bottomSize, setBottomSize] = useState(42);

  function chooseMeme(image: string) {
    setSelectedMeme(image);
    setTopText("");
    setBottomText("");
    setTopSize(42);
    setBottomSize(42);
    setShowSelector(false);
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
          <MemePreview
            image={selectedMeme}
            topText={topText}
            bottomText={bottomText}
            topSize={topSize}
            bottomSize={bottomSize}
          />

          <TextControls
            topText={topText}
            bottomText={bottomText}
            topSize={topSize}
            bottomSize={bottomSize}
            onTopTextChange={setTopText}
            onBottomTextChange={setBottomText}
            onTopSizeChange={setTopSize}
            onBottomSizeChange={setBottomSize}
          />

          <button className="download-button" onClick={saveMeme}>
            Ladda ner meme
          </button>
        </>
      )}
    </main>
  );
}

export default App;
