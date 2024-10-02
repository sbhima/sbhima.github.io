import styles from '../styles/projects.module.css'
import Card from '../components/Card'

import testudo_tracker_logo from "../media/testudo-tracker-logo-medium.jpeg"
import mario_image from "../media/mario.jpg"
import tj_logo from "../media/tj-logo-medium.jpeg"


export default function Projects() {
    return (
        <div className={styles.projectsMain}>
            <h1 className={styles.projectsTitle}>Recent Projects</h1>

            <div className={styles.cardHolder}>
                <Card img={testudo_tracker_logo} 
                title={"Testudo Tracker"}
                flavor_text={"Testudo Tracker was born when I created a Python script to get out of a CMSC351 section with an...unpleasant reuptation. It worked for me, and my friends and I decided to share the wealth by creating an app with it in React.js, Next.js, and MongoDB.\n\nOur app lets users track classes at UMD so that whenever an seat in the class opens up, they'll instantly get an email about it so they can sign up for the class before the spot is gone."}
                img_width={0.095*3024}
                img_height={0.0275*4032}
                left_spacing={"5rem"} />

                <Card img={mario_image} 
                title={"Reinforcement Learning with Mario"}
                flavor_text={"Natural Language and Computer Vision are two incredibly popular fields in Machine Learning, but a field that's more often overlooked is Reinforcement Learning (RL). This was odd to me since the math behind RL is fascinating and has so many uses. So, I decided to try my hand at it by creating a Mario AI that learned how to play the game on it's own using Deep Q-Learning."}
                img_width={0.062*3024}
                img_height={0.046*4032}
                left_spacing={"34rem"} />

                <Card img={tj_logo} 
                title={"Revolutionizing Receipt Reading"}
                flavor_text={"For my senior capstone project at TJ, I aimed to create an app that would help users with their finances using machine learning and computer vision. The app would scan shopping receipts with OpenCV, parse text using OCR and PyTesseract, and classify the items with machine learning. I actually ended up learning more about high level ML system design than the specifics of every algorithm I used."}
                img_width={0.055*3024}
                img_height={0.04*4032}
                left_spacing={"64rem"} />
            

            </div>
            
            <h2 className={styles.resumeText} >Check out my <a href="https://drive.google.com/file/d/1PjOf4bmaaAXNWOOaJ2bqHdQYekhxFW_o/view?usp=sharing" target='_blank' >resume</a> for more info!</h2>

        </div>
    )
}