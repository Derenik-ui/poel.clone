import React, {useState} from 'react';
import styles from "../../styles/products.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const New = () => {

    const settings = {
        dots: false, // Whether to show dots navigation
        arrows: true, // Whether to show arrows navigation
        infinite: true, // Whether to enable infinite loop sliding
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 5, // Number of slides to show at once
        slidesToScroll: 4, // Number of slides to scroll at once
        autoplay: true, // Whether to enable autoplay
        autoplaySpeed: 3000, // Autoplay speed in milliseconds
        pauseOnHover: true, // Whether to pause autoplay on hover
        responsive: [ // Responsive settings for different screen sizes
            {
                breakpoint: 1024, // Breakpoint for screen size
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };



    const [products2, setProducts2]= useState([
        {id:1, image:"/15_avatar.webp", title:"<<Ավետման խաչ>>", price:"31000 AMD"},
        {id:2, image:"/16_avatar.webp", title:"<<Ավետման խաչ>>", price:"31000 AMD"},
        {id:3, image:"/17_avatar.webp", title:"<<Ավետման խաչ>>", price:"31000 AMD"},
        {id:4, image:"/18_avatar.webp", title:"<<Ավետման խաչ>>", price:"31000 AMD"},
        {id:5, image:"/19_avatar.webp", title:"<<Ավետման խաչ>>", price:"31000 AMD"},
        {id:6, image:"/20_avatar.webp", title:"<<Ավետման խաչ>>", price:"31000 AMD"},
        {id:7, image:"/21_avatar.webp", title:"<<Ավետման խաչ>>", price:"31000 AMD"},
        {id:8, image:"/22_avatar.webp", title:"<<Ավետման խաչ>>", price:"31000 AMD"},
        {id:9, image:"/23_avatar.webp", title:"<<Ավետման խաչ>>", price:"31000 AMD"},
        {id:10, image:"/24_avatar.webp", title:"<<Ավետման խաչ>>", price:"31000 AMD"}
    ])

    return (
        <>
            <div className={styles.container}>
                <h1>Լավագույն Առաջարկներ</h1>
                <div className={styles.item_con}>
                    <Slider {...settings}>
                        {products2.map((item) => (
                            <div key={item.id} className={styles.item}>
                                <Image width={284} height={360} src={item.image} alt="err" className={styles.img}/>
                                <div>
                                    <span>{item.title}</span>

                                </div>
                                <div>
                                    <span>{item.price}</span>
                                </div>
                            </div>


                        ))}
                    </Slider>
                </div>
            </div>




        </>
    );
};

export default New;