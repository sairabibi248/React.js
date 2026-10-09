import { useState, useMemo } from "react";
import "./Bots-search.css";

function BotSearch() {
  const [searchBot, setBot] = useState("");
  const bots = ["Gemini", "ChatGPT", "Claude", "DeepSeek", "GenAI"];

  const filterbots = useMemo(() => {
    return bots.filter((bots) =>
      bots.toLowerCase().includes(searchBot.toLowerCase()),
    );
  }, [searchBot]);

  return (
    <>
      <div className="bot-search-container"></div>
      <h1> Search Your AIBots</h1>
      <input
        className="bot-search-input"
        type="text"
        placeholder="Search Bots..."
        value={searchBot}
        onChange={(e) => setBot(e.target.value)}
      />

      <ul className="bot-list">
        {filterbots.length > 0 ? (
          filterbots.map((Bots, index) => (
            <li key={index} className="bot-item">
              {Bots}{" "}
            </li>
          ))
        ) : (
          <p>No results match your search!</p>
        )}
      </ul>
    </>
  );
}

export default BotSearch;
