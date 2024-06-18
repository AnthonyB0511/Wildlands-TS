import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./NavMobile.module.scss";

type NavProps = {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
};

const NavMobile = ({ menuOpen, setMenuOpen }: NavProps) => {
    return (
        <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className={styles.navMobile}
        >
            <ul>
                <li><Link to="/" onClick={() => setMenuOpen(!menuOpen)}>Accueil</Link></li>
                <li><Link to="/Les-pieds-dans-l-eau" onClick={() => setMenuOpen(!menuOpen)}>Les Pieds dans l'eau</Link></li>
                <li><Link to="/Au-coeur-de-la-forêt" onClick={() => setMenuOpen(!menuOpen)}>Au coeur de la forêt</Link></li>
                <li><Link to="/La-tête-dans-les-airs" onClick={() => setMenuOpen(!menuOpen)}>La tête dans les airs</Link></li>
                <li><Link to="/Contact" onClick={() => setMenuOpen(!menuOpen)}>Contact</Link></li>
                <li><Link to="/Billetterie" onClick={() => setMenuOpen(!menuOpen)}>Billetterie</Link></li>
            </ul>
        </motion.nav>
    );
};

export default NavMobile;
