import React, {useState} from 'react';
import styles from "../../styles/newPr.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const Products = () => {

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

    const [products,setProducts]=useState([
        {id:1, image:"/1_avatar.webp", title:"<<Ծաղկած Գեղարդ>>", price:"27500 AMD"},
        {id:2, image:"/2_avatar.webp", title:"<<Ծաղկած Գեղարդ>>", price:"27500 AMD"},
        {id:3, image:"/3_avatar.webp", title:"<<Ծաղկած Գեղարդ>>", price:"27500 AMD"},
        {id:4, image:"/4_avatar.webp", title:"<<Ծաղկած Գեղարդ>>", price:"27500 AMD"},
        {id:5, image:"/5_avatar.webp", title:"<<Ծաղկած Գեղարդ>>", price:"27500 AMD"},
        {id:6, image:"/6_avatar.webp", title:"<<Ծաղկած Գեղարդ>>", price:"27500 AMD"},
        {id:7, image:"/7_avatar.webp", title:"<<Ծաղկած Գեղարդ>>", price:"27500 AMD"},
        {id:8, image:"/8_avatar.webp", title:"<<Ծաղկած Գեղարդ>>", price:"27500 AMD"},
        {id:9, image:"/9_avatar.webp", title:"<<Ծաղկած Գեղարդ>>", price:"27500 AMD"},
        {id:10, image:"/10_avatar.webp", title:"<<Ծաղկած Գեղարդ>>", price:"27500 AMD"},
        {id:11, image:"/11_avatar.webp", title:"<<Ծաղկած Գեղարդ>>", price:"27500 AMD"},
        {id:12, image:"/12_avatar.webp", title:"<<Ծաղկած Գեղարդ>>", price:"27500 AMD"},
        {id:13, image:"/13_avatar.webp", title:"<<Ծաղկած Գեղարդ>>", price:"27500 AMD"},
        {id:14, image:"/14_avatar.webp", title:"<<Ծաղկած Գեղարդ>>", price:"27500 AMD"},
    ])
    return (
        <>
            <div className={styles.container}>
                <h1>Լավագույն Առաջարկներ</h1>
                <div className={styles.item_con}>
                <Slider {...settings}>
                    {products.map((item) => (
                        <div key={item.id} className={styles.item}>
                            <Image width={284} height={360} src={item.image} alt="error" className={styles.img}/>
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

export default Products;
