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
import Fade from 'react-reveal/Fade';

const Logos = styled(LogoGrid)`
    min-width: 100%;
    overflow-x: scoll;
    overflow-y: hidden;
    white-space: nowrap;
    margin-left: auto;
    margin-right: auto;
    -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */
`;

const ListItem = styled.li `
	font-size: 25px;
	font-weight: 500;
	font-family: Raleway, sans-serif;
	margin-top: 20px;
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
        font-size: 18px;
    }

`;



const Home = () => {
  return (
    <div>
		<Fade>  
			<Hero />
		</Fade>
		<div id='palvelumme'></div>

		<Card 
			image={'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'}
			topic={'Digitaalinen design edellä.'}
			ingress={'Yrityksesi digipalvelut ovat suora kosketuspinta asiakkaisiisi. Siksi pelkkä teknologia ei riitä.'}
			// body={'Designaamme aina digiprojektit ja suunnittelemme niistä tarkat käyttöliittymäkuvat ennen varsinaista toteutusta.'}
		>
		<ul>
			<ListItem>
				Palvelumuotoilu ja käyttäjälähtöinen suunnittelu
			</ListItem>
			<ListItem>
				UX ja käyttöliittymäsuunnittelu
			</ListItem>
			<ListItem>
				Digitaalisen suunnittelun prosessit ja yhteistyö teknisen toteutuksen kanssa
			</ListItem>
		</ul>
		</Card>

		<div id='meista'></div>
		<Card 
			right
			image={'https://images.unsplash.com/photo-1506634309436-b622418a97b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'}
			topic={'Millä teknologialla koodaamme?'}
			ingress={'Käytämme viimeisimpiä - ja parhaiksi havaittuja teknologioita kuten React.js sekä Contentful.'}
			// body={'Viimeisimmät teknologiat edellä valmistelemme yrityksesi kertaheitolla uuteen aikaan. Käytämme koodamiseen React.js kieltä ja sisällönhallintajärjestelmänä toimii esimerkiksi Contentful.'}
		>
				<ul>
			<ListItem>
				React.js ja modernit Java Script sovellukset
			</ListItem>
			<ListItem>
				Modernit web -sovellukset ja Contentful
			</ListItem>
			<ListItem>
				DevOps, verkko-osoitteiden hankinta ja dokumentointi.
			</ListItem>
		</ul>
		</Card>
		<Card 
			image={'https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'}
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
