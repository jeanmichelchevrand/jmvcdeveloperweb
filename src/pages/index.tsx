import React, { useEffect, useState } from 'react';
import { StaticImageData } from "next/image";
import styles from '@/styles/main.module.css';

import HeroSection from '@/components/HeroSection/heroSection';
import ProjectCard from '@/components/ProjectCard/projectCard';

import desweb from "@/assets/desweb.png";


type ProjectCategory = 'frontend' | 'games' | 'education';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
  category: ProjectCategory;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Desenvolvimento Web',
    description: 'Criação de sites e aplicações modernas usando React, TypeScript, JavaScript, HTML e CSS.',
    image: desweb,
    githubUrl: '#',
    liveUrl: '#',
    technologies: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    category: 'frontend',
  },
  {
    id: 2,
    title: 'Desenvolvimento de Jogos',
    description: 'Produção de jogos 2D e 3D com Unity, Construct 3 e Godot, abordando roteiro e game design.',
    image: '/images/project2.jpg',
    githubUrl: '#',
    liveUrl: '#',
    technologies: ['Unity 2D/3D', 'Construct 3', 'Godot 2D/3D', 'Roteiro', 'Game Design'],
    category: 'games',
  },
  {
    id: 3,
    title: 'Aulas',
    description: 'Ensino prático de programação, robótica e desenvolvimento de jogos com Godot 2D/3D.',
    image: '/images/project2.jpg',
    githubUrl: '#',
    liveUrl: '#',
    technologies: ['Aulas de Programação', 'Aulas de Robótica', 'Godot 2D/3D', 'Construct 3', 'Unity', ],
    category: 'education',
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY + 200; // margem de tolerância

  //     const sections = ['home', 'about', 'projects', 'contact'];
  //     for (const section of sections) {
  //       const el = document.getElementById(section);
  //       if (el) {
  //         const { offsetTop, offsetHeight } = el;
  //         if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
  //           setActiveSection(section);
  //           break;
  //         }
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div className={styles.home}>
      <section id="home" >
        <HeroSection />
      </section>

      <section id="projects" className={styles.projects}>
        <h2>Produtos</h2>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              technologies={project.technologies}
              category={project.category}
            />
          ))}
        </div>
      </section>

      {/* <section id="contact" style={{ padding: '100px 16px' }}>
        <h2>Contato</h2>
        <p>
          Email: <a href="mailto:seuemail@exemplo.com">seuemail@exemplo.com</a><br />
          LinkedIn: <a href="https://linkedin.com/in/seu-perfil" target="_blank">linkedin.com/in/seu-perfil</a>
        </p>
      </section> */}
    </div>
  );
}
