import React, { useState, useEffect } from 'react';
import styles from '@/styles/trabalho.module.css';

import gameUm from "@/assets/jogo1.gif";
import gameDois from "@/assets/jogo2.gif";
import gameTres from "@/assets/jogo3.gif";

const GameplayCard = () => {
    return(
        <section className={styles.sectionTrabalho}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.profilePhotoOuter}>
                        <div className={styles.profilePhotoInner}>
                            <img
                            src={gameUm.src}
                            alt="Minha Foto"
                            className={styles.profileImage}
                            />
                        </div>
                        {/* Área de título e descrição */}
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Battle in Space</h3>
                        <p className={styles.cardDescription}>Shooter</p>
                        <p className={styles.cardDescription}>Construct 3</p>
                    </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.profilePhotoOuter}>
                        <div className={styles.profilePhotoInner}>
                            <img
                            src={gameDois.src}
                            alt="Minha Foto"
                            className={styles.profileImageDois}
                            />
                        </div>
                        {/* Área de título e descrição */}
                    <div className={styles.cardContentDois}>
                        <h3 className={styles.cardTitle}>Ship vs. Asteroids</h3>
                        <p className={styles.cardDescription}>Shooter</p>
                        <p className={styles.cardDescription}>Unity</p>
                    </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.profilePhotoOuter}>
                        <div className={styles.profilePhotoInner}>
                            <img
                            src={gameTres.src}
                            alt="Minha Foto"
                            className={styles.profileImageDois}
                            />
                        </div>
                        {/* Área de título e descrição */}
                    <div className={styles.cardContentDois}>
                        <h3 className={styles.cardTitle}>Pong</h3>
                        <p className={styles.cardDescription}>Sports</p>
                        <p className={styles.cardDescription}>Unity</p>
                    </div>
                    </div>
                </div>
            </div>
        </section> 
    );
};

export default GameplayCard;