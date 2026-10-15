import { Fragment } from "react";

/**
 * Merender teks dengan dukungan aksen: bagian yang dibungkus *bintang*
 * ditampilkan dengan huruf serif miring (Instrument Serif).
 */
export function RichText({
  text,
  accentClassName = "",
}: {
  text: string;
  accentClassName?: string;
}) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em
            key={i}
            className={`font-serif italic font-normal tracking-normal ${accentClassName}`}
          >
            {part.slice(1, -1)}
          </em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}

/** Merender array string sebagai baris-baris yang dipisah <br />. */
export default function Lines({
  lines,
  accentClassName,
}: {
  lines: string[];
  accentClassName?: string;
}) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          <RichText text={line} accentClassName={accentClassName} />
        </Fragment>
      ))}
    </>
  );
}
