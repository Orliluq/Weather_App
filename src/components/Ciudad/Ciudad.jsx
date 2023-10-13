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
                    <p className={styles.p}><span className={styles.cat}>Temperatura: </span>{city.temp} ºC</p>
                    <p className={styles.p}><span className={styles.cat}>Temperatura mínima: </span>{city.min}</p>
                    <p className={styles.p}><span className={styles.cat}>Temperatura máxima: </span>{city.max}</p>
                    <p className={styles.p}><span className={styles.cat}>Clima: </span>{city.weather}</p>
                    <p className={styles.p}><span className={styles.cat}>Viento: </span>{city.wind} km/h</p>
                    <p className={styles.p}><span className={styles.cat}>Cantidad de nubes: </span>{city.clouds}</p>
                    <p className={styles.p}><span className={styles.cat}>Latitud: </span>{city.latitud}º</p>
                    <p className={styles.p}><span className={styles.cat}>Longitud: </span>{city.longitud}º</p>
                </div>                  
            </div>
        </div>
    )
}