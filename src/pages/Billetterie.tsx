import Wip from "./Wip"
import { SimpleSlider } from "../components/Carrousel/SimpleSlider"
import { useState, useEffect } from "react"
import styles from "../pages/scss/Bil.module.scss"

const Billetterie = () => {
    const [placeParcAdult, setPlaceParcAdult] = useState(0)
    const [placeParcChild, setPlaceParcChild] = useState(0)
    const [nbArticle, setNbArticle] = useState(0)
    const [price, setPrice] = useState(0)
    const [nbNights, setNbNights] = useState(0);
    const [nbHotel, setNbHotel] = useState(0)
    const [nbHamacs, setNbHamacs] = useState(0)
    const [nbTentes, setNbTentes] = useState(0);
    const [nbChalets, setNbChalets] = useState(0);
    const [nbBulles, setNbBulles] = useState(0);
    const [verify, setVerify] = useState("")
    const PRICE_ADULT = 50;
    const PRICE_CHILD = 35;
    const PRICE_HOTEL_NIGHT = 75;
    const PRICE_HAMAC_NIGHT = 25;
    const PRICE_CHALET_NIGHT = 250;
    useEffect(() => {
        // Recalculer le prix total
        const totalPrice =
            (placeParcAdult * PRICE_ADULT) +
            (placeParcChild * PRICE_CHILD) +
            (nbNights * ((nbHotel + nbBulles) * PRICE_HOTEL_NIGHT +
                (nbHamacs + nbTentes) * PRICE_HAMAC_NIGHT +
                nbChalets * PRICE_CHALET_NIGHT));
        setPrice(totalPrice);
    }, [placeParcAdult, placeParcChild, nbNights, nbHotel, nbBulles, nbHamacs, nbTentes, nbChalets]);

    let date = Date.now()

    const addPlaceAdult = () => {
        setPlaceParcAdult(placeParcAdult + 1)
        setNbArticle(nbArticle + 1)
    }
    const soustractPlaceAdult = () => {
        setPlaceParcAdult(placeParcAdult - 1)
        setNbArticle(nbArticle - 1)
    }
    const addPlaceChild = () => {
        setPlaceParcChild(placeParcChild + 1)
        setNbArticle(nbArticle + 1)

    }
    const soustractPlaceChild = () => {
        setPlaceParcChild(placeParcChild - 1)
        setNbArticle(nbArticle - 1)
    }
    const moreNights = () => {
        setNbNights(nbNights + 1);
    }
    const lessNights = () => {
        setNbNights(nbNights - 1)
    }
    const moreHotel = () => {
        setNbHotel(nbHotel + 1)
        if (nbNights > 0) {
            setNbArticle(nbArticle + 1)
        }

    }
    const lessHotel = () => {
        setNbHotel(nbHotel - 1)
        if (nbNights > 0) {
            setNbArticle(nbArticle - 1)
        }
    }
    const moreBulle = () => {
        setNbBulles(nbBulles + 1)
        if (nbNights > 0) {
            setNbArticle(nbArticle + 1)
        }
    }
    const lessBulle = () => {
        setNbBulles(nbBulles - 1)
        if (nbNights > 0) {
            setNbArticle(nbArticle - 1)
        }

    }
    const moreHamacs = () => {
        setNbHamacs(nbHamacs + 1)
        if (nbNights > 0) {
            setNbArticle(nbArticle + 1)
        }
    }
    const lessHamacs = () => {
        setNbHamacs(nbHamacs - 1)
        if (nbNights > 0) {
            setNbArticle(nbArticle - 1)
        }
    }
    const moreTentes = () => {
        setNbTentes(nbTentes + 1)
        if (nbNights > 0) {
            setNbArticle(nbArticle + 1)
        }
    }
    const lessTentes = () => {
        setNbTentes(nbTentes - 1)
        if (nbNights > 0) {
            setNbArticle(nbArticle - 1)
        }
    }
    const moreChalets = () => {
        setNbChalets(nbChalets + 1)
        if (nbNights > 0) {
            setNbArticle(nbArticle + 1)
        }
    }
    const lessChalets = () => {
        setNbChalets(nbChalets - 1)
        if (nbNights > 0) {
            setNbArticle(nbArticle - 1)
        }
    }

    const deleteAll = () => {
        setNbArticle(0)
        setPrice(0)
        setPlaceParcAdult(0)
        setPlaceParcChild(0)
        setNbNights(0)
        setNbHotel(0)
        setNbBulles(0)
        setNbChalets(0)
        setNbHamacs(0)
        setNbTentes(0)
    }
    const clickResa = () => {
        if (price > 0) {
            setVerify("Ceci est un site fictif, vous ne pouvez pas réserver réellement")
            setTimeout(() => {
                setVerify("")
            }, 5000)
        } else {
            setVerify("Vous n'avez rien ajouter à votre panier")
        }

    }
    return (
        <>

            <div className={styles.panier}>
                <div className={styles.nbArticle}>
                    <i className="fa-solid fa-basket-shopping"></i>
                    {nbArticle > 0 && <p>{nbArticle}</p>}
                </div>
                <p>{price}€ Réserver</p>
                <i className="fa-regular fa-trash-can" onClick={deleteAll}></i>
            </div>
            <section className={styles.parc}>
                <div className={styles.banner}></div>
                <article className={styles.articleParcs}>
                    <h2>Réserver une place dans notre parc</h2>
                    <div className={styles.line}></div>
                    <div className={styles.resaParc}>
                        <div className={styles.adult}>
                            <p>Adulte</p>
                            <p>50€</p>
                            <div className={styles.button}>
                                {placeParcAdult > 0 && <button className={styles.btn} onClick={soustractPlaceAdult}>-</button>}
                                <p>{placeParcAdult}</p>
                                <button className={styles.btn} onClick={addPlaceAdult}>+</button>
                            </div>
                        </div>
                        <div className={styles.adult}>
                            <p>Enfant*</p>
                            <p>35€</p>
                            <div className={styles.button}>
                                {placeParcChild > 0 && <button className={styles.btn} onClick={soustractPlaceChild}>-</button>}
                                <p>{placeParcChild}</p>
                                <button className={styles.btn} onClick={addPlaceChild}>+</button>

                            </div>
                        </div><p className={styles.ast}>* Moins de 14 ans</p>
                    </div>

                </article>


            </section >
            <section className={styles.night}>
                <div className={styles.banner}>
                    <h2>Et si on prolongeait votre séjour ?</h2>
                </div>
                <SimpleSlider />
                <p>Exemples de lieux insolites où prolonger vos séjours</p>
                <section className={styles.nbNights}>
                    <p> La date souhaitée pour votre arrivée</p>
                    <input type="date" value={date} min={date} />
                    <article>
                        <p>Nombre de nuits</p>
                        <div>
                            {nbNights > 0 && <button onClick={lessNights}>-</button>}
                            <p>{nbNights}</p>
                            <button onClick={moreNights}>+</button>
                        </div>

                    </article>
                    <div className={styles.line}></div>
                    <p>Quel type de logements souhaitez-vous ?</p>
                    <article>
                        <p>Chambres d'hôtel <span>(Lit double)</span> 75€</p>
                        <div>
                            {nbHotel > 0 && <button onClick={lessHotel}>-</button>}
                            <p>{nbHotel}</p>
                            <button onClick={moreHotel}>+</button>
                        </div>
                    </article>
                    <article>
                        <p>Bulles <span>(Lit double)</span> 75€</p>
                        <div>
                            {nbBulles > 0 && <button onClick={lessBulle}>-</button>}
                            <p>{nbBulles}</p>
                            <button onClick={moreBulle}>+</button>
                        </div>

                    </article>
                    <article>
                        <p>Hamacs <span>(Pour deux Hamacs)</span> 25€</p>
                        <div>
                            {nbHamacs > 0 && <button onClick={lessHamacs}>-</button>}
                            <p>{nbHamacs}</p>
                            <button onClick={moreHamacs}>+</button>
                        </div>

                    </article>
                    <article>
                        <p>Tentes <span>(Pour deux personnes)</span> 25€</p>
                        <div>
                            {nbTentes > 0 && <button onClick={lessTentes}>-</button>}
                            <p>{nbTentes}</p>
                            <button onClick={moreTentes}>+</button>
                        </div>

                    </article>
                    <article>
                        <p>Chalets <span>(jusqu'à 8 personnes)</span> 250€</p>
                        <div>
                            {nbChalets > 0 && <button onClick={lessChalets}>-</button>}
                            <p>{nbChalets}</p>
                            <button onClick={moreChalets}>+</button>
                        </div>

                    </article>
                    <p>Les tarifs sont affichés pour une seule nuit</p>
                    <button className={styles.resa} onClick={clickResa}>
                        Réserver</button>
                    <p>{verify}</p>
                </section>
            </section >




            <Wip />
        </>
    )
}
export default Billetterie