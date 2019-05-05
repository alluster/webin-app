import React, { Component } from 'react';
import { P, H1, H2, H3, H4, H5, H6 } from 'components/Typography';
import { StyledRow, StyledCol  } from 'components/FlexBox';
import {Button} from 'components/Button';
import styled from 'styled-components';



	

const Grid = ({children, content}) => {

        return (
            <StyledRow>
                {
                    content.map.map(function(child, i) {
                        return (
                            <StyledCol key={i}>
                                {children}
                            </StyledCol>    
                        );
                    })
                }
            </StyledRow>
    )
}

						

export default Grid;