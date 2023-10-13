import React from 'react';
import Card from '../Card/Card.jsx'
import styles from './Cards.module.css'

export default function Cards({cities, onClose}) {
  // acá va tu código

  //estado de carta activa
  let Cards
  if(cities){
    Cards = cities.map((el)=>{
      
      return(
        <Card max={el.max} min={el.min} name={el.name} img={el.img} key={el.id} id={el.id} onClose={onClose}/>
      )
    })
  }else{
    console.log('No cities seen')
  }
  return (
    <div className={styles.cards}>
      {Cards}
    </div>
  )
};