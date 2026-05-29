interface TextControlsProps {
  topText: string;
  bottomText: string;
  topSize: number;
  bottomSize: number;
  onTopTextChange: (value: string) => void;
  onBottomTextChange: (value: string) => void;
  onTopSizeChange: (value: number) => void;
  onBottomSizeChange: (value: number) => void;
}

function TextControls({
  topText,
  bottomText,
  topSize,
  bottomSize,
  onTopTextChange,
  onBottomTextChange,
  onTopSizeChange,
  onBottomSizeChange
}: TextControlsProps) {
  return (
    <section className="text-controls">
      <label>
        Top text
        <input
          type="text"
          value={topText}
          placeholder="Skriv text längst upp"
          onChange={(event) => onTopTextChange(event.target.value)}
        />
      </label>

      <label>
        Storlek top text: {topSize}px
        <input
          type="range"
          min="20"
          max="80"
          value={topSize}
          onChange={(event) => onTopSizeChange(Number(event.target.value))}
        />
      </label>

      <label>
        Bottom text
        <input
          type="text"
          value={bottomText}
          placeholder="Skriv text längst ner"
          onChange={(event) => onBottomTextChange(event.target.value)}
        />
      </label>

      <label>
        Storlek bottom text: {bottomSize}px
        <input
          type="range"
          min="20"
          max="80"
          value={bottomSize}
          onChange={(event) => onBottomSizeChange(Number(event.target.value))}
        />
      </label>
    </section>
  );
}

export default TextControls;
