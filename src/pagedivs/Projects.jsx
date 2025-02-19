import styles from '../styles/projects.module.css'
import Card from '../components/Card'

import testudo_tracker_logo from "../media/tt_logo_2.jpeg"
import mario_image from "../media/mario.jpg"
import tj_logo from "../media/tj-logo-medium.jpeg"
import { Center } from '@react-three/drei'
import hack_umbc_pic from "../media/hack_umbc_pic.jpeg"
import all_thyme from "../media/all_thyme.jpg"
import testudo_tracker_homepage from "../media/testudo_tracker_ss.jpeg"
import testudo_tracker_track_page from "../media/tt_screenshot_2.jpeg"


export default function Projects() {
    return (

        <div className={styles.projectsMain}>
            <h1 className={styles.projectsTitle}>Recent Projects</h1>


            <div className={styles.gallery}>
                <div className={styles.firstItem} >
                    <div className={styles.leftSide}>
                        <h1 className={styles.itemTitle} >All Thyme Recipes</h1>
                        <p className={styles.flavorText} >At HackUMBC 2024, we created <a target="_blank" href="https://devpost.com/software/all-thyme-recipes">All Thyme Recipes</a>, a meal prep and budgeting app designed to help people save money and reduce food waste. Simply tell us what ingredients you have and when you bought them, and we'll AI to generate recipes that with the ingredients expiring the fastest.<br></br><br></br> We ended up winning best Health / Environment Hack and best Domain Name by GoDaddy amongst 100+ hackers!</p>
                    </div>
                    <div className={styles.leftSide}>
                        <img src={hack_umbc_pic} alt="A picture of the HackUMBC logo"
                            className={styles.galleryImage}
                            style={{marginTop: "1.5rem",marginLeft: "2.5rem",height: "auto", width: "30vw"}}
                            />
                        <img src={all_thyme} alt="A picture on the about page"
                            className={styles.galleryImage}
                            style={{marginTop: "-1rem",marginLeft: "2.5rem",height: "auto", width: "30vw"}}
                            />
                    </div>
                </div>

                <div className={styles.galleryItem} >
                    <div className={styles.leftSide}>
                        <h1 className={styles.itemTitle} >Testudo Tracker</h1>
                        <p className={styles.flavorText} ><a target="_blank" href="https://github.com/DaDevFox/testudo-tracker">Testudo Tracker</a> was born when I created a Python script to get out of a CMSC351 section with an...unpleasant reuptation. It worked for me, and my friends and I decided to share the wealth by creating an app with it in React.js, Next.js, and MongoDB.<br></br><br></br>Our app lets users track classes at UMD so that whenever an seat in the class opens up, they'll instantly get an email about it so they can sign up for the class before the spot is gone.</p>
                    </div>
                    <div className={styles.leftSide}>
                        <img src={testudo_tracker_homepage} alt="A picture of our logo"
                            className={styles.galleryImage}
                            style={{marginTop: "1.4rem",marginLeft: "3.4rem",height: "auto", width: "28vw"}}/>
                        <img src={testudo_tracker_track_page} alt="A picture of our logo"
                            className={styles.galleryImage}
                            style={{marginTop: "1.2rem",marginLeft: "3.5rem",height: "auto", width: "28vw"}}/>
                    </div>

                            

                </div>

                <div className={styles.galleryItem} >
                    <div className={styles.leftSide}>
                            <h1 className={styles.itemTitle} >ML with Mario</h1>
                            <p className={styles.flavorText} >Natural Language and Computer Vision are two incredibly popular fields in Machine Learning, but a field that's more often overlooked is Reinforcement Learning (RL).<br></br><br></br> This was odd to me since the math behind RL is fascinating and has so many uses. So, I decided to try my hand at it by creating a <a target="_blank" href="https://github.com/sbhima/Super-Mario-Bros-RL-with_PyTorch" >Mario AI</a> that learned how to play the game on it's own using Deep Q-Learning.</p>
                        </div>
                        <div className={styles.leftSide}>
                            <img src={mario_image} alt="A picture of our logo"
                                className={styles.galleryImage}
                                style={{marginTop: "7.6rem",marginLeft: "7.3rem",height: "auto", width: "22vw"}}/>
                        </div>
                </div>

                <div className={styles.galleryItem} >
                    <div className={styles.leftSide}>
                            <h1 className={styles.itemTitle} style={{fontSize:"3.0rem"}} >RRR: Revolutionizing Receipt Reading</h1>
                            <p className={styles.flavorText} >For my senior capstone project at TJ, I aimed to create an app that would help users with their finances using machine learning and computer vision. The app would scan shopping receipts with OpenCV, parse text using OCR and PyTesseract, and classify the items with machine learning.<br></br><br></br> I actually ended up learning more about high level ML system design than the specifics of every algorithm I used.</p>
                        </div>
                        <div className={styles.leftSide}>
                            <img src={tj_logo} alt="A picture of our logo"
                                className={styles.galleryImage}

                                style={{marginTop: "7.6rem",marginLeft: "7.3rem",height: "auto", width: "22vw"}}/>
                        </div>
                </div>

            </div>
            
            {/* <h2 className={styles.resumeText} >Check out my <a href="https://drive.google.com/file/d/1PjOf4bmaaAXNWOOaJ2bqHdQYekhxFW_o/view?usp=sharing" target='_blank' >resume</a> for more info!</h2> */}

        </div>
    )
}