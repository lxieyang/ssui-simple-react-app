import React from 'react';
import { Link } from 'react-router-dom';
import appRoutes from '../../shared/appRoutes';
import { sortBy } from 'lodash';
import characterList from './characterList';

// https://www.timeout.com/london/film/star-wars-characters-list
const CharactersPage = () => {
  const chars = sortBy(characterList, ['rank']);

  return (
    <div className='container'>
      <br />
      <h1>Characters that we love...</h1>
      <div className='row'>
        {chars.map((char) => {
          return (
            <Link
              key={char.id}
              to={`${appRoutes.characters}/${char.id}`}
              className='col-xl-3 col-lg-4 col-md-6 col-sm-12 EntryContainer'
            >
              <img src={char.photo} alt={char.name} />
              <h5 className='EntryName'>{char.name}</h5>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CharactersPage;
