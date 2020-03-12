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
	font-size: 16px;
	font-weight: 300;
	font-family: Raleway, sans-serif;
	margin-top: 10px;
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
			image={'./phone-webin.png'}
			topic={'Vuosien kokemus digitaalisten palveluiden UX/UI -suunnittelussa.'}
			ingress={'Yrityksesi digitaaliset palvelut ovat suora asiakasrajapinta. Pelkkä teknologiaymmärrys ei riitä, vaan palvelut on suunniteltava asiakaslähtöisesti.'}
			// body={'Designaamme aina digiprojektit ja suunnittelemme niistä tarkat käyttöliittymäkuvat ennen varsinaista toteutusta.'}
		>
		<ul>
			<ListItem>
				Käyttäjälähtöinen suunnittelu
			</ListItem>
			<ListItem>
				UX ja UI -suunnittelu
			</ListItem>
			<ListItem>
				Digitaalisen suunnittelun prosessit ja yhteistyö teknisen toteutuksen kanssa
			</ListItem>
		</ul>
		</Card>

		<div id='meista'></div>
		<Card 
			right
			image={'./phone-heart.png'}
			topic={'Digipalveluiden kehittämisen viimeisimmät työkalut käytössä.'}
			ingress={'Digipalveluiden tärkeimpiä ominaisuuksia käytettävyyden lisäksi ovat helppo ylläpito ja korkea ROI. Käytämmekin viimeisimpiä hyviksi havaittuja teknologioita kuten React.js, next.js, node.js sekä Contentful. Näiden teknologioiden käyttö varmistaa kehityksen jatkumisen ja matalan kynnyksen päivitykset palveluihin.'}
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
			image={'./phone-update.png'}
			topic={'Ylläpito vaivattomasti'}
			ingress={'Päivitykset ja muutostoiveet käden käänteessä'}
			body={'On tärkeää huolehtia siitä, että palvelu pysyy hyvin turvassa ja sisältö on kohdillaan. Digikumppanina hoidamme digipalvelua myös sen julkaisun jälkeen.'}
		/>

		<div id='ota-yhteytta'></div>
		<Footer />
    </div>
  );
  
}

  


export default Home;
