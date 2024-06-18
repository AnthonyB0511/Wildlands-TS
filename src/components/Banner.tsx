type BannerProps = {
    title: string;
    backgroundImage: string
}
import styles from "./Banner.module.scss"
const Banner = ({ title, backgroundImage }: BannerProps) => {
    const style = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '10vh',
        borderRadius: '5px',
        color: '#fff',
        textAlign: 'center' as const
    }; return (

        <div style={style}>
            <h1 className={styles.title}>{title}</h1>
        </div>
    )
}
export default Banner