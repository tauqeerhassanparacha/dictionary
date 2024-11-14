import { useState } from "react";
import "./Definations.css";
const Definations = ({ word, meanings, category, lightMode }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
          style={{ backgroundColor: "#fff", borderRadius: "10px" }}
        >
          {/* Your browser doesnt support audio! */}
        </audio>
      )}
      {word === "" ? (
        <span className="subtitle">Start by typing a word in search.</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singlemean"
                style={{
                  backgroundColor: lightMode ? "#3b5360" : "white",
                  color: lightMode ? "white" : "black",
                }}
              >
                <b>Defination: {def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />

                {def.example && (
                  <span>
                    <b>Example: </b>
                    {def.example}
                  </span>
                )}
                <br />
                {def.synonyms && (
                  <span>
                    <b>Synonyms: </b>
                    {def.synonyms}
                    {console.log(def.synonyms)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definations;
