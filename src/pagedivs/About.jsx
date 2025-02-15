import styles from '../styles/about.module.css'

import shenandoah_view from "../media/shenandoah_view.jpeg"
import georgetown_view from "../media/georgetown_view.jpeg"
import shivank_band from "../media/shivank-senior-band.jpg"
import salaar_poster from "../media/salaar-poster.jpg"
import set_your_heart_ablaze from "../media/set-your-heart-ablaze.jpeg"


export default function About() {
    return (
        <div className={styles.aboutMain} >

            <h1 className={styles.aboutTitle} >About Me</h1>

            <div className={styles.gallery}>
                <div className={styles.firstItem} >
                    <div className={styles.leftSide}>
                        <h1 className={styles.itemTitle} >Photography</h1>
                        <p className={styles.flavorText} >While I wouldn't call myself a professional photographer, I do enjoy taking pictures. Figuring out the perfect lighting, angle, and setting is a fun challanege for me.<br></br><br></br> I mostly take pictures of nature, trying my best to capture the tranquility of the world around us into a small rectangle. Here's some of my favorite shots from Shenandoah and Georgetown. </p>
                    </div>
                    <div className={styles.leftSide}>
                        <img src={shenandoah_view} alt="A picture of the valley"
                            className={styles.galleryImage}
                            height={1536*0.1335}
                            width={2730*0.1335}
                            style={{marginTop: "1.5rem",marginLeft: "6.4rem"}}
                            />
                        <img src={georgetown_view} alt="A picture of georgetown"
                            className={styles.galleryImage}
                            height={3024*0.09}
                            width={4032*0.09}
                            style={{marginTop: "-0.7rem",marginLeft: "6.4rem"}}
                            />
                    </div>
                </div>

                <div className={styles.galleryItem} >
                    <div className={styles.leftSide}>
                        <h1 className={styles.itemTitle} >Music</h1>
                        <p className={styles.flavorText} >I first fell in love with instrumental music in high school when I joined marching band. I've been playing Tuba for 5 years now, and I'm a fan of all forms of instrumental music - Big Band, Jazz, Classical, DCI - I love them all.<br></br><br></br> I'm also starting to pick up new intruments too! Inspired by Rach 2 and Tchaikovsky Piano Concertos, I'm learning piano with the help of a few friends. </p>
                    </div>
                    <div className={styles.leftSide}>
                        <img src={shivank_band} alt="A picture of me in band"
                            className={styles.galleryImage}
                            height={1694*0.25}
                            width={1136*0.25}
                            style={{marginTop: "4.1rem",marginLeft: "10.1rem"}}
                            />
                    </div>
                </div>

                <div className={styles.galleryItem} >
                    <div className={styles.leftSide}>
                        <h1 className={styles.itemTitle} >Tollywood</h1>
                        <p className={styles.flavorText} >Tollywood is the major film industry in South India. I wasn't the biggest fan of the movies or music as a kid, but as I've gotten older, I've really taken a liking to it. In fact, my favorite movie is Salaar (even if part 2 hasn't been released yet...).<br></br><br></br> I've also started listening to more music from the industry; my Tollywood playlist is probably my most played playlist on my phone.  </p>
                    </div>
                    <div className={styles.leftSide}>
                        <img src={salaar_poster} alt="A poster of Salaar"
                            className={styles.galleryImage}
                            height={5625*0.085}
                            width={3896*0.085}
                            style={{marginTop: "1.5rem",marginLeft: "7.9rem"}}
                            />
                    </div>
                </div>

                <div className={styles.galleryItem} >
                    <div className={styles.leftSide}>
                        <h1 className={styles.itemTitle} >Digital Art</h1>
                        <p className={styles.flavorText} >In college, I've finally found time to start creating digital art. While I haven't completed many projects yet, and each project takes a month or two, I still enjoy the process of trying to  give life to the things I draw. <br></br><br></br> Most of the inspirtation for my art comes from shows I've watched, but as I get more experienced I definitely want to start trying my hand at creating more original content. </p>
                    </div>
                    <div className={styles.leftSide}>
                        <img src={set_your_heart_ablaze} alt="A digital art piece"
                            className={styles.galleryImage}
                            height={2532*0.212}
                            width={1170*0.212}
                            style={{marginTop: "0rem",marginLeft: "9.9rem"}}
                            />
                    </div>
                </div>
            </div>



        </div>       

    )
}