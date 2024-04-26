import React from 'react';
import App from '../../components/layouts/app'
import Banner from "/components/banner/banner";
import Products from "/components/products/products";
import ImageBackg from "/components/imgGirl/ImageBackg";
import New from "/components/newProducts/new";
import Gallery from "@/components/gallery/gallery";

const Index = () => {
    return (
        <div>
            <App>
                <Banner/>
                <Products/>
                <ImageBackg/>
                <New/>
                <Gallery/>
            </App>

        </div>
    );
};

export default Index;