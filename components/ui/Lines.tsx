import { Fragment } from "react";

/** Merender array string sebagai baris-baris yang dipisah <br />. */
export default function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </>
  );
}

