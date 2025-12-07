import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, MessageCircle, Instagram } from 'lucide-react';
import styles from '@/components/HeroSection/heroSection.module.css';

import profileImg from '@/assets/profileimg.jpg';

const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Desenvolvedor Front-end',
    'Desenvolvedor de Jogos',
    'Professor de Programação e Robótica',
    'Técnico de Mecatrônica'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        if (currentText.length < current.length) {
          setCurrentText(current.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(current.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {/* Left Column - Text Content */}
        <div className={styles.leftColumn}>
          <div className={styles.introText}>
            <h2 className={styles.subtitle}>Olá, eu sou</h2>
            <h1 className={styles.title}>
              <span className={styles.whiteText}>Jean Michel</span>
            </h1>
            <div className={styles.typingWrapper}>
              <h3 className={styles.typingText}>
                {currentText}
                <span className={styles.cursor}>|</span>
              </h3>
            </div>
          </div>

          <p className={styles.description}>
            Transformo ideias em experiências digitais incríveis. Especialista em desenvolvimento front-end, criação de jogos e educação tecnológica, sempre buscando inovar e ensinar.
          </p>

          <div className={styles.buttonsWrapper}>
            <button
              className={styles.primaryButton}
              onClick={scrollToProjects}
            >
              Ver Produtos
            </button>
            {/*<button
              className={styles.outlineButton}
            >
              Download CV
            </button>*/}
          </div>

          {/* Social Links */}
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/jean-michel-villeneuve-chevrand/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <Linkedin size={28} />
            </a>
            <a href="https://wa.me/message/DJUAHGN6D22RP1" className={styles.socialIcon}>
              <MessageCircle size={28} />
            </a>
            <a href="https://www.instagram.com/jmvcodes/" className={styles.socialIcon}>
              <Instagram size={28} />
            </a>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div className={styles.rightColumn}>
          <div className={styles.profileWrapper}>
            <div className={styles.profileGradient}>
              <img src={profileImg.src} alt="Foto de perfil" className={styles.profileImage}/>
            </div>

            {/* Floating elements */}
            <div className={`${styles.floatController} ${styles.animateBounce}`}>🎮</div>
            <div className={`${styles.floatRobot} ${styles.animatePulse}`}>🤖</div>
            <div className={`${styles.floatLaptop} ${styles.animateBounce}`}>💻</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;