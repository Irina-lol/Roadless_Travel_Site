import styles from "./Header.module.css";
import logo from "../../assets/images/logo.jpg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Логотип" className={styles.logo} />
        <span className={styles.companyName}>Roadless Travel</span>
      </div>
      <nav className={styles.nav}>
        <a href="/" className={styles.navLink}>Главная</a>
        <a href="#services" className={styles.navLink}>Услуги</a>
        <a href="#contacts" className={styles.navLink}>Контакты</a>
      </nav>
    </header>
  );
};

export default Header;
