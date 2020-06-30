import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Button } from 'react-bootstrap';

import PButton from 'components/PButton';
import PMenu from 'components/PMenu';
import PPageWrapper from 'components/PPageWrapper';
import { Container, Row, Col } from 'react-bootstrap';


// const HomePage = function() {
  
// }

// React Hook Example 
const HomePage = (props) => { 
  return (
    <>
      <PPageWrapper className="home-page">
        <PMenu />
        <Container className="central-section">
          <Row>
            <Col sm={12}>
              <h1 className="huge-header"> Ceyhun CELİK </h1>
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <p className="description"> A Software Developer </p>
            </Col>
          </Row>

          <Row>
            <Col sm={{ span: 3, offset: 3}}>
              <PButton className="float-right mt-4" colorfull={false} text={'Discover More'} to={'/'} />
            </Col>

            <Col sm={{ span: 3, }}>
              <PButton className="mt-4" text={'Hire Me'} to={'/'} />
            </Col>
          </Row>

          
          
        </Container>
      </PPageWrapper>
    </>
  );
}

HomePage.propTypes = {
  // propslaraın deger tiplarini tanımlamak icin kullanacagız 
  // 
};

export default HomePage;



// Component 
// ui arayuz davranısı olarak 2 ayırcam 
// kapsayıcı arka plan rengi yada genel ozellik dagıtan 


// bootstrap https://getbootstrap.com/docs/4.5/layout/overview/