import React, { Component } from 'react';
import { P, H1, H2, H3, H4, H5, H6 } from 'components/Typography';
import { StyledRow, StyledCol  } from 'components/FlexBox';
import {Button} from 'components/Button';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Container = styled(Fade)`
max-height: 750px;

`
const Text = styled.div`
	margin-left: 20px;
	height: 100%;
	padding: 60px;
		@media (max-width: ${props => props.theme.screenSize.tablet}) {
		padding: 10px;}
`;

const ImageContainer = styled.div`
	background-color: black;
	max-height: 100%;
	width: 100%;
	object-fit: cover;



`;
const Image = styled.img`
	opacity: 0.7;
	max-height: 100%;
	width: 100%;
	object-fit: cover;

`;

const InfoCard = (props) =>{
	return(
			<Container>
					{
						props.right ?
							<StyledRow>
								<StyledCol  xs={12} sm={12} md={6} lg={6}>
										{/* <ImageContainer> */}
											<Image src={props.image} />
										{/* </ImageContainer> */}
									</StyledCol >

								<StyledCol  xs={12} sm={12} md={6} lg={6}>
										<Text >
											<H1 bold>{props.topic}</H1>
											<H4 bold>{props.ingress}</H4>
											<H5>{props.body}</H5>
											{props.children}
										</Text>
								</StyledCol >
							</StyledRow>
							:
							<StyledRow>
								<StyledCol  xs={12} sm={12} md={6} lg={6}>
									<Text >
										<H1 bold>{props.topic}</H1>
										<H4 bold>{props.ingress}</H4>
										<H5>{props.body}</H5>
										{props.children}

									</Text>
								</StyledCol >
								<StyledCol  xs={12} sm={12} md={6} lg={6}>
									<ImageContainer>
										<Image src={props.image} />
									</ImageContainer>
								</StyledCol >
							</StyledRow>
					}
			</Container>
						

	)
}


  

export default InfoCard;