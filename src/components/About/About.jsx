import styles from './About.module.css'
import Logo from '../../img/orli-avatar.png'

export default function About(props){
    return(
        <div>
            <div className={styles.container}>
                <h1 className={styles.h1}>How is the weather today?</h1>
                <p><span> It is an app of </span>real-time weather, which allows access to climate data from cities and countries around the world.
                You just have to write the city or country you are looking for and click on add, and a card will appear with the basic information. If you want more information, just click on see more details.
</p>
                
                <div>
                    <img className={styles.imgNav} src={Logo} alt="orli-avatar" width="100" height="100" />
                </div>
                <div>
                    <p> Made with Technologies: HTML, CSS, Javascript and React.</p>
                </div>
            </div>
            <p>&copy; {new Date().getFullYear()} Copyright © 2023 Orlidev. All Rights Reserved <sup>❤️</sup></p>
        </div>
    )
};