import { useEffect, useRef } from 'react';
import styles from './scss/Home.module.scss';
import photoPresentation from '../assets/img-home/home2.webp';
import Triple from '../components/Triple';
import wind from '../assets/img-home/home3.webp'
import water from '../assets/img-home/home4.webp'
import forest from '../assets/img-home/home6.webp'


const Home = () => {
    const presentationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (presentationRef.current) {
                const rect = presentationRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    presentationRef.current.classList.add(styles.visible);
                }
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    console.log("hello world")
    return (
        <>
            <div className={styles.banner}>
                <h1>Wildlands</h1>
                <div className={styles.line}></div>
                <div className={styles.subTitle}>
                    <p>
                        Des sensations <span className={styles.animatedText}>plus</span> ou <span className={styles.animatedTwoText}>moins</span> fortes
                    </p>
                    <p>pour toute la famille</p>
                </div>
            </div>
            <section className={styles.presentation} ref={presentationRef}>
                <img src={photoPresentation} alt="Photo de présentation du parc" />
                <div className={styles.textPresentation}>
                    <h2>Bienvenue dans notre parc</h2>
                    <div className={styles.line}></div>
                    <p>
                        Découvrez un lieu où la nature et les attractions se rejoignent harmonieusement. Explorez des paysages enchanteurs et profitez de sensations fortes, ou pas. Une expérience inoubliable vous attend, entre biodiversité et divertissement. Venez vivre l'aventure dès maintenant.
                    </p>
                </div>
            </section>
            <Triple
                img1={forest}
                img2={water}
                img3={wind}
                title1="Découvrir nos activités en forêt"
                title2="Plongez dans nos activités aquatiques"
                title3="Allez dans les airs"
                text1="Rejoignez-nous pour une aventure en plein cœur de la nature ! Nos activités en forêt sont conçues pour tous les âges et niveaux. Profitez de randonnées guidées, d'ateliers de survie, et de parcours d'accrobranche dans un cadre verdoyant et serein. Échappez à la routine, ressourcez-vous en plein air, et vivez des expériences inoubliables en explorant la beauté sauvage de nos forêts. Que vous soyez un passionné de la nature ou simplement en quête de détente, nous avons quelque chose pour vous !"
                text2="Venez découvrir nos activités aquatiques et vivez des moments rafraîchissants et excitants ! Que vous soyez amateur de sensations fortes ou en quête de détente, nous avons quelque chose pour vous. Profitez de nos séances de paddle, de kayak, de plongée sous-marine, et bien plus encore. Explorez des paysages marins magnifiques, défiez les vagues, ou détendez-vous simplement au bord de l'eau. Rejoignez-nous pour une aventure aquatique inoubliable et laissez-vous emporter par la magie de l'eau."
                text3="Envie d'évasion et d'aventure ? Explorez notre gamme d'activités passionnantes pour tous les goûts ! Ressentez l'excitation du saut à l'élastique, prenez les commandes dans notre simulateur de vol, admirez les paysages depuis un monorail suspendu, ou vivez une expérience sereine en montgolfière. Que vous cherchiez des sensations fortes ou une aventure plus douce, nous avons de quoi satisfaire toutes vos envies. Rejoignez-nous pour des moments inoubliables et des souvenirs uniques !"
                bubble1="Comme de l'accrobranche"
                bubble2="Comme du rafting"
                bubble3="Saut à l'élastique" />
        </>
    );
};

export default Home;
