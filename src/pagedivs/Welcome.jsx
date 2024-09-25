import styles from '../styles/welcome.module.css'

import shivank_sitting from '../media/shivank-cherry-blossoms-sitting-medium.jpeg'
import shivank_iribe from '../media/shivank-iribe-better-large.jpeg'



export default function Welcome() {
    return (
        <div className={styles.welcomeMain}>
            <h1 className={styles.hello} >Hello!</h1>
            
            <p className={styles.flavorText} >
                My name is Shivank Bhimavarapu, and I'm a junior majoring in 
                Math and CS at UMD College Park. I'm a web dev enthusiast
                and I'm pasionate for machine learning and data science.
                <br></br>
                <br></br>
                I wanted to find a space beyond social media to express myself, 
                and a personal website was the perfect place to do so. 
                <br></br>
                <br></br>
                Feel free to look around the rest of the website by clicking the 
                "Home" button above. And please please PLEASE check out the 
                devlopers to in the "Contact" section, this wesbite would've 
                 been impossible without them, so huge thanks to them.
            </p>

            <img src={shivank_sitting} alt="Shivank sitting under cherry blossoms" className={styles.shivankSitting}
                width={0.1*3024} height={0.1*4032}/>

            <img src={shivank_iribe} alt="Shivank at Great Falls " className={styles.shivankIribe}
                width={0.100*2428} height={0.115*3607}/>

        </div>
    )
}