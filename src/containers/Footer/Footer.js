import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import appRoutes from '../../shared/appRoutes';
import Logo from '../../assets/imgs/star-wars-logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <Container className='Footer'>
      <hr />
      <div className='LogoContainer'>
        <Link to={appRoutes.home}>
          <img src={Logo} alt='logo' />
        </Link>
      </div>
      <br />
      <div className='SourceContainer'>
        Information adapted from{' '}
        <a
          href='https://en.wikipedia.org/wiki/Star_Wars'
          target='_blank'
          rel='noopener noreferrer'
        >
          https://en.wikipedia.org/wiki/Star_Wars
        </a>
      </div>
      <div className='SourceContainer'>
        Information adapted from{' '}
        <a
          href='https://www.timeout.com/london/film/star-wars-characters-list'
          target='_blank'
          rel='noopener noreferrer'
        >
          https://www.timeout.com/london/film/star-wars-characters-list
        </a>
      </div>
    </Container>
  );
};

export default Footer;
