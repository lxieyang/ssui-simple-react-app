import React from "react";
import { useParams } from "react-router";
import charList from "../characterList";

const CharacterPage = () => {
  const { id } = useParams();
  const char = charList.filter(char => char.id === id)[0];
  const { name, photo, keyline, who, why } = char;

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img style={{ width: "100%" }} src={photo} alt={name} />
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12">
          <h1>{name}</h1>
          <div>
            <strong>Keyline:</strong> {keyline}
          </div>
          <br />

          <h4>Who?</h4>
          {who.map((p, idx) => {
            return <p key={idx}>{p}</p>;
          })}
          <h4>Why?</h4>
          {why.map((p, idx) => {
            return <p key={idx}>{p}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
