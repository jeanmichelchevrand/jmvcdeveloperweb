import React from 'react';
import { StaticImageData } from "next/image";
import { ExternalLink, Github } from 'lucide-react';
import Button from '@/components/Button/buttonGlobal';
import Card, { CardHeader, CardContent, CardFooter } from '@/components/Card/card';
import styles from '@/components/ProjectCard/projectCard.module.css';

import Image from 'next/image';
import desweb from '@/assets/desweb.png';
import desgame from '@/assets/desgame.png';
import aulaimg from '@/assets/aulaimg.png';

type ProjectCategory = 'frontend' | 'games' | 'education';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: ProjectCategory;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  category
}) => {
  const getCategoryClass = (cat: string) => {
    switch (cat) {
      case 'frontend': return styles.badgeFrontend;
      case 'games': return styles.badgeGames;
      case 'education': return styles.badgeEducation;
      default: return styles.badgeDefault;
    }
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'frontend': return 'Front-end';
      case 'games': return 'Jogos';
      case 'education': return 'Educação';
      default: return 'Projeto';
    }
  };

  return (
    <Card className={styles.card}>
      {/* Project Image */}
      <div className={styles.imageWrapper}>
        {category === 'frontend' && (
          <Image
            src={desweb}
            alt="Desenvolvimento Web"
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
        {category === 'games' && (
          <Image
            src={desgame}
            alt="Desenvolvimento de Jogos"
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
        {category === 'education' && (
          <Image
            src={aulaimg}
            alt="Aulas de Programação e Robótica"
            fill
            style={{ objectFit: 'cover' }}
          />
        )}

        {/* Category Badge */}
        <div className={`${styles.badge} ${getCategoryClass(category)}`}>
          {getCategoryLabel(category)}
        </div>
      </div>

      <CardHeader>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </CardHeader>

      <CardContent>
        <div className={styles.techList}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>
      </CardContent>

      {/*<CardFooter className={styles.footer}>
        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(githubUrl, '_blank')}
          >
            <Github size={16} />
            Código
          </Button>
        )}
        {/* {liveUrl && (
          <Button
            size="sm"
            variant="primary"
            onClick={() => window.open(liveUrl, '_blank')}
          >
            <ExternalLink size={16} />
            Ver Projeto
          </Button>
        )} 
      </CardFooter>*/}
    </Card>
  );
};

export default ProjectCard;
