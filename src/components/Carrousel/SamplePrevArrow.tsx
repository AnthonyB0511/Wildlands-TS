import arrow from "../../assets/img-bil/bouton2.png";
import styles from "./SamplePrevArrow.module.scss";
interface SampleNextArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export function SamplePrevArrow({ onClick }: SampleNextArrowProps) {

  return (
    <div
      className={`${styles.container}`}
      onClick={onClick}>
      <img src={arrow} className={`${styles.arrow}`} alt="flèche pour le carrousel" />
    </div>
  );
}
