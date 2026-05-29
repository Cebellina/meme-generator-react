import { Rnd } from "react-rnd";
import type { MemeText } from "../App";

interface MemePreviewProps {
  image: string;
  texts: MemeText[];
}

function MemePreview({ image, texts }: MemePreviewProps) {
  return (
    <section className="meme">
      <img src={image} alt="Vald meme" />

      {texts.map((text, index) => (
        <Rnd
          key={text.id}
          default={{
            x: 40,
            y: 40 + index * 70,
            width: 500,
            height: 80
          }}
          bounds="parent"
          enableResizing={false}
        >
          <p className="meme__text" style={{ fontSize: text.size }}>
            {text.value || "Skriv text"}
          </p>
        </Rnd>
      ))}
    </section>
  );
}

export default MemePreview;