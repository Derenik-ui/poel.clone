import React from 'react';
import styles from '../../../styles/layouts.module.css'
import Image from "next/image";
import {HeartOutlined, SearchOutlined, ShoppingOutlined} from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';

const Header = () => {
    return (
        <>
           <header className={styles.header}>
                    <div className={styles.container}>
                        <div className={styles.menu}>
                            <ul>
                                <li>Տղամարդու</li>
                                <li>Կանացի</li>
                                <li>Մանկական</li>
                            </ul>
                        </div>
                        <div className={styles.header_logo}>
                            <div className={styles.logo_con}>
                                <Image className={styles.logo} width={88} height={54} src="/logo.png"/>
                            </div>
                        </div>
                        <div className={styles.header_icons}>
                            <div className={styles.icons}>
                                <ul>
                                    <li>
                                        <Tooltip title="search">
                                            <Button shape="circle" icon={<SearchOutlined />} />
                                        </Tooltip>
                                    </li>
                                    <li><ShoppingOutlined /></li>
                                    <li><HeartOutlined /></li>
                                    <li><span>AMD</span></li>
                                    <li><Image width={27} height={17} src="/amFlag.png"/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
           </header>
        </>
    );
};

export default Header;