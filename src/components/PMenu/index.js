import React, { useEfect, useState } from 'react';
import PropTypes from 'prop-types';

import MenuButton from './MenuButton';
import Menu from './Menu';
import MenuItem from './MenuItem';



const PMenu = (props) => {
  // useState(default deger ataması ) parantez icinde ilk deger tanımlaması saglar
  // return ettigi degerde bir dizi array ilk elemanı state degeri 
  // ikinci elemanı setState e karsılık gelecek state degerini set leyen fonksiyon  
  const [showMenu, setShowMenu] = useState(false);
  const [menuBgColor, setMenuBgColor] = useState('white');
  
  return (
    <>
      <MenuButton onClick={() => {
        console.log('menuye tıklandı');
        setShowMenu(!showMenu); //menu acmak icin sadece 
        console.log(showMenu);
        
      }}/>
      <Menu show={showMenu}>
        <MenuItem label="Home" to="" />
        <MenuItem label="About" to=""/>
        <MenuItem label="Resume" to="" />
        <MenuItem label="Portfolio" to="" />
        <MenuItem label="Contact" to="" />
      </Menu>
    </>
  );
}

PMenu.propTypes = {
  // propsların typeları eklenecek 
}

export default PMenu;



// https://tr.reactjs.org/docs/hooks-intro.html hooks lara giris 
// neden boyle bi sey gelistirilmis 
// motivasyon
// useState ve useEffect kullanımı bunlara goz atılacak ustteki linkten yakalnacak 