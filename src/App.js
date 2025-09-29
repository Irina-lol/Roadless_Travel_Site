import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import homepageImage from './assets/images/homepage.png';
import elephant from './assets/images/elephant.jpg';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <section className={styles.hero} style={{ backgroundImage: `url(${homepageImage})` }}>
          <div className={styles.heroOverlay}>
            <h1>Roadless Travel</h1>
            <p>Заброска в труднодоступные места Кузбасса на легендарном УАЗе</p>
            <button className={styles.ctaButton}>Заказать заброску</button>
          </div>
        </section>
        <section id="services" className={styles.services}>
          <h2>Наши усллуги</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Заброска туристов</h3>
              <p>Доставим к началу вашего маршрута: в горы, к реке, на турбазу. Грибников, рыбаков, лыжников - всех ждем!</p>
              <p><strong>Стоимость:</strong> от 2 000 p/рейс</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Грузоперевозки</h3>
              <p>Перевезем стройматериалы на дачу, собранный урожай, лодку или снаряжение для охоты и рыбалки.</p>
              <p><strong>Стоимость:</strong> от 1 500 p/час</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Вахтовые перевозки</h3>
              <p>Доставка рабочих к объектам в условиях полного бездорожья</p>
              <p><strong>Стоимость:</strong> индивидуальный расчет</p>
            </div>
          </div>
          <div className={styles.separator}>
            <img src={elephant} alt="Слон"></img>
          </div>
        </section>
        <section id="contacts" className={styles.contacts}>
          <h2>Контакты</h2>
          <p>Готовы отправиться в путь? Свяжитесь с нами:</p>
          <p>Телефон: <a href="tel:+79964128534">+7 996 412 85 34</a></p>
          <p>Email: <a href="mailto:irinakazynkina@gmail.com">irinakazynkina@gmail.com</a></p>
          <p>Находимся в Кемерово</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
