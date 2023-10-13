import styles from './About.module.css'
import Logo from '../../img/orli-avatar.png'
import imgNav from './About.module.css'

export default function About(props){
    return(
        <div>
            <div className={styles.container}>
                <h1 className={styles.h1}>¿Cómo se encuentra el clima el día de hoy?</h1>
                <p><span> Es una app del </span>clima en tiempo real, que permite acceder a datos climáticos de ciudades y países en todo el mundo.
Solo tienes que escribir la ciudad o país que buscas y hacer click en agregar, y aparecerá una tarjeta con los datos básicos, si deseas más información solo haz click en ver más detalles.
</p>
                
                <div>
                    <img className={imgNav} src={Logo} alt="orli-avatar" width="50" height="50" />
                </div>
                <div>
                    <p> Hecho con Tecnología: HTML, CSS, Javascript, y React.</p>
                </div>
            </div>
        </div>
    )
};