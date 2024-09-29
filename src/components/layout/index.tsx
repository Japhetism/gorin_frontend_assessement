import React from "react";
import { ILayout } from "@/interfaces/layout";
import Header from "../header";
import styles from "./layout.module.css";

const Layout = ({ children }: ILayout) => {
    return (
        <div className={styles.main}>
            <Header />
            {children}
        </div>
    )
}

export default Layout;