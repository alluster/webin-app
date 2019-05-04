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




const Home = () => {
  return (
    <div>
		<Hero />
		<div id='palvelumme'></div>
		<Card 
			image={'https://images.unsplash.com/photo-1500917832468-298fa6292e2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'}
			topic={'Teemmekö myös Designia?'}
			ingress={'Yrityksesi digipalvelut ovat suora kosketuspinta asiakkaisiisi. Siksi pelkkä teknologia ei riitä.'}
			body={'Designaamme aina digiprojektit ja suunnittelemme niistä tarkat käyttöliittymäkuvat ennen varsinaista toteutusta.'}
		/>
		<div id='meista'></div>
		<Card 
			right
			image={'https://images.unsplash.com/photo-1534232415158-eab00c88c5e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80'}
			topic={'Millä teknologialla koodaamme?'}
			ingress={'Käytämme viimeisimpiä - ja parhaiksi havaittuja teknologioita kuten React.js sekä Contentful.'}
			body={'Viimeisimmät teknologiat edellä valmistelemme yrityksesi kertaheitolla uuteen aikaan. Käytämme koodamiseen React.js JavaScriptiä ja sisällönhallintajärjestelmänä toimii esimerkiksi Contentful.'}
		/>
		<Card 
			image={'https://images.unsplash.com/photo-1505433178243-4eed56f9f3a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'}
			topic={'Ylläpito vaivattomasti'}
			ingress={'Päivitykset ja muutostoiveet käden käänteessä'}
			body={'Teemme digipalveluista parhaamme mukaan ilman sen suurempaa ylläpitoa toimivat. On kuitenkin tärkeää huolehtia siitä, että palvelu pysyy hyvin turvassa ja sisältö on kohdillaan. Digikumppanina luonnollisesti hoidamme myös digipalvelua sen julkaisun jälkeen.'}
		/>
		<div id='ota-yhteytta'></div>
		{/* <LogoGrid /> */}
		<Section />
    </div>

  
  );
  
}

  


export default Home;
