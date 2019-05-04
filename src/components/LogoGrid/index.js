import React, { Component } from 'react';
import { P, H1, H2, H3, H4, H5, H6 } from 'components/Typography';
import { StyledRow, StyledCol  } from 'components/FlexBox';
import {Button} from 'components/Button';
import styled from 'styled-components';

const Container = styled.div`
	min-height: auto;
`
const Logo = styled.img`


	`;
 
const logos = [
                {url: "https://www.grant4com.fi/wp-content/themes/grant4com/images/logo.png"},
                {url: "https://www.grant4com.fi/wp-content/themes/grant4com/images/logo.png" },
                {url: "https://www.grant4com.fi/wp-content/themes/grant4com/images/logo.png"},
                {url: "https://www.grant4com.fi/wp-content/themes/grant4com/images/logo.png" },
                {url: "https://www.grant4com.fi/wp-content/themes/grant4com/images/logo.png"},
                {url: "https://www.grant4com.fi/wp-content/themes/grant4com/images/logo.png" }
            ]

const LogoGrid = () => logos.map(function(logo, i) {
            return (
                <StyledCol 
                    xs={3}
                    sm={3}
                    md={3}
                    lg={3} 
                    key={i}
                >
                    <Logo  src={logo.url}/>
                </StyledCol>

                
            );
        });
						
// const LogoGrid = () => {
//     return (
//         <StyledRow>
//             {Grid}
//         </StyledRow>
//     )
// }

  

export default LogoGrid;