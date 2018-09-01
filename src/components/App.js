import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './global/Header';
import Nav from './global/Nav';
import Footer from './global/Footer';



class App extends Component {
    static propTypes={
        children:PropTypes.object.isRequired
    }

  render() {
     const {children} = this.props;
      return (
        <div className="App">
            <Header/>
            <Nav/>  
            <div>{children}</div>
            <Footer/>
        </div>
      );
    
  }
}

export default App;
