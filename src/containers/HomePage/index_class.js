import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Button } from 'react-bootstrap';

import PButton from 'components/PButton';
// import PButton from './../components/PButton';

export default class index extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
    return (
      <div>
        <PButton className="asd" colorfull={true} text={'Discover More'} to={'/'} />
        <PButton text={'Hire Me'} to={'/'} />
        <PButton colorfull text={'Hire Me'} to={'/'} />
        <PButton colorfull  text={'Hire 123'} to={'/'} />
        <PButton text={'Hire weqrwe'} to={'/'} />
        <PButton text={'Hire Me'} to={'/'} />
        <PButton text={'wertwert Me'} to={'/'} />
        <PButton text={'Hire Me'} to={'/'} />
        <PButton colorfull  text={'Hire Me'} to={'/'} />
        <PButton text={'Hirwertwerte Me'} to={'/'} />
        <PButton text={'Hire Me'} to={'/'} />
        <PButton text={'Hire Me'} to={'/'} />
        <PButton colorfull  text={'Hteryertire Me'} to={'/'} />
        <PButton text={'Hirertyerte Me'} to={'/'} />
        <PButton text={'Hire Me'} to={'/'} 
          onClick={() => {
            alert('Aybikemi ben Cok seviyorum iyiki var o <3<3<3<3<3<3<3');
          }}
        />
      </div>
    )
  }
}


// home page sayfası icin yavastaqn calısmalara baslayalım 

// 