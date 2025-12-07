import React from 'react';
import { Heart, Github, Linkedin, Mail, MessageCircle, Instagram } from 'lucide-react';

import styles from './footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {/*
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/joaosilva',
      name: 'GitHub'
    */},
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/jean-michel-villeneuve-chevrand',
      name: 'LinkedIn'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      url: 'https://wa.me/message/DJUAHGN6D22RP1',
      name: 'Whatsapp'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/jmvcodes/',
      name: 'Instagram'
    }
  ];

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.gridContainer}>
          {/* Brand Section */}
          <div className={styles.leftSection}>
            <div className={styles.leftSectionTitle}>
              <span>JmvCodes</span>
              <span>Portfolio</span>
            </div>
            <div className={styles.iconContainer}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconButton}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links
          <div className="space-y-4">
            <h3 className={styles.textFooter}>Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={styles.ButtonFooter}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>*/}

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className={styles.textFooter}>Contato</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <a href="mailto:jmvc.developer@gmail.com" className={styles.textFooterA}>jmvc.developer@gmail.com</a>
              </p>
              <p>
                <a className={styles.textFooterA}>+55 (21) 99719-6565</a>
              </p>
              <p className={styles.textSpanFooter}>RJ - Brasil</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={styles.textFooter}>
              © {currentYear} <span className={styles.textSpanFooter}>JmvCodes</span>. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;