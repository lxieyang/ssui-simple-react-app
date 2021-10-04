import React from 'react';
import { Link } from 'react-router-dom';
import appRoutes from '../../shared/appRoutes';
import { sortBy } from 'lodash';
import movieList from './movieList';

// https://www.timeout.com/london/film/star-wars-characters-list
const MoviesPage = () => {
  const movies = sortBy(movieList, ['rank']);

  return (
    <div className='container'>
      <br />
      <h1>Star Wars Movies that we love...</h1>
      <div className='row'>
        {movies.map((movie) => {
          return (
            <Link
              key={movie.id}
              to={`${appRoutes.movies}/${movie.id}`}
              className='col-lg-4 col-md-6 col-sm-12 EntryContainer'
            >
              <img src={movie.photo} alt={movie.name} />
              <h5 className='EntryName'>{movie.name}</h5>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesPage;
