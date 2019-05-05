import React from 'react';
import styled from 'styled-components';
import { H6, H1, H2, H5,  H4 } from 'components/Typography';
import Container from 'components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledRow, StyledCol  } from 'components/FlexBox';

const Content = styled.div`
    color: ${props => props.theme.colors.white};
    background-color: #FF9700;
    width: 100%;
    height: 600px;
    font-family: 'Raleway', sans-serif;

    @media (max-width: ${props => props.theme.screenSize.tablet}) {
       height: 700px;

    }
`;

const TextContainer = styled.div`
    padding: 10px;
    text-align: center;
    padding-bottom: 40px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        text-align: center;
        transform: translate(0%, 0%);
        padding: 10px;
    }
`;

const CardText = styled.div`
    padding: 10px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        transform: translate(0%, 0%);
        padding: 10px;
    }
`;

const Logo = styled(H6) `
    text-align: center;
    `;

const ProfileImage = styled.img`
    max-height: 150px;
    border-radius: 100px;
    margin-left: auto
    display: none

    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        display: none
    }`;

const Name = styled(H4)`
    line-height: 10px;
    margin-top: 0px
    text-align: center;

    @media (max-width: ${props => props.theme.screenSize.laptop}) {
        text-align: center
    }`;

const Position = styled(H4)`
    line-height: 10px;
    text-align: center;

    @media (max-width: ${props => props.theme.screenSize.laptop}) {
        text-align: center
    }`;

const Email = styled(H4)`
    line-height: 10px;
    font-size: 18px;
    text-align: center;

    @media (max-width: ${props => props.theme.screenSize.laptop}) {
        text-align: center;
        font-size: 16px;
    }`;

const Phone = styled(H4)`
    line-height: 10px;
    text-align: center;

    @media (max-width: ${props => props.theme.screenSize.laptop}) {
        text-align: center;
        font-size: 16px;
    }`;

const Section = () =>
    <div>
        <Content>
            <Container>
                <TextContainer>
                    <H1 light bold>Ota yhteyttä!</H1>
                    <H2 light >Aloitetaan yhteistyö heti!</H2>

                </TextContainer>

                <StyledRow >

                    <StyledCol   xs={12} sm={12} md={2} lg={12}>
                        <ProfileImage src='https://media.licdn.com/dms/image/C5603AQFmq_mfpxiKLg/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=eY_2z4ey2rNs26UQ1fAHC_YSDGOVgWSfWtGB7RtHJ8I' />
                    </StyledCol>
                    <StyledCol xs={12} sm={12} md={12} lg={12}>
                    <CardText >
                        <Name bold light>Aleksanteri Heliövaara</Name>
                        {/* <Position  light>Sales / Creative Director</Position> */}
                        <Phone  light><FontAwesomeIcon icon="phone" /> +358442360403</Phone>
                        <Email  light>	<FontAwesomeIcon icon="envelope" />  verkkosivutyrityksellesi@gmail.com</Email>
                    </CardText>
                    </StyledCol>
                </StyledRow>
                  
            </Container>
        </Content>
    </div>;

export default Section;
