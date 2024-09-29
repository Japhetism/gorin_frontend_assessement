import React from "react";
import Link from "next/link";
import Image from "next/image";
import { headerMenu } from "@/fixtures/headerMenu";
import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <Link href="/">
                    <Image src="/images/logo.png" alt="SellCRE.ai" width={131} height={29} />
                </Link>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    {headerMenu.map((menu: IHeaderMenu, index: number) => (
                        <li key={index}>
                            {menu.icon && <div className={styles.icon}><menu.icon /></div>}
                            <Link href={menu.url}>{menu.name}</Link>
                        </li>
                    ))}
                    <li>
                        <button className={styles.button}>Try For Free</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;