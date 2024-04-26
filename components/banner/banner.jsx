import React, {useState} from 'react';
import Slider from "react-slick";
import styles from "../../styles/banner.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const [images, setImages] = useState([
        {id: 1, image: "/1_image.webp"},
        {id: 2, image: "/2_image.webp"},
        {id: 3, image: "/3_image.webp"},
        {id: 4, image: "/4_image.webp"}
    ])



    return (
        <div className={styles.banner}>
            <Slider {...settings}>
                {images.map((item) => (
                    <div key={item.id}>
                        <Image width={1000} height={500} src={item.image} alt=""/>
                    </div>
                ))}
            </Slider>

        </div>
    );
};

export default Banner;