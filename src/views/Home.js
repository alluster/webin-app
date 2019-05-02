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




const Home = () => {

  return (
    <div>
		<Hero />
		<div id='palvelumme'></div>
		<Card 
			image={'https://images.unsplash.com/photo-1500917832468-298fa6292e2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'}
			topic={'Design osaaminen'}
			body={'Yrityksesi verkkosivut toimivat käyntikorttina ja suorana kosketuspintana asiakkaisiisi. Me varmistamme designerimme toimesta että sivujesi design on toiveittesi mukainen.'}
		/>
				<div id='meista'></div>

		<Card 
				

			right
			image={'https://images.unsplash.com/photo-1534232415158-eab00c88c5e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80'}
			topic={'Teknologia'}
			body={'Viimeisimmät teknologiat edellä siirrämme yrityksesi kertaheitolla uuteen aikaan. Käytämme sivujen koodamiseen React.js JavaScriptiä ja sisällönhallintajärjestelmänä toimii Contentful.'}
		/>
		<Card 
			image={'https://images.unsplash.com/photo-1505433178243-4eed56f9f3a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'}
			topic={'Ylläpito vaivattomasti'}
			body={'Teemme sivustoista parhaamme mukaan ilman sen suurempaa ylläpitoa toimivat. Sillion tällöin on kuitenkin hyvä huolehtia siitä että sivusto pysyy hyvin turvassa ja sisältö on kohdillaan. Näihin hetkiin tarjoamme apuamme suunnittelu ja toteutustyön jälkeen.'}
		/>
						<div id='ota-yhteytta'></div>

		<Section />
		{/* <Footer /> */}
    </div>

  
  );
  
}

  


export default Home;
