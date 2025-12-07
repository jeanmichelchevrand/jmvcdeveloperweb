import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
//CSS
import styles from "@/components/Header/header.module.css";

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const menuItems = [
    { id: "home", label: "Início", href: "/" },
    { id: "about", label: "Sobre", href: "/AboutSection" },
    { id: "trabalhos", label: "Trabalhos", href: "/Trabalhos" },
    { id: "contacts", label: "Contatos", href: "/Contacts"},
  ];

  // Adiciona estilo ao header quando o usuário rola
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          <span>Jmv</span>
          <span>Codes</span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className={styles.nav}>
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`${styles.navButton} ${
                activeSection === item.id ? styles.active : ""
              }`}
              onClick={() => onSectionChange(item.id)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={styles.navButtonMobile}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* MENU MOBILE */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <nav className={styles.mobileNav}>
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`${styles.mobileButton} ${
                    activeSection === item.id ? styles.mobileActive : ""
                  }`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    onSectionChange(item.id);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
