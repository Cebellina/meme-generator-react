interface MemeSelectorProps {
  memes: string[];
  onChooseMeme: (image: string) => void;
}

function MemeSelector({ memes, onChooseMeme }: MemeSelectorProps) {
  return (
    <section className="meme-selector">
      <h2>Välj en meme</h2>

      <div className="meme-selector__grid">
        {memes.map((meme) => (
          <button
            className="meme-selector__button"
            key={meme}
            onClick={() => onChooseMeme(meme)}
          >
            <img src={meme} alt="Valbar meme" />
          </button>
        ))}
      </div>
    </section>
  );
}

export default MemeSelector;
