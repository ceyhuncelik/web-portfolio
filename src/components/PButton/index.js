import React, { Component } from 'react'

export default class index extends Component {
  render() {
    // propstakki parametreleri daha pratik kullanmak icin tanımladık 
    // yani altta ornegin colorfull icin uzun uzun 
    // this.props.colorfull yerine artık direk colofull kullanabiliyoruz alttaki satır sayesinde
    const { to, colorfull, text } = this.props;
 
    // burası best practice className props ekleme yontemi 
    // default empty array tanımlı bi parametre urettik 
    const tempClassName = [];
    
    // defaul olmasınıu istedigimiz bi tane className ekledik bu class butun buttonlarda olacak 
    tempClassName.push('btn-custom');


    // props olarak className verilmis ise onuda ekle dedik 
    tempClassName.push(this.props.className);
    

    // true false deger alan boolean bi props ile buttonun rengini degistirdik 
    if (colorfull) {
      tempClassName.push('btn-color');
    }
    return (
      <a onClick={this.props.onClick} href={to} className={tempClassName.join(' ')} data-section='about' >
        {text}
			</a>
    )
  }
}