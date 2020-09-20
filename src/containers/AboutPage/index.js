import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Button } from 'react-bootstrap';

import PButton from 'components/PButton';
import PMenu from 'components/PMenu';
import PPageWrapper from 'components/PPageWrapper';
import { Container, Row, Col } from 'react-bootstrap';


// const AboutPage = function() {
  
// }

// React Hook Example 
const AboutPage = (props) => { 
  return (
    <>
      <PPageWrapper className="about-page">
        <PMenu />
        <Container className="central-section">
          <Row>
            <Col sm={12}>
              bakalım mavi gelmez insallah 
            </Col>
          </Row>
          
        </Container>
      </PPageWrapper>
    </>
  );
}

AboutPage.propTypes = {
  // propslaraın deger tiplarini tanımlamak icin kullanacagız 
  // 
};

export default AboutPage;



// Component 
// ui arayuz davranısı olarak 2 ayırcam 
// kapsayıcı arka plan rengi yada genel ozellik dagıtan 


// bootstrap https://getbootstrap.com/docs/4.5/layout/overview/