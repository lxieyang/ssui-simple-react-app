import React from 'react';
import { useParams } from 'react-router';
import { Container, Row, Col } from 'reactstrap';
import charList from '../characterList';

const CharacterPage = () => {
  const { id } = useParams();
  const char = charList.filter((char) => char.id === id)[0];
  const { name, photo, keyline, who, why } = char;

  return (
    <Container>
      <br />
      <Row>
        <Col lg={4} md={6} sm={12}>
          <img style={{ width: '100%' }} src={photo} alt={name} />
        </Col>
        <Col lg={8} md={6} sm={12}>
          <h1 className='EntryName'>{name}</h1>
          <p className='KeylineContainer'>{keyline}</p>
          <br />
          <h4>Who?</h4>
          {who.map((p, idx) => {
            return <p key={idx}>{p}</p>;
          })}
          <h4>Why?</h4>
          {why.map((p, idx) => {
            return <p key={idx}>{p}</p>;
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default CharacterPage;
