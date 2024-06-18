import logo from "../assets/wildland-logo.svg"
import { NavLink } from "react-router-dom"
import styles from "./Header.module.scss"
import HeaderMobile from "./HeaderMobile"

const Header = () => {
    return (
        <>
            <HeaderMobile />
            <nav className={styles.header}>
                <ul>
                    <li><NavLink to="/"><img src={logo} alt="Logo Wildlands" /></NavLink></li>
                    <li><NavLink to="/Les-pieds-dans-l-eau">Les Pieds dans l'eau</NavLink></li>
                    <li><NavLink to="/Au-coeur-de-la-forêt">Au coeur de la forêt</NavLink></li>
                    <li><NavLink to="/La-tête-dans-les-airs">La tête dans les airs</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                    <li><NavLink to="/Billetterie">Billetterie</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Header