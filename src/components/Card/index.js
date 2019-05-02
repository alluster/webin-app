import React, { Component } from 'react';
import { P, H1, H2, H3, H4, H5, H6 } from 'components/Typography';
import { StyledRow, StyledCol  } from 'components/FlexBox';
import {Button} from 'components/Button';
import styled from 'styled-components';


const Text = styled.div`
	margin-left: 20px;
	height: auto;
	padding: 60px;

`;
const ImageContainer = styled.div`
	background-position: cover;  
	background-color: black;
	height: 500px;
`;
const Image = styled.img`
	object-fit: cover;  
	min-height: 100%;
	height: 500px !important;
	width: 100%;
	opacity: 0.7;

`;

const ProfileButton = styled(Button)`
	margin-top: 15px;
	margin-bottom: auto;
`;
const InfoCard = (props) =>{
	return(
			<div>
					{
						props.right ?
							<StyledRow>
								<StyledCol  xs={6} sm={6} md={6} lg={6}>
										<ImageContainer>
											<Image src={props.image} />
										</ImageContainer>
									</StyledCol >

									<StyledCol  xs={6} sm={6} md={6} lg={6}>
										<Text >
											<H1 bold>{props.topic}</H1>
											<H5>{props.body}</H5>
										</Text>
								</StyledCol >
							</StyledRow>
							:
							<StyledRow>
								<StyledCol  xs={6} sm={6} md={6} lg={6}>
									<Text >
										<H1 bold>{props.topic}</H1>
										<H5>{props.body}</H5>
									</Text>
								</StyledCol >
								<StyledCol  xs={6} sm={6} md={6} lg={6}>
									<ImageContainer>
										<Image src={props.image} />
									</ImageContainer>
								</StyledCol >
							</StyledRow>
					}
			</div>
						

	)
}


  

export default InfoCard;