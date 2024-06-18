type TripleProps = {
    img1: string;
    title1: string
    text1: string;
    bubble1: string;
    img2: string;
    title2: string
    text2: string;
    bubble2: string;
    img3: string;
    title3: string;
    text3: string;
    bubble3: string;
};
import styles from "./Triple.module.scss"

const Triple = ({ img1, text1, bubble1, title1, img2, title2, text2, bubble2, title3, img3, text3, bubble3 }: TripleProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img src={img1} alt="" />
                <div className={styles.text}>
                    <h3>{title1}</h3>
                    <div className={styles.line}></div>
                    <p>{text1}</p>
                </div>
                <div className={styles.bubble}>
                    <p>{bubble1}</p></div>
            </div>
            <div className={styles.contentTwo}>
                <div className={styles.text}>
                    <h3>{title2}</h3>
                    <div className={styles.line}></div>
                    <p>{text2}</p>
                </div>
                <div className={styles.bubbleReverse}>
                    <p>{bubble2}</p>
                </div>
                <img src={img2} alt="" />
            </div>
            <div className={styles.content}>
                <img src={img3} alt="" />
                <div className={styles.text}>
                    <h3>{title3}</h3>
                    <div className={styles.line}></div>
                    <p>{text3}</p>
                </div>
                <div className={styles.bubble}>
                    <p>{bubble3}</p>
                </div>
            </div>
        </div>
    );
};

export default Triple;
