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
    // bakground-color: ${props => props.theme.colors.white}
    // position: relative;
    // z-index: 100 !important;
    // margin: 10px;
    // width: 255px;
    // margin-bottom: 100px;
    // display: inline-block;
    // vertical-align: top;
    // :hover {
    //     cursor: pointer;
    // }
    // @media (max-width: ${props => props.theme.screenSize.tablet}) {
    //    margin: 10px;
    //    margin-bottom: 10px;
    //    min-height: 100px;

    // }
`;

	
 
const logos = [
                {url: "https://www.grant4com.fi/wp-content/themes/grant4com/images/logo.png"},
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
        <StyledCol>
            
        </StyledCol>

        
    );
})
        }
        </StyledRow>
        
    )
}

						


  

export default LogoGrid;