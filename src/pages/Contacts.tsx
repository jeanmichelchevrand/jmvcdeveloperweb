import React from "react";
import { Mail, Phone, Instagram, Linkedin, Github, Send, MessageSquare } from "lucide-react";
//CSS
import styles from "@/styles/contacts.module.css";

const Contacts: React.FC = () => {
  return (
    <section className={styles.contatoSection}>
      <div className={styles.container}>
        <h1 className={styles.titulo}>Entre em Contato</h1>
        <p className={styles.subtitulo}>
          Ficarei feliz em conversar com você! Entre em contato pelas redes abaixo.
        </p>

        {/* Redes sociais */}
        <div className={styles.socialContainer}>
          <a href="https://www.linkedin.com/in/jean-michel-villeneuve-chevrand" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <Linkedin size={22} /> LinkedIn
          </a>
          <a href="https://www.instagram.com/jmvcodes/" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <Instagram size={22} /> Instagram
          </a>
          <a href="https://wa.me/message/DJUAHGN6D22RP1" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <Phone size={22} /> WhatsApp
          </a>
          <a href="mailto:jmvc.developer@gmail.com" className={styles.socialLink}>
            <Mail size={22} /> E-mail
          </a>
        </div>

        {/* Formulário de contato 
        <form className={styles.formulario}>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Seu nome" required />
          </div>
          <div className={styles.formGroup}>
            <input type="email" placeholder="Seu e-mail" required />
          </div>
          <div className={styles.formGroup}>
            <textarea placeholder="Sua mensagem..." rows={4} required />
          </div>
          <button type="submit" className={styles.botaoEnviar}>
            <Send size={18} /> Enviar
          </button>
        </form>*/}
      </div>
    </section>
  );
};

export default Contacts;
