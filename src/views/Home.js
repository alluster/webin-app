import React from 'react';
import styled from 'styled-components';
import Hero from 'components/Hero';
import Nav from 'components/Nav';
import Container from 'components/Container';
import { H1, H2, H3 } from 'components/Typography'
import Footer from 'components/Footer'
import { Row, Col } from 'react-flexbox-grid';
import { Button } from 'components/Button';
import Card from 'components/Card'
import Section from 'components/Section'
import LogoGrid from '../components/LogoGrid';

const Logos = styled(LogoGrid)`
    min-width: 100%;
    overflow-x: scoll;
    overflow-y: hidden;
    white-space: nowrap;
    margin-left: auto;
    margin-right: auto;
    -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */
`;



const Home = () => {
  return (
    <div>
		<Hero />
		<div id='palvelumme'></div>
		<Card 
			image={'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'}
			topic={'Digitaalinen design edellä.'}
			ingress={'Yrityksesi digipalvelut ovat suora kosketuspinta asiakkaisiisi. Siksi pelkkä teknologia ei riitä.'}
			body={'Designaamme aina digiprojektit ja suunnittelemme niistä tarkat käyttöliittymäkuvat ennen varsinaista toteutusta.'}
		/>
		<div id='meista'></div>
		<Card 
			right
			image={'https://images.unsplash.com/photo-1482745637430-91c0bbcea3e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'}
			topic={'Millä teknologialla koodaamme?'}
			ingress={'Käytämme viimeisimpiä - ja parhaiksi havaittuja teknologioita kuten React.js sekä Contentful.'}
			body={'Viimeisimmät teknologiat edellä valmistelemme yrityksesi kertaheitolla uuteen aikaan. Käytämme koodamiseen React.js JavaScriptiä ja sisällönhallintajärjestelmänä toimii esimerkiksi Contentful.'}
		/>
		<Card 
			image={'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80'}
			topic={'Ylläpito vaivattomasti'}
			ingress={'Päivitykset ja muutostoiveet käden käänteessä'}
			body={'On tärkeää huolehtia siitä, että palvelu pysyy hyvin turvassa ja sisältö on kohdillaan. Digikumppanina hoidamme digipalvelua myös sen julkaisun jälkeen.'}
		/>
		<div id='ota-yhteytta'></div>
		<Logos />
		<Section />
    </div>

  
  );
  
}

  


export default Home;
