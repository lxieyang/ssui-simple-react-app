import React from 'react';
import { useParams } from 'react-router';
import movieList from '../movieList';

const MoviePage = () => {
  const { id } = useParams();
  const movie = movieList.filter((mov) => mov.id === id)[0];
  const { name, photo, releaseDate, synopsis } = movie;

  return (
    <div className='container'>
      <br />
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <img style={{ width: '100%' }} src={photo} alt={name} />
        </div>
        <div className='col-lg-8 col-md-6 col-sm-12'>
          <h1 className='EntryName'>{name}</h1>
          <p className='KeylineContainer'>{releaseDate}</p>
          <br />
          <br />

          <h4>Synopsis</h4>
          {synopsis}
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
