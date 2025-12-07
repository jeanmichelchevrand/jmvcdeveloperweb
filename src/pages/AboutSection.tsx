import React from 'react';
import { Code, Gamepad2, GraduationCap, Award } from 'lucide-react';
import {CardHeader, CardContent } from '@/components/Card/card';
import CardTitle from '@/components/Card/card';
import Card from '@/components/Card/card';

//IMAGES
import profileImg from '@/assets/profileimg.jpg';
import gallery1 from '@/assets/java_internacional.png';
import gallery2 from '@/assets/pos2.jpg';
import gallery3 from '@/assets/pos3.jpg';
import gallery4 from '@/assets/crearj.jpg';
import gallery5 from '@/assets/frontend_internacional.png';

//CSS
import styles from "@/styles/about.module.css";

const AboutSection: React.FC = () => {
  const skills = [
    {
      icon: <Code className={styles.skillCardIcon} />,
      title: 'Desenvolvimento Front-end',
      description:
        'Especialista em React, Next.js, TypeScript e Tailwind CSS. Criação de interfaces modernas e responsivas.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      icon: <Gamepad2 className={styles.skillCardIcon} />,
      title: 'Desenvolvimento de Jogos',
      description:
        'Criação de jogos 2D e 3D usando Unity e Godot. Experiência em game design e programação de gameplay.',
      technologies: ['Unity', 'C#', 'Godot', 'GDScript', 'Game Design', 'Pixel Art'],
    },
    {
      icon: <GraduationCap className={styles.skillCardIcon} />,
      title: 'Ensino de Programação',
      description:
        'Professor experiente em programação e robótica educacional. Desenvolvimento de currículos e materiais didáticos.',
      technologies: ['Arduino', 'Python', 'Scratch', 'Robótica', 'Pedagogia', 'Metodologias Ativas'],
    },
  ];

  const achievements = [
    { icon: <Award className={styles.achievementIcon} />, title: 'Graduado em Jogos Digitais', description: '& Técnico Mecatrônica' },
    { icon: <Award className={styles.achievementIcon} />, title: '5+ Anos de Experiência', description: 'em sala de aula.' },
    { icon: <Award className={styles.achievementIcon} />, title: '3 Especializações Concluídas', description: '' },
    { icon: <Award className={styles.achievementIcon} />, title: 'Diversos Alunos Formados', description: '' },
    { icon: <Award className={styles.achievementIcon} />, title: '7+ Tecnologias', description: 'Dominadas em diferentes áreas de desenvolvimento.' },
  ];

  const [currentImage, setCurrentImage] = React.useState(0);
  //CARROUSEL - INICIO
  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5];

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };
  //CARROUSEL - FIM
  //MODAL - INICIO
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [modalImage, setModalImage] = React.useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  {/*const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };*/}

  const closeModal = () => {
  setIsClosing(true); // ativa animação de fechamento
  setTimeout(() => {
    setIsModalOpen(false); // remove modal do DOM após animação
    setModalImage(null);
    setIsClosing(false);
  }, 300); // mesmo tempo da animação (0.3s)
};
  //MODAL - FIM
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Sobre Mim</h2>
          <p className={styles.sectionDescription}>
            Sou um desenvolvedor apaixonado por tecnologia e educação, com experiência em múltiplas áreas do desenvolvimento de software.
          </p>
        </div>

        {/* Left + Right Columns */}
        <div className={styles.columns}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <h3 className={styles.subTitle}>Minha Jornada</h3>
            <p className={styles.text}>Comecei minha trajetória como técnico em Mecatrônica, adquirindo uma base sólida em engenharia e tecnologia. Posteriormente, concluí a graduação em Jogos Digitais, aprofundando meus conhecimentos em desenvolvimento de jogos.</p>
            <p className={styles.text}>Atualmente, também atuo como educador, compartilhando conhecimento em programação e robótica. Me dedico a formar a próxima geração de desenvolvedores.</p>
            <p className={styles.text}>Minha abordagem combina criatividade técnica com metodologias pedagógicas eficazes, sempre buscando inovar e inspirar outros a explorar o mundo da programação.</p>
          </div>

          {/* Right Column */}
          <div className={styles.profileWrapper}>
            <div className={styles.profilePhotoOuter}>
              <div className={styles.profilePhotoInner}>
                <img
                  src={profileImg.src}
                  alt="Minha Foto"
                  className={styles.profileImage}
                />
              </div>
            </div>

            <div className={styles.achievementsGrid}>
              {achievements.map((ach, idx) => (
                <div key={idx} className={styles.achievementCard}>
                  <div className={styles.achievementCardInner}>
                    {ach.icon}
                    <h4 className={styles.achievementTitle}>{ach.title}</h4>
                    <p className={styles.achievementDescription}>{ach.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.carouselSection}>
            <button className={styles.carouselButton} onClick={prevImage}>‹</button>
            
            <div 
              className={styles.carouselImageWrapper} 
              onClick={() => openModal(galleryImages[currentImage].src)}
            >
              <img
                src={galleryImages[currentImage].src}
                alt={`Gallery ${currentImage + 1}`}
                className={styles.carouselImage}
              />
            </div>

            <button className={styles.carouselButton} onClick={nextImage}>›</button>
          </div>

          {/* Modal */}
        {isModalOpen && modalImage && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div
              className={`${styles.modalContent} ${isClosing ? styles.modalClosing : ''}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.modalClose} onClick={closeModal}>×</button>
              <div className={styles.modalImageWrapper}>
                <img src={modalImage} alt="Expanded" className={styles.modalImage} />
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
