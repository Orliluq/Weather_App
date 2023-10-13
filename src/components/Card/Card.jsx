import React from 'react';
import styles from './Card.module.css'
import {NavLink} from 'react-router-dom'

export default function Card({max,min,name,img,onClose,id}) {

  //estado
  // const [active, setActive]=useState(true)

  // const onClose = () =>{
  //   setActive(!active)
  // }
  // acá va tu código
   let url = `http://openweathermap.org/img/wn/${img}@2x.png`
  return(
    <div className={`${styles.indCard}`}>
      
      <h2>{name}</h2>
      <button onClick={()=>onClose(id,name)} className={styles.btn}>X</button>
      
      
      <div className={styles.info}>
    <div className={styles.imgContainer}> 
      <img className={styles.img} src={url} alt=''></img>
    </div>  
        <div className={styles.temps}>
          <div className={styles.minmax}>
            <strong><p className={styles.p}>MAX: {Math.round(min)}°</p></strong>
            {/* <p className={clases.p}><b>{Math.round(min)}°</b></p> */}
          </div>
          <div className={styles.minmax}>
          <strong><p className={styles.p}>MIN: {Math.round(max)}°</p></strong>
            {/* <p className={clases.p}><b> {Math.round(max)}°</b></p> */}
          </div>
        </div>
      </div> 
      <button className={styles.details}>
          <NavLink className={styles.link} to={`/ciudad/${id}`}>Ver más detalles</NavLink>
        </button>    
    </div>
  ) 
};