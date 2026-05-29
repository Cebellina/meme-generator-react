interface MemePreviewProps {
  image: string;
  topText: string;
  bottomText: string;
  topSize: number;
  bottomSize: number;
}

function MemePreview({
  image,
  topText,
  bottomText,
  topSize,
  bottomSize
}: MemePreviewProps) {
  return (
    <section className="meme">
      <img src={image} alt="Vald meme" />

      <p className="meme__text meme__text--top" style={{ fontSize: topSize }}>
        {topText}
      </p>

      <p
        className="meme__text meme__text--bottom"
        style={{ fontSize: bottomSize }}
      >
        {bottomText}
      </p>
    </section>
  );
}

export default MemePreview;
