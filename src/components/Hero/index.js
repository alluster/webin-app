import React, { Component } from 'react';
import styled from 'styled-components';
import {Button} from '../Button';
import Wrapper from 'components/Wrapper'
import { H1, H5 } from '../Typography';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Container = styled.div`
	height: 100vh;
	position: relative;
`;

const Overlay = styled.div`
	// background-color: black;
	opacity: 0.5;
	position: absolute;
	top: 0;
	height: 100%;
	width: 100%;
	z-index: -1;
`;
const ContentBlock = styled(Wrapper)`
	padding: 20px;
	max-width: 90%;
	margin-left: auto;
	margin-right: auto;
	left: 50%;
    transform: translate(-50%, -0%);
	position: absolute;
	top: 20vh;
	// height: 100vh;
	text-align: center;
	z-index: 2;
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		width: 100vw;
		margin-left
	}
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	position: relative;
	top: 0;
	object-fit: cover;
	margin: 0px;
	padding: 0px;
	z-index: -1;
	box-sizing: border-box;
`;

class Hero extends Component {
  render() {
	return (
		<Container>
			<Image src="https://images.unsplash.com/photo-1547191516-45e9e58822db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
			<ContentBlock >
		
				<H1 bold light  >Verkkosivut yrityksellesi</H1>
				<H5 bold light secondary >Suunnittelemme ja toteutamme yrityksesi digin uusimmilla teknologioilla.</H5>
				<AnchorLink href='#palvelumme'>
					<Button  large primary >Lue lisää</Button>
				</AnchorLink>
			</ContentBlock>
			<Overlay />
		</Container>
	)
  }
};

export default Hero;
