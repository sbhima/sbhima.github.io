import styles from '../styles/about.module.css'

import shivank_beach from "../media/shivank-lands-end-medium.jpeg"
import shivank_band from "../media/shivank-senior-band.jpg"
import salaar_poster from "../media/salaar-poster.jpg"
import digital_art from "../media/shivank-art.jpeg"

import Card from '../components/Card'

export default function About() {
    return (
        <div className={styles.aboutMain} >

            <h1 className={styles.aboutTitle} >About Me</h1>

            <div className={styles.cardHolder}>
                <Card img={shivank_beach} 
                title={"Photography"}
                flavor_text={"While I wouldn't call myself a professional photographer, I do enjoy taking pictures. Figuring out the perfect lighting, angle, and setting is a fun challanege for me. Here's one of my favorite shots from Lands End in California. "}
                img_width={0.085*3024}
                img_height={0.085*4032}
                left_spacing={"1rem"} />

                <Card img={shivank_band} 
                title={"Music"}
                flavor_text={"I first fell in love with instrumental music in high school when I joined marching band. I've been playing Tuba for 5 years now, and I'm a fan of all forms of instrumental music - Big Band, Jazz, Classical, DCI - I love them all."}
                img_width={0.085*3024}
                img_height={0.085*4032}
                left_spacing={"22rem"}
                />


                <Card img={salaar_poster} 
                title={"Tollywood"}
                flavor_text={"Tollywood is the major film industry in South India. I wasn't the biggest fan of the movies or music as a kid, but as I've gotten older, I've really taken a liking to it. In fact, my favorite movie is Salaar (even if part 2 hasn't been made yet...). "}
                img_width={0.085*3024}
                img_height={0.085*4032}
                left_spacing={"44rem"}
                />

                <Card img={digital_art} 
                title={"Digital Art"}
                flavor_text={"In college, I've finally found time to start creating digital art. While I haven't completed many projects yet, I still enjoy the process of giving life to the things I draw. I also want to start trying out other forms of media, like canvas art."}
                img_width={0.085*3024}
                img_height={0.085*4032}
                left_spacing={"66rem"}
                />

            </div>

        </div>       

    )
}