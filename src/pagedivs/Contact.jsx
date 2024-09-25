import styles from '../styles/contact.module.css'

export default function Contact() {
    return (
        <div className={styles.contactMain}>
            <h1 className={styles.title} >Reach Out!</h1>
            <p className={styles.contactText}>Email me at: shivank.bhimavarapu@gmail.com</p>
            <p className={styles.contactText}>View my projects on my <a href="https://github.com/sbhima" target='_blank' >Github</a></p>
            <p className={styles.contactText}>Connect with me on <a href="https://linkedin.com/in/sbhima" target='_blank' >LinkedIn</a></p>

            <p className={styles.flavorText} >Huge props to the following developers and creators. I owe much of this website to them:

                <br></br><br></br>

                 - Everyone on the <a href="https://github.com/pmndrs" target='_blank'>Poimandres</a> team
                  for createing the underlying React 3 Fiber (R3F) and Drei libraries for the 3D modeling and animations that went into this.
                
                <br></br><br></br>
                 - <a href="https://medium.com/@dilums" target='_blank'>
                     Dilum</a> for creating the base model of this solar system.

                <br></br><br></br>
                 - <a href="https://github.com/drcmda" target="_blank">drcmda</a> for providing many helpful tutorials and Code Sandboxes for R3F and Drei.
            </p>
        </div>
    )
}