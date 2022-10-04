import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router';
import movieList from '../movieList';

const MoviePage = () => {
  const { id } = useParams();
  const movie = movieList.filter((mov) => mov.id === id)[0];
  const { name, photo, releaseDate, synopsis } = movie;

  return (
    <Container>
      <br />
      <Row>
        <Col lg={4} md={6} sm={12}>
          <img style={{ width: '100%' }} src={photo} alt={name} />
        </Col>
        <Col lg={8} md={6} sm={12}>
          <h1 className='EntryName'>{name}</h1>
          <p className='KeylineContainer'>{releaseDate}</p>
          <br />
          <h4>Synopsis</h4>
          {synopsis}
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
