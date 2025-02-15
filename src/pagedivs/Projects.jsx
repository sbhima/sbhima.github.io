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

            {/* <div className={styles.cardHolder}>
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
            

            </div> */}
            <div className={styles.gallery}>
                <div className={styles.firstItem} >
                    <div className={styles.leftSide}>
                        <h1 className={styles.itemTitle} >All Thyme Recipes</h1>
                        <p className={styles.flavorText} >At HackUMBC 2024, we created <a target="_blank" href="https://devpost.com/software/all-thyme-recipes">All Thyme Recipes</a>, a meal prep and budgeting app designed to help people save money and reduce food waste. Simply tell us what ingredients you have and when you bought them, and we'll AI to generate recipes that with the ingredients expiring the fastest.<br></br><br></br> We ended up winning best Health / Environment Hack and best Domain Name by GoDaddy amongst 100+ hackers!</p>
                    </div>
                    <div className={styles.leftSide}>
                        <img src={hack_umbc_pic} alt="A picture of the HackUMBC logo"
                            className={styles.galleryImage}
                            height={1664*0.11}
                            width={2560*0.18}
                            style={{marginTop: "1.5rem",marginLeft: "2.5rem"}}
                            />
                        <img src={all_thyme} alt="A picture on the about page"
                            className={styles.galleryImage}
                            height={1664*0.16}
                            width={2560*0.18}
                            style={{marginTop: "-1rem",marginLeft: "2.5rem"}}
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
                            height={4032*0.059}
                            width={3024*0.15}
                            style={{marginTop: "1.4rem",marginLeft: "3.4rem"}}/>
                        <img src={testudo_tracker_track_page} alt="A picture of our logo"
                            className={styles.galleryImage}
                            height={4032*0.0573}
                            width={3024*0.15}
                            style={{marginTop: "1.2rem",marginLeft: "3.5rem"}}/>
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
                                height={315}
                                width={315}
                                style={{marginTop: "7.6rem",marginLeft: "7.3rem"}}/>
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
                                height={315}
                                width={315}
                                style={{marginTop: "7.6rem",marginLeft: "7.3rem"}}/>
                        </div>
                </div>

            </div>
            
            {/* <h2 className={styles.resumeText} >Check out my <a href="https://drive.google.com/file/d/1PjOf4bmaaAXNWOOaJ2bqHdQYekhxFW_o/view?usp=sharing" target='_blank' >resume</a> for more info!</h2> */}

        </div>
    )
}