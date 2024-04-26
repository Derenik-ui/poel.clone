import React from 'react';
import styles from '../../../styles/layouts.module.css'
import Image from "next/image";
import {FacebookOutlined, InstagramOutlined, MailOutlined, PhoneOutlined, PushpinOutlined} from "@ant-design/icons";

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.sub}>
                    <div className={styles.logs_d}>

                        <div className={styles.log_d}>
                            <Image width={88} height={54} src="/logo.png"/>
                        </div>
                        <div className={styles.logos}>
                            <div><span><InstagramOutlined/></span></div>
                            <div><span><FacebookOutlined/></span></div>
                        </div>
                    </div>
                    <div className={styles.main_fo}>
                        <div>
                            <h4>Կատեգորիաներ</h4>
                            <ul>
                                <li>Տղամարդու</li>
                                <li>Կանացի</li>
                                <li>Մանկական</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Էջեր</h4>
                            <ul>
                                <li>Մեր մասին</li>
                                <li>Կապ մեզ հետ</li>
                                <li>FAQ</li>
                                <li>Բլոգ</li>
                                <li>Privacy and Policy</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Կոնտակտներ</h4>
                            <ul>
                                <li><MailOutlined/>mail-poel.am2020@gmail.com</li>
                                <li><PhoneOutlined/>+37498534425</li>
                                <li><PushpinOutlined/>Երևան, Փարպեցու 17, KIVERA խանութ սրահ</li>
                                <li><PushpinOutlined/>Երևան, Արամի 64, The Muse խանութ սրահ</li>
                                <li><PushpinOutlined/>Մոսկվա, Սելեզնյովսկայա 4</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </footer>

        </>
    );
};

export default Footer;