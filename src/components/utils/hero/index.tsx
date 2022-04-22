import styles from "./styles.module.scss";
import { Logo } from "svg";
function Hero(): JSX.Element {
  return (
    <header className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.information}>
          <h2 className={styles.logodeg}>GoTruster.</h2>
          <h1>La confianza es tu negocio.</h1>
        </div>

        <div className={styles.ctaButtons}>
          <a href="#">Comenzar</a>
          <a href="#">Conocer mas</a>
        </div>

        <div className={styles.logo}>
          <img src="/images/hero.png" alt="hero" />
        </div>
      </div>
    </header>
  );
}
export default Hero;
