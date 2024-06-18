import Banner from "../components/Banner"
import Triple from "../components/Triple"
import banner from "../assets/img-water/water.webp"
import tripleOne from "../assets/img-water/water1.webp"
import tripleTwo from "../assets/img-water/water2.webp"
import tripleThree from "../assets/img-water/water3.webp"
const Water = () => {
    return (
        <>
            <Banner
                title="Les pieds dans l'eau"
                backgroundImage={banner} />
            <Triple
                img1={tripleOne}
                img2={tripleTwo}
                img3={tripleThree}
                title1="CANYONING"
                title2="RAFTING"
                title3="CANOE"
                text1="Le canyoning est une activité passionnante qui combine randonnée, escalade, nage et descente en rappel dans les canyons naturels. C'est une expérience unique pour découvrir des paysages magnifiques et relever des défis palpitants."
                text2="Le rafting consiste à descendre des rivières tumultueuses à bord d'un radeau pneumatique. Équipé d'un gilet de sauvetage, d'un casque et d'une pagaie, vous pagayez en équipe pour naviguer à travers les rapides. Avec différents niveaux de difficulté, le rafting offre des sensations fortes tout en respectant les règles de sécurité."
                text3="Le canoë est une activité nautique calme et paisible pratiquée sur les lacs, les rivières et les étangs. Il implique la navigation à l'aide d'un canoë propulsé par une pagaie. On peut l'utiliser pour la randonnée, la pêche, le camping ou la compétition."
                bubble1="Possibilité d'être accompagné"
                bubble2="Différents niveaux de difficultés"
                bubble3="Plus de 15 km2 de lac à parcourir" />

        </>
    )
}
export default Water