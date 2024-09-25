import styles from "../styles/card.module.css"



export default function Card({img, title, flavor_text, img_width, img_height, left_spacing}) {
    return (
        <div className={styles.cardMain} style={{left: left_spacing}} >
            <h1 className={styles.cardTitle} >{title}</h1>
            <img src={img} alt="A picture on the about page"
             className={styles.cardImage} 
             height={img_height}
             width={img_width} />
             <p className={styles.cardFlavorText}>{flavor_text}</p>
        </div>
    )


}