import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Roadless Travel. Кемерово. Перевозки на Уазе по бездорожью.</p>
      <p>Телефон: +7 996 412 85 34</p>
    </footer>
  );
};

export default Footer;
