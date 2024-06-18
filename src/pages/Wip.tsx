import styles from "./scss/Wip.module.scss"

const Wip = () => {
    return (
        <div className={styles.app}>
            <section className={styles.wip}>
                <h1>WORK IN PROGRESS</h1>
                <article className={`${styles.rotateAnimation} ${styles.container}`}>
                    <i className={`fa-solid fa-spinner ${styles.icon}`}></i>
                </article>
            </section>
        </div>

    )
}
export default Wip