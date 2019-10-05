import React, { Component } from "react";
import { Link } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import { sortBy } from "lodash";
import CharList from "./characterList";

import "./CharactersPage.css";

// https://www.timeout.com/london/film/star-wars-characters-list
class CharactersPage extends Component {
  state = {
    chars: CharList
  };

  render() {
    let { chars } = this.state;
    chars = sortBy(chars, ["rank"]);

    return (
      <div className="container">
        <br />
        <h1>Characters that we love...</h1>
        <div className="row">
          {chars.map((char, idx) => {
            return (
              <Link
                key={char.id}
                to={`${appRoutes.characters}/${char.id}`}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-12 CharContainer"
              >
                <img src={char.photo} alt={char.name} />
                <h5 className="CharName">{char.name}</h5>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CharactersPage;
