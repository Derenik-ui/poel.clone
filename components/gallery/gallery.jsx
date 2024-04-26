import React from 'react';
import styles from '../../styles/gallery.module.css'
import Image from "next/image";


const Gallery = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.asd}>
                    <span>Հետևիր մեզ instagram-ում</span>
                </div>
                <div className={styles.gallery}>
                    <div>
                        <Image width={270} height={380} src="/inst1_image.png" alt="err"/>
                    </div>
                    <div>
                        <Image width={270} height={380} src="/inst2_image.png" alt="err"/>
                    </div>
                    <div>
                        <Image width={270} height={380} src="/inst3_image.png" alt="err"/>
                    </div>
                    <div>
                        <Image width={270} height={380} src="/inst4_image.png" alt="err"/>
                    </div>
                    <div>
                        <Image width={270} height={380} src="/inst5_image.png" alt="err"/>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Gallery;