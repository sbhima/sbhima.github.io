import styles from '../styles/welcome.module.css'

import shivank_sitting from '../media/shivank-cherry-blossoms-sitting-medium.jpeg'
import shivank_shenandoah from '../media/shivank-shenandoah.jpg'



export default function Welcome() {
    return (
        <div className={styles.welcomeMain}>
            <div className={styles.leftDiv}>
                <h1 className={styles.hello} >Hello!</h1>
                
                <p className={styles.flavorText} >
                    My name is Shivank Bhimavarapu, and I'm a junior majoring in 
                    Math and CS at UMD College Park. I'm a web dev enthusiast
                    and I'm passionate for machine learning and data science.
                    <br></br>
                    <br></br>
                    I wanted to find a space beyond social media to express myself, 
                    and a personal website was the perfect place to do so. 
                    <br></br>
                    <br></br>
                    Feel free to look around the rest of the website by clicking the 
                    "Home" button above. And please please PLEASE check out the 
                    developers in the "Contact" section, this website would've 
                    been impossible without them, so huge thanks to them.
                </p>
            </div>

            <div className={styles.middleDiv}>
            <img src={shivank_sitting} alt="Me sitting under cherry blossoms in DC" className={styles.shivankSitting}
                width="100%" height="100%"/>
            </div>

            <div className={styles.rightDiv}>
            <img src={shivank_shenandoah} alt="Experiencing a beautiful sunset at Shenandoah National Park " className={styles.shivankShenandoah}
                />
            </div>

        </div>
    )
}