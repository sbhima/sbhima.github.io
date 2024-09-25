import styles from '../styles/home.module.css'


export default function Home() {

    return (
        <div className={styles.homeMain}>
            <h1 className={styles.homeTitle} >WELCOME</h1>
            <div className='titleBar' > </div>
            <p className={styles.homeFlavorText1} >We don't know what's at the edge of universe, but I'd like to imagine that my portfolio website is out there somewhere.</p>
            <p className={styles.homeFlavorText2} >Click the big red planet (the one that says "Start Here!") to get started. (Feel free to drag around and zoom in and out, it's interactive).</p>
        </div>
    )
}