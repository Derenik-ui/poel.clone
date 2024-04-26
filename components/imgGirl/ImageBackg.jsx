import React from 'react';
import Image from "next/image";
import styles from "../../styles/image.module.css"


const ImageBackg = () => {
    return (
        <>
            <div>
                <Image width={1520} height={600} src="/main_abouts.webp" className={styles.img}/>
            </div>

        </>
    );
};

export default ImageBackg;