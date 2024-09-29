import React from "react";
import Image from "next/image";
import { buildings } from "@/fixtures/buildings";
import styles from "./buildings.module.css";
import { IBuilding } from "@/interfaces/building";

const Buildings = () => {
    return (
        <div className={styles.buildingContainer}>
            <div className={styles.buildingSection}>
                <p className={styles.buildingHeader}>
                    <span>Sample OMs Created with our platform</span>
                </p>
                <div className={styles.buildings}>
                    {buildings.map((building: IBuilding, index: number) => (
                        <div className={styles.building} key={index}>
                            <div className={styles.buildingImage}>
                                <Image src={building.imageUrl} alt={building.name} objectFit="cover" layout="fill"   />
                            </div>
                            <div className={styles.extras}>
                                <p className={styles.buildingTitle}>
                                    <span>{building.name}</span>
                                </p>
                                <p className={styles.buildingDescription}>
                                    <span>{building.description}</span>
                                </p>
                                <button className={styles.button}>
                                    View Sample Template
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Buildings;