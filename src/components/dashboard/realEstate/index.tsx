import React from "react";
import Image from "next/image";
import styles from "./realestate.module.css";
import { estates } from "@/fixtures/estates";
import { IEstate } from "@/interfaces/estates";

const RealEstates = () => {
    return (
        <div className={styles.realContainer}>
            <div>
                <p className={styles.realTitle}>
                    <span>Create OMs and Ads For</span>
                </p>
                <p className={styles.realDescription}>
                    <span>Various Real Estate Property Types</span>
                </p>
            </div>
            <div className={styles.estateContainer}>
                {estates.map((estate: IEstate, index: number) => (
                    <div className={styles.estateBox} key={index}>
                        <Image src={estate.imageUrl} alt={estate.name} width={50} height={50} />
                        <p className={styles.estateText}>
                            <span>{estate.name}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RealEstates;