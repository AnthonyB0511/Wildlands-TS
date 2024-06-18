import Banner from "../components/Banner"
import Triple from "../components/Triple"
import wind from "../assets/img-wind/wind.webp"
import windOne from "../assets/img-wind/wind1.webp"
import windTwo from "../assets/img-wind/wind2.webp"
import windThree from "../assets/img-wind/wind3.webp"

const Wind = () => {
    return (
        <>
            <Banner
                title="La tête dans les nuages"
                backgroundImage={wind} />
            <Triple
                img1={windOne}
                img2={windTwo}
                img3={windThree}
                title1="SAUT A L'ELASTIQUE"
                title2="SIMULATEUR DE VOL"
                title3="BALLADE EN MONORAIL"
                text1="Vivez l'expérience ultime de l'adrénaline avec le saut à l'élastique extrême ! Un défi audacieux pour les amateurs de sensations fortes qui souhaitent repousser leurs limites et créer des souvenirs inoubliables."
                text2="ERessentez la liberté de voler comme un oiseau avec notre simulateur de vol en réalité virtuelle. Préparez-vous à une expérience immersive qui vous transportera vers des horizons infinis sans quitter le sol."
                text3="Préparez-vous à un voyage inoubliable en survolant notre parc avec le monorail. Embarquez pour un voyage vertigineux et découvrez le monde d'une perspective unique."
                bubble1="Un saut à 150m de haut"
                bubble2="Réservez votre créneau"
                bubble3="Une vue panoramique sur le parc" />
        </>
    )
}
export default Wind