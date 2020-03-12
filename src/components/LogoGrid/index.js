import React, { Component } from 'react';
import { P, H1, H2, H3, H4, H5, H6 } from 'components/Typography';
import { StyledRow, StyledCol  } from 'components/FlexBox';
import {Button} from 'components/Button';
import styled from 'styled-components';
import Grid from 'components/Grid'
const Container = styled.div`
	min-height: auto;
`
const Logo = styled.img`
    position: relative;
    z-index: 100 !important;
    margin: 10px;
    width: 255px;
    margin-bottom: 100px;
    display: inline-block;
    vertical-align: top;
    :hover {
        cursor: pointer;
    }
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
       margin: 10px;
       margin-bottom: 10px;
       min-height: 100px;

    }
`;

	
 
const logos = [
                {url: "https://www.google.com/maps/uv?hl=en&pb=!1s0x4681cd56075f6139%3A0x3d96420d65fd7b07!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipM73O9UxlS9j0ZYO7Slb2cs7hVd6KGKhmLKc8DJ%3Dw288-h288-k-no!5sgrant4com%20-%20Google%20Search!15sCAQ&imagekey=!1e10!2sAF1QipM73O9UxlS9j0ZYO7Slb2cs7hVd6KGKhmLKc8DJ&sa=X&ved=2ahUKEwiFsZept4PoAhUSjosKHcxKAJ8QoiowDXoECBQQBg#"},
                {url: "https://www.grant4com.fi/wp-content/themes/grant4com/images/logo.png" },
                {url: "https://www.grant4com.fi/wp-content/themes/grant4com/images/logo.png"},
                {url: "https://www.grant4com.fi/wp-content/themes/grant4com/images/logo.png" },
                {url: "https://www.grant4com.fi/wp-content/themes/grant4com/images/logo.png"},
                {url: "https://www.grant4com.fi/wp-content/themes/grant4com/images/logo.png" }
            ]

const LogoGrid = () => {

    return (
        <StyledRow>
        {
  logos.map(function(logo, i) {
    return (
        <StyledCol key={i}>
            <Logo src={logo.url} /> 
        </StyledCol>

        
    );
})
        }
        </StyledRow>
        
    )
}

						


  

export default LogoGrid;