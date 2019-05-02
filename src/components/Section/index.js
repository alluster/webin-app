import React from 'react';
import styled from 'styled-components';
import { H6, H1, H2, H5,  H4 } from 'components/Typography';
import Container from 'components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledRow, StyledCol  } from 'components/FlexBox';

const Content = styled.div`
    color: ${props => props.theme.colors.white};
    background-color: #0F7280;
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
    text-align: right;
    align-self: flex-end;
    margin-left: auto
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        display: none
    }`
const Name = styled(H4)`
line-height: 10px;
margin-top: 0px
@media (max-width: ${props => props.theme.screenSize.tablet}) {
    text-align: center
}`
const Position = styled(H4)`
line-height: 10px;
@media (max-width: ${props => props.theme.screenSize.tablet}) {
    text-align: center
}`
const Email = styled(H4)`
line-height: 10px;
@media (max-width: ${props => props.theme.screenSize.tablet}) {
    text-align: center
}`
const Phone = styled(H4)`
line-height: 10px;
@media (max-width: ${props => props.theme.screenSize.tablet}) {
    text-align: center
}`

;
const Section = () =>
    <div>
        <Content>
            <Container>
                <TextContainer>
                    <H1 light bold>Ota yhteyttä!</H1>
                    <H2 light >Suunnitellaan yhdessä uusi projekti!</H2>

                </TextContainer>

                <StyledRow >

                    <StyledCol   mdOffset={3} xs={12} sm={12} md={3} lg={3}>
                        <ProfileImage src='https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/10356345_625753394174801_4909397701096970187_n.jpg?_nc_cat=108&_nc_ht=scontent-arn2-1.xx&oh=dc72b780cd62254184337f5be1d38c98&oe=5D712D4A' />
                    </StyledCol>
                    <StyledCol xs={12} sm={12} md={6} lg={6}>
                    <CardText >
                        <Name bold light>Aleksanteri Heliövaara</Name>
                        <Position  light>Sales / Creative Director</Position>
                        {/* <Email  light>	<FontAwesomeIcon icon="envelope" /> info@webin.fi</Email> */}
                        <Phone  light><FontAwesomeIcon icon="phone" /> +358442360403</Phone>
                    </CardText>
                    </StyledCol>
                </StyledRow>
                  
            </Container>
        </Content>
    </div>;

export default Section;
