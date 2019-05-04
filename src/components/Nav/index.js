import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { StyledRow, StyledCol } from 'components/FlexBox';
import { H5, H3 } from 'components/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link  from "components/LinkHOC";
import LogoImg from './logo.png'

import AnchorLink from 'react-anchor-link-smooth-scroll'


const MobileNav = styled.div `
	margin-top: auto;
	background-color: white;
	z-index: 100000;
	height: 100%;
	width: 100vw;
	position: absolute;
	top: 0;
	padding: 0px;
	margin:0px;
	text-align: center;
	@media (min-width: ${props => props.theme.screenSize.tablet}) {
		display: none
	};

	${props => {
		if (props.open) return css`
			background-color: white;
		`;
		return css`
			display: none;
		`;
	}};
	`;

const Navigation = styled.div`
${props => {
	if (props.absolute) return css`
		position: absolute !important;
	`;
}};
	${props => {
		if (props.transparent) return css`
			background-color: transparent;
		`;
		return css`
			background-color: white;
		`;
	}};
	${props => {
		if (props.open) return css`
			display: none;
		`;
	}};
	// background-color: rgba(255, 0, 0, 0.3);	top; 0;
	margin-top: 0px !mportant;
	height: 50px;
	top: 0;
	margin-left: 40px;
	position: absolute;
	width: 90%;
	z-index: 1000;
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		height: 20px;
	}
`;

const NavLinkContainer = styled(StyledCol)`
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		display: none
		padding: 0px;
	  `;
	  
const NavLink = styled(H5)`
	font-size: 20px;
	font-weight: 500;
	text-align: right;
	color: white;
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		display: none
	`;

const NavLinkMobile = styled(H3)`
	line-height:90px;
	padding: 0px;
	:hover {
		cursor: pointer
	}
	`;

const IconContainer = styled(H5)`
	line-height: 20px;
	font-size: 20px !important;
	display: none;
	text-align: right;
	:hover {
		cursor: pointer
	}
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		display: block;
		margin-top: 20px;
		margin-right: 20px;
		font-size: 40px;

	};
	`;

const Logo = styled.img`
	width: 150px;
	height: auto;
	margin-top: 20px;
	
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		margin-top: 20px;
	}

`;
const Hamburger = styled(StyledCol)`
	padding: 20px;
	color: white;
	`;


const Nav = ({ transparent, className }) => {
	const [toggle, setToggle]  = useState(false)

	

	return (
		<div className={className} >
			<MobileNav open={toggle}>
				<StyledRow>
					<StyledCol  onClick={ () => setToggle(!toggle)} xs={12}>
						<AnchorLink href='#palvelumme'>
							<NavLinkMobile>Palvelumme</NavLinkMobile>
						</AnchorLink>
					</StyledCol >
					<StyledCol  onClick={ () => setToggle(!toggle)} xs={12}>
						<AnchorLink href='#meista'>
							<NavLinkMobile>Meistä</NavLinkMobile>
						</AnchorLink>
					</StyledCol >
					<StyledCol  onClick={ () => setToggle(!toggle)} xs={12}>
						<AnchorLink href='#ota-yhteytta'>
							<NavLinkMobile>Ota yhteyttä</NavLinkMobile>
						</AnchorLink>
					</StyledCol >
					
					
					<StyledCol  onClick={ () => setToggle(!toggle)} xs={12}>
						<NavLinkMobile bold>Close <FontAwesomeIcon icon="times"/></NavLinkMobile>
					</StyledCol >
				</StyledRow>
			</MobileNav>
			<Navigation  transparent={transparent} open={toggle}>
				<StyledRow>
					<StyledCol xs={7} sm={3} md={3} >
						<Link to="/" >
							<Logo src={LogoImg} />
						</Link>
					</StyledCol>
			
					<NavLinkContainer  md={3}>
						<AnchorLink href='#palvelumme'><NavLink>Palvelumme</NavLink></AnchorLink>
					</NavLinkContainer>
					<NavLinkContainer  md={3}>
						<AnchorLink href='#meista'><NavLink>Meistä</NavLink></AnchorLink>
					</NavLinkContainer>
					<NavLinkContainer  md={3}>
						<AnchorLink href='#ota-yhteytta'><NavLink>Ota yhteyttä</NavLink></AnchorLink>
					</NavLinkContainer>
					
					<Hamburger xs={5} sm={9} md={9}  open={toggle}>
						<IconContainer right>
							<FontAwesomeIcon icon="bars" onClick={ () => setToggle(!toggle)}/>
						</IconContainer>
					</Hamburger>
				</StyledRow>
			</Navigation>
		</div>

  )
}


  
export default Nav;
