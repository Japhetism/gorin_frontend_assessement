import React from "react";
import Image from "next/image";
import styles from "./information.module.css";

const Information = () => {
    return (
        <div className={styles.informationContainer}>
            <div className={styles.section}>
                <p>
                    <span className={`${styles.boldText} ${styles.text}`}>Sell CRE Faster</span>
                    <span className={styles.text}>&nbsp;with OMs & Ads created in</span>
                    <span className={`${styles.boldText} ${styles.text}`}>&nbsp;minutes</span>
                </p>
                <p className={styles.description}>
                    <span>
                        Create beautiful Commercial Real Estate Offering Memorandums, 
                        Flyers & Ads in minutes with our AI powered platform
                    </span>
                </p>
                <div className={styles.playSection}>
                    <div className={styles.playSectionBox}>
                        <button className={styles.button}>Try for free</button>
                    </div>
                    <div className={styles.watchSection}>
                        <div className={styles.playSectionBox}>
                            <Image src="/images/playbutton.png" width={40} height={40} alt="play button"/>
                        </div>
                        <div className={styles.playSectionBox}>
                            <p>Watch Demo</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.section} ${styles.informationImage}`}>
                <Image src="/images/hero.png" alt="hero" objectFit="cover" layout="fill" />
            </div>
        </div>
    )
}

export default Information;