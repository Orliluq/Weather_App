import styles from './Ciudad.module.css'
import React from 'react'

export default function Ciudad({city}){
    let url = `http://openweathermap.org/img/wn/${city.img}@2x.png`
    return(
        <div className={styles.ciudad}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h2 className={styles.name}>{city.name}</h2>
                </div>
                <div className={styles.imgInfo}>
                 <img className={styles.img} src={url} alt="" />
                </div>
                <div className={styles.info}>
                    <p className={styles.p}><span className={styles.cat}>Temperature: </span>{city.temp} ºC</p>
                    <p className={styles.p}><span className={styles.cat}>Minimum temperature: </span>{city.min}</p>
                    <p className={styles.p}><span className={styles.cat}>Maximum temperature: </span>{city.max}</p>
                    <p className={styles.p}><span className={styles.cat}>Climate: </span>{city.weather}</p>
                    <p className={styles.p}><span className={styles.cat}>Wind: </span>{city.wind} km/h</p>
                    <p className={styles.p}><span className={styles.cat}>Cloud quantity: </span>{city.clouds}</p>
                    <p className={styles.p}><span className={styles.cat}>Latitude: </span>{city.latitud}º</p>
                    <p className={styles.p}><span className={styles.cat}>Length: </span>{city.longitud}º</p>
                </div>                  
            </div>
        </div>
    )
}