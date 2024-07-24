
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import styles from "./Carrousel.module.scss";
import { SampleNextArrow } from "./SampleNextArrow";
import { SamplePrevArrow } from "./SamplePrevArrow";
import photo1 from "../../assets/img-bil/photo1.jpg"
import photo2 from "../../assets/img-bil/photo2.jpg"
import photo3 from "../../assets/img-bil/photo3.jpg"
import photo4 from "../../assets/img-bil/photo4.jpg"
import photo5 from "../../assets/img-bil/photo5.jpg"
// import photos from "./photos.json"
// interface SimpleSliderProps {
//   photos: Array<{ photo: string }>;
// }


export const SimpleSlider = () => {
  const photos = [
    { photo: photo1 },
    { photo: photo2 },
    { photo: photo3 },
    { photo: photo4 },
    { photo: photo5 }]
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <section className={`${styles.carrousel}`}>
        <Slider {...settings}>
          {photos.map((image, i) =>
            <div key={i} className={`${styles.div}`}>
              <img src={image.photo} className={`${styles.border}`} alt="" />
            </div>
          )}
        </Slider>
      </section>
    </>
  );

};