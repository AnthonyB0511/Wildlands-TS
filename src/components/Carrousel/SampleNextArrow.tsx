import arrow from "../../assets/img-bil/bouton2.png";
import styles from "./SampleNextArrow.module.scss";
interface SampleNextArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export function SampleNextArrow({ onClick }: SampleNextArrowProps) {
  return (
    <div
      className={`${styles.container}`}
      onClick={onClick}>
      <img src={arrow} className={`${styles.arrow}`} alt="fleche vers la droite" />
    </div>
  );
}