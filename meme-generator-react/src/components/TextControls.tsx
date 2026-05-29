import type { MemeText } from "../App";

interface TextControlsProps {
  texts: MemeText[];
  onUpdateText: (id: number, value: string) => void;
  onUpdateTextSize: (id: number, size: number) => void;
  onRemoveText: (id: number) => void;
}

function TextControls({
  texts,
  onUpdateText,
  onUpdateTextSize,
  onRemoveText
}: TextControlsProps) {
  return (
    <section className="text-controls">
      {texts.map((text, index) => (
        <div className="text-control" key={text.id}>
          <label>
            Text {index + 1}
            <input
              type="text"
              value={text.value}
              placeholder="Skriv meme-text"
              onChange={(event) => onUpdateText(text.id, event.target.value)}
            />
          </label>

          <label>
            Storlek: {text.size}px
            <input
              type="range"
              min="20"
              max="80"
              value={text.size}
              onChange={(event) =>
                onUpdateTextSize(text.id, Number(event.target.value))
              }
            />
          </label>

          <button
            className="remove-button"
            type="button"
            onClick={() => onRemoveText(text.id)}
          >
            Ta bort text
          </button>
        </div>
      ))}
    </section>
  );
}

export default TextControls;