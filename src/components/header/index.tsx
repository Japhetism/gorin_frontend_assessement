"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { headerMenu } from "@/fixtures/headerMenu";
import styles from "./header.module.css";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const toggleDropdownMenu = () => {
        setIsDropdownMenuOpen(!isDropdownMenuOpen);
    }

    return (
        <header className={styles.header}>
            <div>
                <Link href="/">
                    <Image src="/images/logo.png" alt="SellCRE.ai" width={131} height={29} />
                </Link>
            </div>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
                <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ""}`}>
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
            <div className={styles.menuToggle} onClick={toggleDropdownMenu}>
                &#9776;
            </div>
            {isDropdownMenuOpen && (
                <nav className={styles.dropdownMenu}>
                    <ul className={styles.dropdownMenuList}>
                        {headerMenu.map((menu: IHeaderMenu, index: number) => (
                            <li key={index}>
                                {menu.icon && <p className={styles.icon}><menu.icon /></p>}
                                <Link href={menu.url}>{menu.name}</Link>
                            </li>
                        ))}
                        <li>
                            <button className={styles.button}>Try For Free</button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    )
}

export default Header;