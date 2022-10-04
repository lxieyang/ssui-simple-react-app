import React from 'react';
import { sortBy } from 'lodash';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import appRoutes from '../../shared/appRoutes';
import characterList from './characterList';

// https://www.timeout.com/london/film/star-wars-characters-list
const CharactersPage = () => {
  const chars = sortBy(characterList, ['rank']);

  return (
    <Container>
      <br />
      <h1>Characters that we love...</h1>
      <Row>
        {chars.map((char) => {
          return (
            <Col
              key={char.id}
              tag={Link}
              to={`${appRoutes.characters}/${char.id}`}
              xl={3}
              lg={4}
              md={6}
              sm={12}
              className='EntryContainer'
            >
              <img src={char.photo} alt={char.name} />
              <h5 className='EntryName'>{char.name}</h5>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CharactersPage;
