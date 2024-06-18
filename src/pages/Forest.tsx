import Banner from "../components/Banner"
import Triple from "../components/Triple"
import forest from "../assets/img-forest/forest.webp"
import forestOne from "../assets/img-forest/forest1.webp"
import forestTwo from "../assets/img-forest/forest2.webp"
import forestThree from "../assets/img-forest/forest3.webp"

const Forest = () => {
    return (
        <>
            <Banner
                title="Au coeur de la forêt"
                backgroundImage={forest} />
            <Triple
                img1={forestOne}
                img2={forestTwo}
                img3={forestThree}
                title1="ACCROBRRANCHE"
                title2="RANDONNEES"
                title3="PROMENADES A CHEVAL"
                text1="Vivez l’aventure au sommet !
                Grimpez, sautez, glissez !
                Vivez une aventure inoubliable dans les arbres. Accrobranche, l'activité qui fait monter l'adrénaline !"
                text2="Explorez la nature à pied !
                Découvrez la beauté de la nature lors de nos randonnées en forêt.
                Rejoignez-nous dès maintenant pour une escapade revitalisante au cœur de la nature."
                text3="Laissez-vous transporter par la magie de la nature lors de nos promenades à cheval.
                Découvrez la forêt d'une manière unique et élégante en compagnie de nos chevaux."
                bubble1="Plus grande tyrolienne d'Europe"
                bubble2="Des parcours allant de 3km à 15km"
                bubble3="10 créneaux de promenade par jour" />
        </>
    )
}
export default Forest