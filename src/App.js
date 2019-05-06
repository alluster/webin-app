import React, { Component } from 'react';
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import Home from './views/Home';

import Nav from './components/Nav'



import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'


library.add(faBars, faTimes, faEnvelope, faPhone)

const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0px;
        padding: 0px;
        max-width: 100% !important;
        // border: red solid 1px;
        // overflow-x: hidden;
        
    }
    h1 {
        margin: 0
    }

    img {
        max-width: 100%;
    }
    *:focus {outline:none}
    a {
        all: unset;
    }
    * { -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }
    a:link {
        all: unset;
    }
    a:focus {
        all: unset;
    }
    a:active {
        all: unset;
    }
    a:visited {
        all: unset;
    }
    a:hover {
        all: unset;
    }
    a:href {
        all: unset;
    }
    button {
        all: unset;

    }
`;

class App extends Component {

  render() {

    return (
        <ThemeProvider theme={theme}>
            <Router>
            <Nav transparent />

                    <Route path="/" exact component={Home} user/>
                   

                <GlobalStyle />
            </Router>
        </ThemeProvider>

    );
  }
}


export default App