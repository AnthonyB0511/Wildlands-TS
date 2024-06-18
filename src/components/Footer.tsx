import styles from "./Footer.module.scss"
import logo from "../assets/wildland-logo.svg"
import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.section}>
                <img src={logo} alt="logo Wildlands" />
                <div className={styles.contact}>
                    <i className="fa-solid fa-phone"></i>
                    <p>00 00 00 00 00</p>
                </div>
                <div className={styles.contact}>
                    <i className="fa-solid fa-envelope"></i>
                    <p>contact@wildlands.com</p>
                </div>
                <div className={styles.contact}>
                    <i className="fa-solid fa-location-pin"></i>
                    <p>100 rue de la rue 07000 Ville</p>
                </div>
            </section>
            <section className={styles.section}>
                <nav>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/Les-pieds-dans-l-eau">Les Pieds dans l'eau</Link></li>
                        <li><Link to="/Au-coeur-de-la-forêt">Au coeur de la forêt</Link></li>
                        <li><Link to="/La-tête-dans-les-airs">La tête dans les airs</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/Billetterie">Billetterie</Link></li>
                    </ul>
                </nav>
            </section>
            <section className={styles.section}>
                <p>
                    Vous pouvez nous suivre sur :
                </p>
                <div className={styles.reseaux}>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-x-twitter"></i>
                </div>
            </section>
        </footer>
    )
}

export default Footer