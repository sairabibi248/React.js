import { useState } from "react";

function BackgroundChanger() {
  const [color, setColor] = useState("olive");

  return (
    <div className="main-container" style={{ backgroundColor: color }}>
      <div className="button-container">
        <button
          onClick={() => setColor("cadetblue")}
          className="btn"
          style={{ backgroundColor: "cadetblue" }}
        >
          cadetblue
        </button>

        <button
          onClick={() => setColor("turquoise")}
          className="btn"
          style={{ backgroundColor: "turquoise" }}
        >
          turquoise
        </button>

        <button
          onClick={() => setColor("crimson")}
          className="btn"
          style={{ backgroundColor: "crimson" }}
        >
          crimson
        </button>

        <button
          onClick={() => setColor("olive")}
          className="btn"
          style={{ backgroundColor: "olive" }}
        >
          Olive
        </button>
        <button
          onClick={() => setColor("Black")}
          className="btn"
          style={{ backgroundColor: "Black" }}
        >
          Black
        </button>

        <button
          onClick={() => setColor("darkcyan")}
          className="btn"
          style={{ backgroundColor: " darkcyan" }}
        >
          darkcyan
        </button>
        <button
          onClick={() => setColor("orchid")}
          className="btn"
          style={{ backgroundColor: " orchid" }}
        >
          orchid
        </button>
      </div>
    </div>
  );
}

export default BackgroundChanger;
