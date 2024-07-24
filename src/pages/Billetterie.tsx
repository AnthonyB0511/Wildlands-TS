import Wip from "./Wip"
import { useState } from "react"
import styles from "../pages/scss/Bil.module.scss"

const Billetterie = () => {
    const [placeParcAdult, setPlaceParcAdult] = useState(0)
    const [placeParcChild, setPlaceParcChild] = useState(0)
    const [nbArticle, setNbArticle] = useState(0)
    const [price, setPrice] = useState(0)
    const addPlaceAdult = () => {
        setPlaceParcAdult(placeParcAdult + 1)
        setNbArticle(nbArticle + 1)
        setPrice(price + 50)
    }
    const soustractPlaceAdult = () => {
        setPlaceParcAdult(placeParcAdult - 1)
        setNbArticle(nbArticle - 1)
        setPrice(price - 50)
    }
    const addPlaceChild = () => {
        setPlaceParcChild(placeParcChild + 1)
        setNbArticle(nbArticle + 1)
        setPrice(price + 35)
    }
    const soustractPlaceChild = () => {
        setPlaceParcChild(placeParcChild - 1)
        setNbArticle(nbArticle - 1)
        setPrice(price - 35)
    }
    const deleteAll = () => {
        setNbArticle(0)
        setPrice(0)
        setPlaceParcAdult(0)
        setPlaceParcChild(0)
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
            <Wip />
        </>
    )
}
export default Billetterie